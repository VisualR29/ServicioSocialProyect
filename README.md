
# Manahuia – Plataforma para el Análisis de Deserción Escolar

Este proyecto web permite visualizar, analizar y recomendar estrategias para combatir la deserción escolar en instituciones del estado de Chihuahua. Está desarrollado con React y visualizaciones interactivas usando Recharts.

---

## 🚀 Características principales

- Visualización del porcentaje de deserción por institución.
- Análisis de causas predominantes por turno (General, Matutino, Vespertino).
- Recomendación automática de estrategias.
- Panel general con métricas y gráficas comparativas.
- Interfaz moderna, responsiva y organizada.

---

## 🧱 Estructura del proyecto

```
src/
  assets/             # Archivos como estrategias y base de datos CSV
  components/         # Componentes reutilizables (Header, Footer, Charts)
  pages/              # Vistas principales del sitio
  styles/             # Archivos CSS modulares por componente
  utils/              # Lógica y funciones de análisis de datos
  App.jsx             # Rutas principales
  index.js            # Entrada de la aplicación
```

---

## 📦 Dependencias clave

- **React** – Librería principal de UI.
- **React Router DOM** – Navegación entre páginas.
- **Recharts** – Visualización de gráficos.
- **PapaParse** – Lectura y parseo de archivos CSV.

---

## ▶️ Cómo ejecutar el proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/VisualR29/ServicioSocialProyect.git
cd ServicioSocialProyect
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta en desarrollo:

```bash
npm start
```

---

## 📁 Fuente de datos

- El archivo `Base_datos_final.csv` contiene los datos recopilados por institución, incluyendo:
  - Institución
  - Capacitación
  - Ingresaron
  - Desertaron
  - Causa de Deserción
  - Turno

---

## ✨ Créditos

Desarrollado por **Esteban Rojas** dentro del proyecto **Manahuia** administrado **Alejandra Martínez** , como iniciativa estratégica contra la deserción escolar.