# Implementación de un Dashboard con React Hooks, useReducer y Context API

La empresa necesita un dashboard para visualizar datos en tiempo real sobre las transacciones bancarias. El dashboard debe mostrar el número total de transacciones, el monto total transaccionado y el número de transacciones exitosas. Los datos provienen de un servicio externo que proporciona información actualizada cada 5 segundos. El dashboard debe utilizar React Hooks, useReducer y Context API para gestionar el estado y las acciones del componente. Los actores involucrados son el 'usuario del dashboard' y el'servicio de transacciones'. El dashboard debe ser idempotente en la actualización de datos, con un timeout de 5 segundos para la conexión al servicio de transacciones. En caso de falla del servicio, el dashboard debe mostrar un mensaje de error y permitir la recarga manual de datos.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | React Hooks |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 3 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración inicial del dashboard

**Objetivo:** Configurar el entorno de desarrollo y crear la estructura básica del dashboard.

**Tiempo estimado:** 30 minutos

**Instrucciones:**

- Configurar el entorno de desarrollo con React y las dependencias necesarias.
- Crear la estructura básica del dashboard con los componentes necesarios para mostrar las métricas de transacciones.

**Entregable:** Estructura básica del dashboard con componentes configurados.

<details>
<summary>Pistas de conocimiento</summary>

- Utilizar create-react-app para iniciar el proyecto.
- Crear componentes para el encabezado, cuerpo y pie de página del dashboard.

</details>

### Fase 2: Implementación de React Hooks y Context API

**Objetivo:** Implementar el uso de React Hooks y Context API para gestionar el estado del dashboard.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Crear un contexto para proporcionar el estado y las acciones del dashboard a los componentes hijos.
- Utilizar useContext para acceder al estado y las acciones en los componentes del dashboard.

**Entregable:** Dashboard con Context API implementada para gestionar el estado.

<details>
<summary>Pistas de conocimiento</summary>

- Crear un proveedor de contexto para encapsular el estado y las acciones.
- Utilizar useContext en los componentes para acceder al estado y las acciones.

</details>

### Fase 3: Implementación de useReducer para gestionar el estado complejo

**Objetivo:** Implementar useReducer para gestionar el estado complejo del dashboard.

**Tiempo estimado:** 1 hora 30 minutos

**Instrucciones:**

- Definir las acciones y el reducer para gestionar el estado del dashboard.
- Utilizar useReducer para actualizar el estado del dashboard en respuesta a las acciones.

**Entregable:** Dashboard con useReducer implementado para gestionar el estado complejo.

<details>
<summary>Pistas de conocimiento</summary>

- Definir las acciones y el reducer para manejar los diferentes estados del dashboard.
- Utilizar useReducer para actualizar el estado del dashboard en respuesta a las acciones.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son React Hooks y cómo se utilizan en un proyecto de React?
- **paraQueSirve**: ¿Para qué se utiliza Context API en un proyecto de React?
- **comoSeUsa**: ¿Cómo se implementa useContext en un componente de React?
- **erroresComunes**: ¿Cuáles son los errores comunes al utilizar Context API y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones implica la elección de useReducer sobre useState para gestionar el estado en un proyecto de React?

## Criterios de Evaluacion

- Implementación correcta de React Hooks y Context API.
- Uso adecuado de useContext para acceder al estado y las acciones en los componentes.
- Definición clara de acciones y reducer para gestionar el estado complejo del dashboard.
- Manejo de errores comunes al utilizar Context API y useReducer.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
