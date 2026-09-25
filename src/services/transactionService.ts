import { Transaction, TransactionMetrics, TransactionApiResponse } from '../types/TransactionTypes';
import { fetchWithTimeout, getApiClient } from '../utils/api';

const TRANSACTIONS_ENDPOINT = '/transactions';

export async function fetchTransactions(): Promise<Transaction[]> {
  const client = getApiClient();
  const response = await fetchWithTimeout<TransactionApiResponse>(
    TRANSACTIONS_ENDPOINT,
    { method: 'GET' },
    5000
  );
  return response.data;
}

export function calculateMetrics(transactions: Transaction[]): TransactionMetrics {
  if (!transactions || transactions.length === 0) {
    return {
      totalTransactions: 0,
      totalAmount: 0,
      successfulTransactions: 0,
      successRate: 0,
    };
  }

  const totalTransactions = transactions.length;
  const totalAmount = transactions.reduce((sum, transaction) => {
    return sum + (transaction.amount || 0);
  }, 0);

  const successfulTransactions = transactions.filter(
    (transaction) => transaction.status === 'completed'
  ).length;

  const successRate = totalTransactions > 0
    ? Math.round((successfulTransactions / totalTransactions) * 100)
    : 0;

  return {
    totalTransactions,
    totalAmount,
    successfulTransactions,
    successRate,
  };
}

export function filterTransactionsByStatus(
  transactions: Transaction[],
  status: Transaction['status']
): Transaction[] {
  return transactions.filter((transaction) => transaction.status === status);
}

export function filterTransactionsByDateRange(
  transactions: Transaction[],
  startDate: Date,
  endDate: Date
): Transaction[] {
  return transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.timestamp);
    return transactionDate >= startDate && transactionDate <= endDate;
  });;
}

export function groupTransactionsByCategory(
  transactions: Transaction[]
): Record<string, Transaction[]> {
  return transactions.reduce((groups, transaction) => {
    const category = transaction.category || 'uncategorized';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(transaction);
    return groups;
  }, {} as Record<string, Transaction[]>);
}

export function getTransactionById(
  transactions: Transaction[],
  id: string
): Transaction | undefined {
  return transactions.find((transaction) => transaction.id === id);
}

export function sortTransactionsByAmount(
  transactions: Transaction[],
  ascending: boolean = false
): Transaction[] {
  return [...transactions].sort((a, b) => {
    return ascending ? a.amount - b.amount : b.amount - a.amount;
  });
}

export function sortTransactionsByDate(
  transactions: Transaction[],
  ascending: boolean = false
): Transaction[] {
  return [...transactions].sort((a, b) => {
    const dateA = new Date(a.timestamp).getTime();
    const dateB = new Date(b.timestamp).getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
}