# React Weather App

Una aplicación de clima moderna construida con **React** y **Vite**, enfocada en **Clean Code**, **Arquitectura por Capas** y una experiencia de usuario fluida con búsqueda predictiva.

## Características

- **Búsqueda Predictiva (Autosuggest):** Sugerencias de ciudades en tiempo real mientras escribes (con *Debouncing* de 500ms para optimizar llamadas).
- **Datos en Tiempo Real:** Clima actual, temperatura (mín/máx) y humedad usando la API de OpenWeatherMap.
- **Arquitectura Limpia:** Separación estricta entre UI, Lógica de Estado (Custom Hooks) y Servicios de Datos (API Services).
- **Manejo de Errores:** Feedback visual para el usuario en caso de errores de red o ciudades no encontradas.
- **Diseño Responsivo:** Estilizado modularmente con **CSS Modules**.

## Tecnologías

- **Core:** React 18, Vite.
- **Estilos:** CSS Modules (Sin conflictos de nombres globales).
- **API:** OpenWeatherMap (Geocoding API & Weather Data API).
- **Control de Versiones:** Git & GitHub.

## Arquitectura del Proyecto

El proyecto sigue el principio de **Separación de Incumbencias (SoC)**:

```text
src/
├── components/      # UI Components ("Dumb" components, solo renderizan)
├── hooks/           # Custom Hooks (Lógica de estado y efectos)
├── services/        # API Services (Lógica de fetch y adaptadores de datos)
└── App.jsx          # Componente principal (Ensamblaje)
