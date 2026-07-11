
---

## 📄 `anexos.md`

```markdown
# Anexos del Proyecto

## Sistema de Inventario Aurora v2.0

---

## 1. Capturas de Pantalla

### 1.1 Dashboard Principal

![Dashboard](docs/images/dashboard.png)

*Figura 1: Vista del Dashboard con indicadores clave (total insumos, stock bajo, movimientos del día).*

### 1.2 Listado de Insumos

![Insumos](docs/images/insumos.png)

*Figura 2: Vista de la tabla de insumos con opciones de creación, importación y eliminación.*

### 1.3 Formulario de Movimientos

![Movimientos](docs/images/movimientos.png)

*Figura 3: Formulario para registrar entradas y salidas de stock.*

### 1.4 Historial de Movimientos

![Historial](docs/images/historial.png)

*Figura 4: Vista del historial con filtros por insumo y rango de fechas.*

### 1.5 Ayuda

![Ayuda](docs/images/ayuda.png)

*Figura 5: Sección de ayuda con instrucciones básicas de uso.*

---

## 2. Endpoints de la API (Documentación Técnica)

### 2.1 Resumen de Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/insumos` | Listar todos los insumos |
| GET | `/api/insumos/bajos-stock` | Listar insumos con stock bajo |
| POST | `/api/insumos` | Crear un nuevo insumo |
| PUT | `/api/insumos/:id` | Actualizar un insumo |
| DELETE | `/api/insumos/:id` | Eliminar un insumo (cascada) |
| POST | `/api/insumos/import` | Importar insumos desde CSV |
| GET | `/api/bodegas` | Listar todas las bodegas |
| POST | `/api/movimientos` | Registrar un movimiento |
| GET | `/api/movimientos` | Listar movimientos (con filtros) |
| GET | `/health` | Health check del servidor |

### 2.2 Detalle de Endpoints

#### GET `/api/insumos`

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "nombre": "Harina de Trigo",
    "unidad_medida": "kg",
    "stock_total": 150,
    "stock_minimo": 50,
    "created_at": "2026-07-10T03:00:00.000Z",
    "updated_at": "2026-07-10T03:00:00.000Z"
  }
]

3. Convenciones de Código
3.1 TypeScript (API)
Nombres de archivos: camelCase.ts.

Interfaces: Prefijo I (ej. IInsumo) o sin prefijo según convención del equipo.

Funciones: camelCase (ej. crearInsumo).

Tipado: Siempre explícito; evitar any.

3.2 Python (Django)
Nombres de archivos: snake_case.py.

Clases: PascalCase (ej. InsumoService).

Funciones: snake_case (ej. listar_todos).

3.3 Git (Conventional Commits)
text
feat: Agregar endpoint DELETE /insumos/:id
fix: Corregir validación de stock en movimiento salida
docs: Actualizar README con instrucciones de instalación
refactor: Optimizar consultas SQL en InsumoRepositoryMySQL
test: Agregar pruebas unitarias para eliminarInsumo
4. Enlaces de Interés
Recurso	URL
Repositorio GitHub	https://github.com/gonzalezevelio-ver/Sistema-de-Inventario
Documentación Django	https://docs.djangoproject.com
Documentación Express	https://expressjs.com
Documentación TypeScript	https://www.typescriptlang.org
Docker Compose	https://docs.docker.com/compose
5. Glosario de Términos
Término	Definición
Clean Architecture	Arquitectura de software que separa el código en capas concéntricas, donde las capas internas no dependen de las externas.
CRUD	Create, Read, Update, Delete – operaciones básicas de persistencia.
CSV	Comma-Separated Values – formato de archivo para datos tabulares.
ORM	Object-Relational Mapping – técnica para mapear objetos a tablas de base de datos.
REST	Representational State Transfer – estilo arquitectónico para APIs web.
Stock Crítico	Situación en la que el stock_total es inferior al stock_minimo definido.