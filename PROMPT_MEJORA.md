# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Contexto técnico original
Dashboard con React Hooks, useReducer y Context API

### Reto
- Tema: React Hooks
- Seniority: junior-l2
- Tipo: practical
- Título: Implementación de un Dashboard con React Hooks, useReducer y Context API
- Tiempo estimado: 3 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración inicial del dashboard — objetivo: Configurar el entorno de desarrollo y crear la estructura básica del dashboard. — entregable (NO resolver): Estructura básica del dashboard con componentes configurados.
- Fase 2: Implementación de React Hooks y Context API — objetivo: Implementar el uso de React Hooks y Context API para gestionar el estado del dashboard. — entregable (NO resolver): Dashboard con Context API implementada para gestionar el estado.
- Fase 3: Implementación de useReducer para gestionar el estado complejo — objetivo: Implementar useReducer para gestionar el estado complejo del dashboard. — entregable (NO resolver): Dashboard con useReducer implementado para gestionar el estado complejo.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}

// === ARCHIVO: vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
  },
});

// === ARCHIVO: package.json ===
{
  "name": "transaction-dashboard",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "axios": "^1.6.2"
  },
  "devDependencies": {
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.3.3",
    "vite": "^5.0.10",
    "@testing-library/react": "^14.1.2",
    "@testing-library/jest-dom": "^6.1.5"
  }
}

// === ARCHIVO: src/main.tsx ===
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

// === ARCHIVO: src/index.tsx ===
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

// === ARCHIVO: src/App.tsx ===
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


// === ARCHIVO: index.html ===
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Dashboard de transacciones bancarias en tiempo real" />
    <meta name="theme-color" content="#1890ff" />
    <title>Dashboard de Transacciones</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f5f7fa;
        min-height: 100vh;
      }
      #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        flex-direction: column;
        gap: 16px;
      }
      .loading-spinner {
        width: 48px;
        height: 48px;
        border: 4px solid #e8e8e8;
        border-top-color: #1890ff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      .loading-text {
        color: #595959;
        font-size: 14px;
      }
      .error-fallback {
        padding: 24px;
        text-align: center;
        color: #ff4d4f;
        background: #fff2f0;
        border: 1px solid #ffccc7;
        border-radius: 4px;
        margin: 24px;
      }
    </style>
  </head>
  <body>
    <div id="root">
      <div class="loading-container">
        <div class="loading-spinner"></div>
        <div class="loading-text">Cargando dashboard...</div>
      </div>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// === ARCHIVO: src/context/TransactionContext.tsx ===
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

// === ARCHIVO: src/hooks/useTransactionService.ts ===
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


// === ARCHIVO: src/components/DashboardHeader.tsx ===
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

// === ARCHIVO: src/components/TransactionMetrics.tsx ===
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

// === ARCHIVO: src/components/ErrorMessage.tsx ===
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


// === ARCHIVO: src/types/TransactionTypes.ts ===
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

// === ARCHIVO: src/utils/api.ts ===
import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios';

const DEFAULT_TIMEOUT = 5000;

let apiClient: AxiosInstance | null = null;

export function getApiClient(): AxiosInstance {
  if (!apiClient) {
    apiClient = axios.create({
      baseURL: '/api',
      timeout: DEFAULT_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    apiClient.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.code === 'ECONNABORTED') {
          console.error('La solicitud excedió el tiempo de espera de 5 segundos');
        } else if (error.response) {
          console.error('Error del servidor:', error.response.status, error.response.statusText);
        } else if (error.request) {
          console.error('No se recibió respuesta del servidor');
        } else {
          console.error('Error al configurar la solicitud:', error.message);
        }
        return Promise.reject(error);
      }
    );
  }
  return apiClient;
}

