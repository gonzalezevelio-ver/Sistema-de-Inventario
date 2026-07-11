# Detalle del Proyecto: Sistema de Inventario Aurora

## 1. Identificación del Proyecto

| Campo | Valor |
|-------|-------|
| **Nombre del Proyecto** | Sistema de Inventario Aurora |
| **Versión** | v2.0 |
| **Fecha de Creación** | 2025-06-23 |
| **Última Actualización** | 2026-07-10 |
| **Estado** | Producción |

## 2. Descripción General

El Sistema de Inventario Aurora es una aplicación web para la gestión integral de insumos, bodegas y movimientos de stock. La plataforma permite a los usuarios administrar el inventario en tiempo real, registrar entradas y salidas de productos, y visualizar indicadores clave mediante un dashboard interactivo.

### 2.1 Propósito

El sistema fue desarrollado para optimizar el control de inventario en pequeños y medianos almacenes, proporcionando:

- Visibilidad completa del stock disponible.
- Alertas automáticas de stock bajo.
- Historial detallado de movimientos.
- Capacidad de importación masiva de insumos desde archivos CSV.
- Interfaz intuitiva y responsiva.

### 2.2 Alcance

El proyecto abarca:

- **Backend API**: Implementación de un servidor RESTful con Node.js y TypeScript, siguiendo los principios de Clean Architecture.
- **Frontend Web**: Interfaz de usuario desarrollada con Django 4.x y Bootstrap 5, que consume la API mediante peticiones HTTP.
- **Base de Datos**: MySQL 8.0 con un esquema normalizado que garantiza la integridad referencial.
- **Contenerización**: Despliegue completo mediante Docker Compose, orquestando tres servicios: API, Web y Base de Datos.

### 2.3 Usuarios Objetivo

- **Administradores de inventario**: Encargados de mantener actualizado el stock.
- **Personal de bodega**: Registra movimientos diarios de entrada y salida.
- **Gerentes**: Supervisan indicadores de stock y toman decisiones basadas en datos.

## 3. Funcionalidades Principales

### 3.1 Dashboard
- Visualización de total de insumos, stock bajo, movimientos del día y total de movimientos.
- Listado de últimos movimientos registrados.
- Alertas de insumos con stock crítico.

### 3.2 Gestión de Insumos
- CRUD completo (Crear, Leer, Actualizar, Eliminar).
- Importación masiva desde archivos CSV (nombre, unidad_medida, stock_total, stock_minimo).
- Filtros por nombre y unidad de medida.

### 3.3 Gestión de Movimientos
- Registro de entradas y salidas con validación de stock.
- Asociación a insumos y bodegas.
- Motivo opcional para cada movimiento.

### 3.4 Historial
- Filtrado por insumo específico.
- Rango de fechas personalizable.
- Visualización detallada de cada movimiento (fecha, tipo, cantidad, bodega, motivo).

### 3.5 Ayuda
- Documentación básica de uso integrada en la aplicación.

## 4. Tecnologías Utilizadas

| Componente | Tecnología | Versión |
|------------|------------|---------|
| **API** | Node.js + TypeScript + Express | Node 18 / TS 5.0+ |
| **Frontend** | Django + Bootstrap 5 | Django 4.2+ |
| **Base de Datos** | MySQL | 8.0 |
| **Contenerización** | Docker + Docker Compose | 3.8 |
| **Orquestación** | PM2 (Cluster Mode) | 5.x |
| **Lenguajes** | Python 3.11, TypeScript 5.x, HTML5, CSS3, JavaScript |

## 5. Integrantes del Equipo

| Nombre Completo | Rol | GitHub | Contribución |
|-----------------|-----|--------|---------------|
| Evelio González | Líder Técnico / Backend | [gonzalezevelio-ver](https://github.com/gonzalezevelio-ver) | Arquitectura de la API, configuración Docker, endpoints CRUD |
| Kevin Kasquez | Frontend / QA | [kevinvasaquezp-project](https://github.com/kevinvasaquezp-project) | Desarrollo de vistas Django, integración con API, pruebas |
| Álvaro Veliz | Base de Datos / Documentación | [alvaroariel57-cmd](https://github.com/alvaroariel57-cmd) | Modelado de BD, diagrama ER, documentación técnica |

## 6. Estado del Proyecto

El proyecto se encuentra en su versión **v2.0 estable**, con todas las funcionalidades planificadas implementadas y probadas. La aplicación ha sido desplegada exitosamente en entornos de desarrollo y producción.

- ✅ API REST operativa con 11 endpoints.
- ✅ Frontend funcional con todas las vistas.
- ✅ Base de datos normalizada con relaciones correctas.
- ✅ `docker-compose up` levanta los tres servicios sin intervención manual.
- ✅ Código siguiendo Clean Architecture y tipado estricto en TypeScript.
- ✅ Documentación completa según rúbrica académica.

---