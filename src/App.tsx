import React, { useEffect, useReducer } from 'react';
import DashboardHeader from './components/DashboardHeader';
import TransactionMetrics from './components/TransactionMetrics';
import ErrorMessage from './components/ErrorMessage';
import { TransactionContext } from './context/TransactionContext';
import { useTransactionService } from './hooks/useTransactionService';
import { TransactionState, TransactionAction } from './types/TransactionTypes';

/**
 * Estado inicial para el reducer de transacciones.
 */
const initialState: TransactionState = {
  transactions: [],
  totalAmount: 0,
  successfulTransactions: 0,
  isLoading: false,
  error: null,
  lastUpdated: null,
};

/**
 * Reducer para manejar el estado complejo de las transacciones.
 * @param state - Estado actual.
 * @param action - Acción a aplicar.
 * @returns Nuevo estado.
 */
const transactionReducer = (
  state: TransactionState,
  action: TransactionAction
): TransactionState => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        transactions: action.payload.transactions,
        totalAmount: action.payload.totalAmount,
        successfulTransactions: action.payload.successfulTransactions,
        lastUpdated: new Date().toISOString(),
      };
    case 'FETCH_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'RESET_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};

/**
 * Componente principal de la aplicación que estructura el dashboard.
 * Proporciona el contexto de transacciones a todos los componentes hijos.
 */
const App: React.FC = () => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);
  const { fetchTransactions } = useTransactionService();

  useEffect(() => {
    const loadData = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const data = await fetchTransactions();
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: {
            transactions: data.transactions,
            totalAmount: data.totalAmount,
            successfulTransactions: data.successfulTransactions,
          },
        });
      } catch (error) {
        dispatch({
          type: 'FETCH_ERROR',
          payload: error instanceof Error ? error.message : 'Error desconocido',
        });
      }
    };

    loadData();
    const interval = setInterval(loadData, 5000);

    return () => clearInterval(interval);
  }, [fetchTransactions]);

  const handleRetry = () => {
    dispatch({ type: 'RESET_ERROR' });
    fetchTransactions()
      .then((data) => {
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: {
            transactions: data.transactions,
            totalAmount: data.totalAmount,
            successfulTransactions: data.successfulTransactions,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_ERROR',
          payload: error instanceof Error ? error.message : 'Error desconocido',
        });
      });
  };

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      <div className="app-container">
        <DashboardHeader />
        {state.error ? (
          <ErrorMessage message={state.error} onRetry={handleRetry} />
        ) : (
          <TransactionMetrics
            totalAmount={state.totalAmount}
            successfulTransactions={state.successfulTransactions}
            isLoading={state.isLoading}
            lastUpdated={state.lastUpdated}
          />
        )}
      </div>
    </TransactionContext.Provider>
  );
};

export default App;