import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

interface MetricCardProps {
  label: string;
  value: string | number;
  icon: string;
  variant?: 'primary' | 'success' | 'secondary';
}

const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  icon,
  variant = 'primary'
}) => {
  return (
    <div className={`metric-card metric-card--${variant}`}>
      <div className="metric-icon">{icon}</div>
      <div className="metric-content">
        <span className="metric-label">{label}</span>
        <span className="metric-value">{value}</span>
      </div>
    </div>
  );
};

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('es-ES').format(num);
};

export const TransactionMetrics: React.FC = () => {
  const context = useContext(TransactionContext);
  
  if (!context) {
    throw new Error('TransactionMetrics debe ser usado dentro de un TransactionProvider');
  }

  const { state } = context;
  const { transactions, totalAmount, successfulTransactions, isLoading, error } = state;

  if (isLoading && transactions.length === 0) {
    return (
      <div className="metrics-container metrics-container--loading">
        <div className="loading-spinner">
          <span className="spinner-icon">⏳</span>
          <span>Cargando métricas de transacciones...</span>
        </div>
      </div>
    );
  }

  if (error && transactions.length === 0) {
    return (
      <div className="metrics-container metrics-container--error">
        <div className="error-placeholder">
          <span className="error-icon">⚠️</span>
          <span>No hay datos disponibles debido a un error de conexión</span>
        </div>
      </div>
    );
  }

  const totalTransactions = transactions.length;
  const successRate = totalTransactions > 0 
    ? ((successfulTransactions / totalTransactions) * 100).toFixed(1)
    : '0.0';

  return (
    <section className="metrics-section">
      <h2 className="metrics-title">Métricas de Transacciones</h2>
      <div className="metrics-grid">
        <MetricCard
          label="Total de Transacciones"
          value={formatNumber(totalTransactions)}
          icon="📊"
          variant="primary"
        />
        <MetricCard
          label="Monto Total Transaccionado"
          value={formatCurrency(totalAmount)}
          icon="💰"
          variant="success"
        />
        <MetricCard
          label="Transacciones Exitosas"
          value={formatNumber(successfulTransactions)}
          icon="✅"
          variant="secondary"
        />
        <MetricCard
          label="Tasa de Éxito"
          value={`${successRate}%`}
          icon="📈"
          variant={parseFloat(successRate) >= 80 ? 'success' : 'primary'}
        />
      </div>
      <div className="metrics-footer">
        <span className="metrics-info">
          Mostrando datos de {totalTransactions} transacciones procesadas
        </span>
      </div>
    </section>
  );
};

export default TransactionMetrics;