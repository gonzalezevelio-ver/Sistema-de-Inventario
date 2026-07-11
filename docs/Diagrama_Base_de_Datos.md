
---

## 📄 `diagrama bd`

```markdown
# Diagrama de Base de Datos

## Sistema de Inventario Aurora v2.0

---

## 1. Modelo Entidad-Relación

El siguiente diagrama representa la estructura de la base de datos del Sistema de Inventario Aurora, mostrando las tablas, sus atributos y las relaciones entre ellas.


┌─────────────────────────────────────────────────────────────────┐
│ BODEGAS │
├──────────────┬──────────────────────────────────────────────────┤
│ id (PK) │ INT AUTO_INCREMENT │
│ nombre │ VARCHAR(255) NOT NULL │
│ ubicacion │ VARCHAR(255) │
│ responsable │ VARCHAR(255) │
└──────────────┴──────────────────────────────────────────────────┘
│
│ 1:N
│
▼
┌─────────────────────────────────────────────────────────────────┐
│ INSUMOS │
├──────────────┬──────────────────────────────────────────────────┤
│ id (PK) │ INT AUTO_INCREMENT │
│ nombre │ VARCHAR(255) NOT NULL │
│ unidad_medida│ VARCHAR(50) │
│ stock_total │ INT DEFAULT 0 │
│ stock_minimo │ INT DEFAULT 0 │
│ created_at │ DATETIME DEFAULT CURRENT_TIMESTAMP │
│ updated_at │ DATETIME ON UPDATE CURRENT_TIMESTAMP │
└──────────────┴──────────────────────────────────────────────────┘
│
│ 1:N
│
▼
┌─────────────────────────────────────────────────────────────────┐
│ MOVIMIENTOS │
├──────────────┬──────────────────────────────────────────────────┤
│ id (PK) │ INT AUTO_INCREMENT │
│ tipo │ ENUM('entrada','salida') NOT NULL │
│ fecha │ DATE NOT NULL │
│ cantidad │ INT NOT NULL │
│ motivo │ TEXT │
│ insumo_id (FK)│ INT NOT NULL │
│ bodega_id (FK)│ INT NOT NULL │
│ created_at │ DATETIME DEFAULT CURRENT_TIMESTAMP │
└──────────────┴──────────────────────────────────────────────────┘


## 2. Descripción de Tablas

### 2.1 `insumos`

Almacena el catálogo de insumos gestionados en el inventario.

| Campo | Tipo | Restricción | Descripción |
|-------|------|-------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Identificador único del insumo. |
| `nombre` | VARCHAR(255) | NOT NULL | Nombre descriptivo del insumo. |
| `unidad_medida` | VARCHAR(50) | - | Unidad en la que se mide (kg, lt, unidad, etc.). |
| `stock_total` | INT | DEFAULT 0 | Cantidad disponible en inventario. |
| `stock_minimo` | INT | DEFAULT 0 | Nivel mínimo para alerta de reabastecimiento. |
| `created_at` | DATETIME | DEFAULT CURRENT_TIMESTAMP | Fecha de creación del registro. |
| `updated_at` | DATETIME | ON UPDATE CURRENT_TIMESTAMP | Fecha de última actualización. |

**Índices recomendados:**
- `idx_insumos_nombre` en `nombre` para búsquedas rápidas.
- `idx_insumos_stock` en `stock_total` para consultas de stock bajo.

### 2.2 `bodegas`

Almacena las bodegas donde se ubican los insumos.

| Campo | Tipo | Restricción | Descripción |
|-------|------|-------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Identificador único de la bodega. |
| `nombre` | VARCHAR(255) | NOT NULL | Nombre de la bodega. |
| `ubicacion` | VARCHAR(255) | - | Dirección o ubicación física. |
| `responsable` | VARCHAR(255) | - | Persona encargada de la bodega. |

**Índices recomendados:**
- `idx_bodegas_nombre` en `nombre`.

### 2.3 `movimientos`

Registra todas las entradas y salidas de insumos.

| Campo | Tipo | Restricción | Descripción |
|-------|------|-------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Identificador único del movimiento. |
| `tipo` | ENUM('entrada','salida') | NOT NULL | Indica si es entrada o salida de stock. |
| `fecha` | DATE | NOT NULL | Fecha en que ocurrió el movimiento. |
| `cantidad` | INT | NOT NULL | Cantidad de insumos movidos. |
| `motivo` | TEXT | - | Razón o justificación del movimiento. |
| `insumo_id` | INT | NOT NULL, FOREIGN KEY | Insumo afectado (referencia a `insumos.id`). |
| `bodega_id` | INT | NOT NULL, FOREIGN KEY | Bodega donde se realiza el movimiento (referencia a `bodegas.id`). |
| `created_at` | DATETIME | DEFAULT CURRENT_TIMESTAMP | Fecha de registro del movimiento. |

**Índices recomendados:**
- `idx_movimientos_fecha` en `fecha` para consultas por rango.
- `idx_movimientos_insumo` en `insumo_id` para filtros por insumo.

## 3. Relaciones

| Relación | Tipo | Descripción |
|----------|------|-------------|
| `movimientos.insumo_id` → `insumos.id` | **1:N** | Un insumo puede tener muchos movimientos. |
| `movimientos.bodega_id` → `bodegas.id` | **1:N** | Una bodega puede tener muchos movimientos. |
| `insumos` - `movimientos` | **CASCADE** | Al eliminar un insumo, se eliminan sus movimientos asociados. |

## 4. Script SQL de Creación

El script completo de inicialización se encuentra en `db/init.sql` y contiene:

```sql
-- Creación de tablas
CREATE TABLE IF NOT EXISTS insumos (...);
CREATE TABLE IF NOT EXISTS bodegas (...);
CREATE TABLE IF NOT EXISTS movimientos (...);

-- Inserción de datos de prueba
INSERT INTO bodegas (nombre, ubicacion, responsable) VALUES
('Bodega Central', 'Av. Principal 123', 'Evelio González'),
('Bodega Norte', 'Calle Norte 456', 'Kevin Kasquez');

INSERT INTO insumos (nombre, unidad_medida, stock_total, stock_minimo) VALUES
('Harina de Trigo', 'kg', 150, 50),
('Aceite de Girasol', 'lt', 80, 20),
('Sal Fina', 'kg', 200, 100);