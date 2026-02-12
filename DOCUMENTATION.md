# Documentación del Proyecto: Réplica y Mejora de Realgestión

## 1. Visión General
Este proyecto consiste en la creación de una réplica exacta y funcional del panel administrativo de **Realgestión** utilizando tecnologías modernas. El objetivo principal es servir como un **Blueprint Interactivo** para el equipo de desarrollo, estableciendo los estándares de diseño (UI) y experiencia de usuario (UX) antes de iniciar la fase de mejoras estratégicas bajo la nueva gerencia.

## 2. Objetivo Estratégico
1.  **Auditoría Visual:** Mapear el estado actual del sistema para identificar fricciones.
2.  **Guía para Programadores:** Proporcionar un código base modular (React/Next.js) que los desarrolladores puedan seguir para mantener la consistencia.
3.  **Laboratorio de Mejoras:** Una vez finalizada la réplica, este entorno servirá para prototipar mejoras en reportería, flujos de inventario y optimización móvil.

## 3. Stack Tecnológico
*   **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS)
*   **Iconografía:** [Lucide React](https://lucide.dev/) (Iconos vectoriales consistentes)
*   **Lenguaje:** TypeScript (Para un código más robusto y autodocumentado)

## 4. Sistema de Diseño (Design System)
### Colores Oficiales
*   **Sidebar Background:** `#dbdbdb` (Gris neutral de baja distracción)
*   **Marca/Acentos:** `#EF6820` (Naranja corporativo)
*   **Botones Acción:** `#2563eb` (Azul eléctrico para interactividad)
*   **Emergencias/Chat:** `#ff4b6b` (Fucsia vibrante)
*   **Fondo General:** `#f3f4f6` (Gris claro para profundidad)

### Componentes Core
*   **Sidebar Colapsable:** Sistema de navegación que reduce su ancho a 64px. El botón de hamburguesa permanece en una posición estática (X fija) para mejorar la ergonomía del usuario.
*   **Header Compacto:** Altura de 60px para maximizar el espacio de trabajo.
*   **DataTables:** Tablas densas con tipografía clara, priorizando la legibilidad de datos financieros y de inventario.

## 5. Progreso de Implementación
- [x] **Panel de Control:** Estadísticas clave y tabla de ventas recientes.
- [x] **Gestión de Clientes:** Tabla con datos reales y formulario de creación.
- [x] **Catálogo de Productos:** Columnas de costo/utilidad y formulario de creación detallado.
- [x] **Detalle de Ventas:** Visualización completa de órdenes (Venta #00013), incluyendo pagos y desglose de productos.
- [x] **Navegación Fluida:** Transiciones sin saltos de píxeles entre estados colapsado/expandido.

## 6. Guía de Interacción (Para Devs)
*   **No "Saltos" de Layout:** Las transiciones de expansión del sidebar deben usar opacidad y escala de texto, manteniendo el ícono en una posición fija.
*   **Densidad de Información:** El sistema es una herramienta de trabajo (ERP), por lo que se prefiere una densidad alta de datos con márgenes controlados.
*   **Feedback Visual:** Todo botón debe tener estados `hover` y `active` definidos en Tailwind.

---
*Última actualización: 9 de Febrero, 2026*
