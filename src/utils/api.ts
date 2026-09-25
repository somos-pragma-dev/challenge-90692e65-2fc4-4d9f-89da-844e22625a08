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