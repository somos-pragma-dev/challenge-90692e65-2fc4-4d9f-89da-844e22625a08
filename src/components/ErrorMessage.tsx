import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  isVisible?: boolean;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onRetry,
  isVisible = true
}) => {
  if (!isVisible || !message) {
    return null;
  }

  const handleRetry = (): void => {
    if (onRetry) {
      onRetry();
    }
  };

  const getErrorDetails = (): { code: string; suggestion: string } => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('timeout') || lowerMessage.includes('timeout')) {
      return {
        code: 'ERR_TIMEOUT',
        suggestion: 'El servicio tardó demasiado en responder. Intenta recargar los datos.'
      };
    }
    
    if (lowerMessage.includes('network') || lowerMessage.includes('conexión')) {
      return {
        code: 'ERR_NETWORK',
        suggestion: 'No se pudo establecer conexión con el servidor. Verifica tu conexión a internet.'
      };
    }
    
    if (lowerMessage.includes('500') || lowerMessage.includes('internal server')) {
      return {
        code: 'ERR_SERVER',
        suggestion: 'El servidor encontró un error interno. Por favor, intenta más tarde.'
      };
    }
    
    if (lowerMessage.includes('401') || lowerMessage.includes('unauthorized')) {
      return {
        code: 'ERR_AUTH',
        suggestion: 'La sesión ha expirado o las credenciales no son válidas.'
      };
    }
    
    if (lowerMessage.includes('404') || lowerMessage.includes('not found')) {
      return {
        code: 'ERR_NOT_FOUND',
        suggestion: 'El recurso solicitado no fue encontrado en el servidor.'
      };
    }
    
    return {
      code: 'ERR_UNKNOWN',
      suggestion: 'Ocurrió un error inesperado. Por favor, intenta nuevamente.'
    };
  };

  const errorDetails = getErrorDetails();

  return (
    <div className="error-message-container" role="alert" aria-live="assertive">
      <div className="error-content">
        <div className="error-header">
          <span className="error-icon-large" aria-hidden="true">⚠️</span>
          <div className="error-title-block">
            <h3 className="error-title">Error de Conexión</h3>
            <span className="error-code">{errorDetails.code}</span>
          </div>
        </div>
        
        <div className="error-body">
          <p className="error-message">{message}</p>
          <p className="error-suggestion">{errorDetails.suggestion}</p>
        </div>
        
        {onRetry && (
          <div className="error-actions">
            <button
              type="button"
              onClick={handleRetry}
              className="retry-button"
              aria-label="Reintentar conexión"
            >
              <span className="retry-icon">↻</span>
              Reintentar Conexión
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;