import React from 'react';

interface DashboardHeaderProps {
  onRefresh: () => void;
  isLoading?: boolean;
  lastUpdated?: Date | null;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  onRefresh,
  isLoading = false,
  lastUpdated = null
}) => {
  const formatLastUpdated = (): string => {
    if (!lastUpdated) return 'Sin datos aún';
    return `Última actualización: ${lastUpdated.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })}`;
  };

  const handleRefreshClick = (): void => {
    if (!isLoading) {
      onRefresh();
    }
  };

  return (
    <header className="dashboard-header">
      <div className="header-content">
        <div className="title-section">
          <h1 className="dashboard-title">Dashboard de Transacciones</h1>
          <p className="dashboard-subtitle">
            Monitoreo de transacciones bancarias en tiempo real
          </p>
        </div>
        <div className="controls-section">
          <span className="last-updated">{formatLastUpdated()}</span>
          <button
            type="button"
            onClick={handleRefreshClick}
            disabled={isLoading}
            className={`refresh-button ${isLoading ? 'loading' : ''}`}
            aria-label="Actualizar datos del dashboard"
          >
            <span className="refresh-icon">↻</span>
            {isLoading ? 'Actualizando...' : 'Recargar'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;