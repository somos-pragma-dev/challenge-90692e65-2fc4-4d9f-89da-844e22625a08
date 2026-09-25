export interface Transaction {
  id: string;
  timestamp: string;
  amount: number;
  currency: string;
  status: TransactionStatus;
  merchantName: string;
  category: string;
}

export type TransactionStatus = 'completed' | 'pending' | 'failed' | 'refunded';

export interface TransactionMetrics {
  totalTransactions: number;
  totalAmount: number;
  successfulTransactions: number;
  successRate: number;
}

export interface TransactionState {
  transactions: Transaction[];
  metrics: TransactionMetrics;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}

export type TransactionAction =
  | { type: 'FETCH_TRANSACTIONS_START' }
  | { type: 'FETCH_TRANSACTIONS_SUCCESS'; payload: Transaction[] }
  | { type: 'FETCH_TRANSACTIONS_ERROR'; payload: string }
  | { type: 'REFRESH_DATA' };

export interface TransactionContextType {
  state: TransactionState;
  dispatch: React.Dispatch<TransactionAction>;
  refreshTransactions: () => void;
}

export interface TransactionApiResponse {
  data: Transaction[];
  meta?: {
    total: number;
    page: number;
    limit: number;
  };
}

export const INITIAL_TRANSACTION_STATE: TransactionState = {
  transactions: [],
  metrics: {
    totalTransactions: 0,
    totalAmount: 0,
    successfulTransactions: 0,
    successRate: 0,
  },
  loading: false,
  error: null,
  lastUpdated: null,
};