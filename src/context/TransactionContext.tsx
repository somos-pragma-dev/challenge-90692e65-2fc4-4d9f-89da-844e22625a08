import React, { createContext, useReducer, useContext, ReactNode, useEffect, useCallback } from 'react';
import { Transaction, TransactionState, TransactionAction, FetchResponse } from '../types/TransactionTypes';
import { fetchTransactions } from '../services/transactionService';

const initialState: TransactionState = {
  transactions: [],
  totalTransactions: 0,
  totalAmount: 0,
  successfulTransactions: 0,
  isLoading: false,
  error: null,
  lastUpdated: null,
  isPolling: false,
};

function transactionReducer(state: TransactionState, action: TransactionAction): TransactionState {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        transactions: action.payload.transactions,
        totalTransactions: action.payload.totalTransactions,
        totalAmount: action.payload.totalAmount,
        successfulTransactions: action.payload.successfulTransactions,
        lastUpdated: new Date(),
        isPolling: true,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isPolling: false,
      };
    case 'STOP_POLLING':
      return {
        ...state,
        isPolling: false,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'RESET_STATE':
      return initialState;
    default:
      return state;
  }
}

interface TransactionContextType {
  state: TransactionState;
  dispatch: React.Dispatch<TransactionAction>;
  refreshData: () => Promise<void>;
  startPolling: () => void;
  stopPolling: () => void;
  clearError: () => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  const refreshData = useCallback(async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const data: FetchResponse = await fetchTransactions();
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: {
          transactions: data.transactions,
          totalTransactions: data.totalTransactions,
          totalAmount: data.totalAmount,
          successfulTransactions: data.successfulTransactions,
        },
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido al cargar transacciones';
      dispatch({ type: 'FETCH_ERROR', payload: errorMessage });
    }
  }, []);

  const startPolling = useCallback(() => {
    dispatch({ type: 'STOP_POLLING' });
    const intervalId = setInterval(() => {
      refreshData();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [refreshData]);

  const stopPolling = useCallback(() => {
    dispatch({ type: 'STOP_POLLING' });
  }, []);

  const clearError = useCallback(() => {
    dispatch({ type: 'CLEAR_ERROR' });
  }, []);

  useEffect(() => {
    refreshData();
    const cleanup = startPolling();
    return () => {
      if (cleanup && typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, [refreshData, startPolling]);

  const contextValue: TransactionContextType = {
    state,
    dispatch,
    refreshData,
    startPolling,
    stopPolling,
    clearError,
  };

  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction(): TransactionContextType {
  const context = useContext(TransactionContext);
  if (context === undefined) {
    throw new Error('useTransaction debe ser usado dentro de un TransactionProvider');
  }
  return context;
}

export { TransactionContext };