export async function fetchWithTimeout<T>(
  url: string,
  options?: AxiosRequestConfig,
  timeout: number = DEFAULT_TIMEOUT
): Promise<T> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const client = getApiClient();
    const response = await client.get<T>(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response.data;
  } catch (error) {
    clearTimeout(timeoutId);
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED' || error.name === 'AbortError') {
        throw new Error('La solicitud tardó demasiado tiempo. Por favor, intente de nuevo.');
      }
      throw new Error(error.response?.data?.message || 'Error al conectar con el servidor');
    }
    throw error;
  }
}

export function isNetworkError(error: unknown): boolean {
  return axios.isAxiosError(error) && !error.response;
}

export function isTimeoutError(error: unknown): boolean {
  return axios.isAxiosError(error) && (
    error.code === 'ECONNABORTED' ||
    error.message.includes('timeout') ||
    error.name === 'AbortError'
  );
}

// === ARCHIVO: src/services/transactionService.ts ===
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


// === ARCHIVO: src/styles.css ===
:root {
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-success: #10b981;
  --color-success-light: #d1fae5;
  --color-warning: #f59e0b;
  --color-warning-light: #fef3c7;
  --color-error: #ef4444;
  --color-error-light: #fee2e2;
  --color-text-primary: #111827;
  --color-text-secondary: #6b7280;
  --color-text-muted: #9ca3af;
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-border: #e5e7eb;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-family);
  background-color: var(--color-background);
  color: var(--color-text-primary);
  min-height: 100vh;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
  width: 100%;
}

.dashboard-header {
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  border: 1px solid var(--color-border);
}

.dashboard-header__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
}

.dashboard-header__subtitle {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

.dashboard-header__status {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--color-background);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
}

.dashboard-header__status--loading {
  color: var(--color-warning);
}

.dashboard-header__status--connected {
  color: var(--color-success);
  background-color: var(--color-success-light);
}

.dashboard-header__status--error {
  color: var(--color-error);
  background-color: var(--color-error-light);
}

.dashboard-header__status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.dashboard-header__status-dot--loading {
  background-color: var(--color-warning);
}

.dashboard-header__status-dot--connected {
  background-color: var(--color-success);
  animation: none;
}

.dashboard-header__status-dot--error {
  background-color: var(--color-error);
  animation: none;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.metric-card {
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-xl);
  border: 1px solid var(--color-border);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.metric-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.metric-card__icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
}

.metric-card__icon--transactions {
  background-color: #dbeafe;
  color: var(--color-primary);
}

.metric-card__icon--amount {
  background-color: var(--color-success-light);
  color: var(--color-success);
}

.metric-card__icon--success {
  background-color: #fce7f3;
  color: #ec4899;
}

.metric-card__label {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-xs);
}

.metric-card__value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1.2;
}

.metric-card__value--currency {
  font-variant-numeric: tabular-nums;
}

.error-message {
  background-color: var(--color-error-light);
  border: 1px solid var(--color-error);
  border-radius: var(--radius-md);
  padding: var(--spacing-md) var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.error-message__icon {
  font-size: 1.25rem;
  color: var(--color-error);
  flex-shrink: 0;
}

.error-message__content {
  flex: 1;
}

.error-message__title {
  font-weight: 600;
  color: var(--color-error);
  margin-bottom: var(--spacing-xs);
}

.error-message__text {
  font-size: 0.875rem;
  color: var(--color-text-primary);
}

.error-message__action {
  flex-shrink: 0;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-family: inherit;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn--primary {
  background-color: var(--color-primary);
  color: white;
}

.btn--primary:hover:not(:disabled) {
  background-color: var(--color-primary-hover);
}

.btn--outline {
  background-color: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
}

.btn--outline:hover:not(:disabled) {
  background-color: var(--color-background);
  border-color: var(--color-text-secondary);
}

.loading-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 768px) {
  .dashboard-container {
    padding: var(--spacing-md);
  }

  .dashboard-header__title {
    font-size: 1.25rem;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .metric-card {
    padding: var(--spacing-lg);
  }

  .metric-card__value {
    font-size: 1.5rem;
  }
}

```
