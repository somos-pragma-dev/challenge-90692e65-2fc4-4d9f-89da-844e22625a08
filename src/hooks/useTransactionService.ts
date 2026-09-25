import { useState, useCallback, useRef, useEffect } from 'react';
import { fetchTransactions } from '../services/transactionService';
import { Transaction, FetchResponse } from '../types/TransactionTypes';

const TIMEOUT_MS = 5000;
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 2000;

interface UseTransactionServiceReturn {
  transactions: Transaction[];
  totalTransactions: number;
  totalAmount: number;
  successfulTransactions: number;
  isLoading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  refetch: () => Promise<void>;
  retry: () => Promise<void>;
}

interface RetryConfig {
  maxRetries: number;
  delayMs: number;
}

function createTimeoutPromise<T>(ms: number, promise: Promise<T>): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => 
      setTimeout(() => reject(new Error(`Timeout de ${ms}ms excedido`)), ms)
    ),
  ]);
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function calculateBackoff(attempt: number, baseDelay: number): number {
  return baseDelay * Math.pow(2, attempt);
}

export function useTransactionService(): UseTransactionServiceReturn {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalTransactions, setTotalTransactions] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [successfulTransactions, setSuccessfulTransactions] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);
  const retryCountRef = useRef<number>(0);

  const processResponse = useCallback((data: FetchResponse) => {
    setTransactions(data.transactions);
    setTotalTransactions(data.totalTransactions);
    setTotalAmount(data.totalAmount);
    setSuccessfulTransactions(data.successfulTransactions);
    setLastUpdated(new Date());
    setError(null);
    retryCountRef.current = 0;
  }, []);

  const handleError = useCallback((err: Error, retries: number, config: RetryConfig): string => {
    if (err.name === 'AbortError') {
      return 'Solicitud cancelada';
    }
    if (retries < config.maxRetries) {
      return `Error: ${err.message}. Reintentando... (${retries + 1}/${config.maxRetries})`;
    }
    return `Error al cargar transacciones: ${err.message}`;
  }, []);

  const fetchData = useCallback(async (config: RetryConfig = { maxRetries: MAX_RETRIES, delayMs: RETRY_DELAY_MS }) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    setIsLoading(true);
    setError(null);

    let lastError: Error = new Error('Error desconocido');
    
    for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
      try {
        const timeoutPromise = createTimeoutPromise(
          TIMEOUT_MS,
          fetchTransactions()
        );
        
        const data = await timeoutPromise;
        processResponse(data);
        setIsLoading(false);
        return;
      } catch (err) {
        lastError = err instanceof Error ? err : new Error(String(err));
        
        if (attempt < config.maxRetries) {
          const backoffDelay = calculateBackoff(attempt, config.delayMs);
          await sleep(backoffDelay);
        }
      }
    }
    
    const errorMessage = handleError(lastError, retryCountRef.current, config);
    setError(errorMessage);
    setIsLoading(false);
    retryCountRef.current += 1;
  }, [processResponse, handleError]);

  const refetch = useCallback(async () => {
    await fetchData();
  }, [fetchData]);

  const retry = useCallback(async () => {
    retryCountRef.current = 0;
    await fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchData();
    
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    return () => {
      clearInterval(intervalId);
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchData]);

  return {
    transactions,
    totalTransactions,
    totalAmount,
    successfulTransactions,
    isLoading,
    error,
    lastUpdated,
    refetch,
    retry,
  };
}