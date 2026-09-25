import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

/**
 * Punto de entrada alternativo para testing o integración con otras herramientas.
 * Mantiene la misma configuración que main.tsx pero sin StrictMode.
 */
const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error('Failed to find the root element');
}