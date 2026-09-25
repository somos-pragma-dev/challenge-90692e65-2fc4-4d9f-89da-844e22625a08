import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

/**
 * Componente principal que monta la aplicación React en el DOM.
 * Incluye manejo de errores para casos donde el contenedor no se encuentre.
 */
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se encontró el elemento con id "root" en el DOM.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Manejo de errores global para promesas rechazadas
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled rejection:', event.reason);
});

// Manejo de errores global para errores no capturados
window.addEventListener('error', (event) => {
  console.error('Unhandled error:', event.error);
});