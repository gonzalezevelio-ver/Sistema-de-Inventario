# Casos de Uso del Sistema de Inventario Aurora

## 1. Introducción

Este documento describe los casos de uso del Sistema de Inventario Aurora, basados en la arquitectura y funcionalidades implementadas en la versión v2.0.

## 2. Lista de Casos de Uso

### 2.1 Gestión de Insumos

| ID | Nombre | Actor | Descripción |
|----|--------|-------|-------------|
| CU-01 | Listar Insumos | Usuario | Muestra todos los insumos registrados en el sistema. |
| CU-02 | Ver Detalle de Insumo | Usuario | Consulta información detallada de un insumo específico. |
| CU-03 | Crear Insumo | Usuario | Agrega un nuevo insumo al sistema (nombre, unidad, stock, mínimo). |
| CU-04 | Actualizar Insumo | Usuario | Modifica los datos de un insumo existente. |
| CU-05 | Eliminar Insumo | Usuario | Elimina un insumo y todos sus movimientos asociados (cascada). |
| CU-06 | Importar Insumos CSV | Usuario | Carga masiva de insumos desde un archivo CSV. |
| CU-07 | Listar Insumos Bajo Stock | Usuario | Muestra insumos cuyo stock_total es menor al stock_minimo. |

### 2.2 Gestión de Movimientos

| ID | Nombre | Actor | Descripción |
|----|--------|-------|-------------|
| CU-08 | Registrar Movimiento | Usuario | Registra una entrada o salida de stock. |
| CU-09 | Listar Movimientos | Usuario | Consulta el historial completo de movimientos. |
| CU-10 | Filtrar Movimientos | Usuario | Filtra el historial por insumo y rango de fechas. |

### 2.3 Gestión de Bodegas

| ID | Nombre | Actor | Descripción |
|----|--------|-------|-------------|
| CU-11 | Listar Bodegas | Usuario | Muestra todas las bodegas disponibles en el sistema. |

### 2.4 Dashboard

| ID | Nombre | Actor | Descripción |
|----|--------|-------|-------------|
| CU-12 | Ver Dashboard | Usuario | Muestra estadísticas clave: total insumos, stock bajo, movimientos hoy. |
| CU-13 | Ver Últimos Movimientos | Usuario | Muestra los 5 movimientos más recientes. |
| CU-14 | Ver Insumos Críticos | Usuario | Muestra los insumos con stock por debajo del mínimo. |

## 3. Especificación de Casos de Uso Críticos

### 3.1 CU-05: Eliminar Insumo

| Campo | Valor |
|-------|-------|
| **Actor Principal** | Usuario |
| **Actor Secundario** | Sistema |
| **Precondiciones** | El insumo existe en la base de datos. |
| **Postcondiciones** | El insumo y todos sus movimientos asociados son eliminados. |
| **Flujo Principal** | 1. El usuario selecciona un insumo y hace clic en "Eliminar".<br>2. El sistema muestra una ventana de confirmación.<br>3. El usuario confirma la acción.<br>4. El sistema elimina el insumo (con cascade).<br>5. El sistema redirige a la lista de insumos con mensaje de éxito. |
| **Flujo Alternativo** | 1. El insumo no existe: el sistema retorna error 404.<br>2. Fallo en la base de datos: el sistema retorna error 500. |
| **Endpoints Relacionados** | `DELETE /api/insumos/:id` |

### 3.2 CU-08: Registrar Movimiento

| Campo | Valor |
|-------|-------|
| **Actor Principal** | Usuario |
| **Actor Secundario** | Sistema |
| **Precondiciones** | El insumo y la bodega existen en la base de datos. |
| **Postcondiciones** | El stock del insumo se actualiza y el movimiento queda registrado. |
| **Flujo Principal** | 1. El usuario completa el formulario de movimiento (tipo, fecha, cantidad, motivo, insumo, bodega).<br>2. El sistema valida que el stock sea suficiente (si es salida).<br>3. El sistema actualiza el stock del insumo.<br>4. El sistema registra el movimiento en la base de datos.<br>5. El sistema redirige con mensaje de éxito. |
| **Flujo Alternativo** | 1. Stock insuficiente: el sistema retorna error 400 con mensaje "Stock insuficiente".<br>2. Insumo no existe: error 404.<br>3. Error de transacción: el sistema revierte la operación. |
| **Endpoints Relacionados** | `POST /api/movimientos` |

### 3.3 CU-06: Importar Insumos CSV

| Campo | Valor |
|-------|-------|
| **Actor Principal** | Usuario |
| **Actor Secundario** | Sistema |
| **Precondiciones** | El archivo CSV tiene el formato esperado. |
| **Postcondiciones** | Los insumos válidos son importados y almacenados. |
| **Flujo Principal** | 1. El usuario selecciona un archivo CSV y hace clic en "Importar".<br>2. El sistema valida el formato del archivo.<br>3. El sistema procesa cada fila (nombre, unidad, stock_total, stock_minimo).<br>4. Los insumos válidos se guardan en la base de datos.<br>5. El sistema retorna un reporte de importación (importados, errores). |
| **Flujo Alternativo** | 1. Archivo vacío o malformado: error 400.<br>2. Fila inválida: se registra el error y se continúa con las siguientes. |
| **Endpoints Relacionados** | `POST /api/insumos/import` |

## 4. Validación de Reglas de Negocio

| Regla | Descripción | Implementación |
|-------|-------------|----------------|
| **Stock Negativo** | No se permiten salidas que dejen stock negativo. | Validación en `registrarMovimiento` antes de actualizar stock. |
| **Eliminación en Cascada** | Eliminar un insumo elimina todos sus movimientos. | `ON DELETE CASCADE` en la base de datos. |
| **Formato CSV** | El archivo debe tener columnas: nombre, unidad_medida, stock_total, stock_minimo. | Validación en `importarInsumosCSV`. |
| **Unicidad del Insumo** | No se permite duplicar insumos con el mismo nombre. | Validación en el repositorio (índice único en la BD). |

---

> **Última Revisión**: 2026-07-10