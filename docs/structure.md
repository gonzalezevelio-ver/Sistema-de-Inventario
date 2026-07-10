# Estructura del Proyecto: Sistema de Inventario Aurora

## 1. Estructura de Carpetas General

Sistema-de-Inventario/
├── api/ # Backend Node.js + TypeScript
│ ├── src/
│ │ ├── app.ts # Punto de entrada de la API
│ │ ├── domain/ # Capa de Dominio (Clean Architecture)
│ │ │ ├── entities/ # Entidades de negocio
│ │ │ │ ├── Insumo.ts
│ │ │ │ ├── Bodega.ts
│ │ │ │ └── Movimiento.ts
│ │ │ └── repositories/ # Interfaces de repositorios
│ │ │ ├── InsumoRepository.ts
│ │ │ ├── BodegaRepository.ts
│ │ │ └── MovimientoRepository.ts
│ │ ├── usecases/ # Casos de Uso (Lógica de negocio)
│ │ │ ├── crearInsumo.ts
│ │ │ ├── listarInsumos.ts
│ │ │ ├── listarInsumosBajoStock.ts
│ │ │ ├── actualizarInsumo.ts
│ │ │ ├── eliminarInsumo.ts
│ │ │ ├── importarInsumosCSV.ts
│ │ │ ├── registrarMovimiento.ts
│ │ │ ├── listarMovimientos.ts
│ │ │ ├── listarMovimientosPorInsumo.ts
│ │ │ └── listarBodegas.ts
│ │ ├── infra/ # Capa de Infraestructura
│ │ │ ├── database/
│ │ │ │ └── connection.ts # Pool de conexión MySQL
│ │ │ └── repositories/ # Implementaciones concretas
│ │ │ ├── InsumoRepositoryMySQL.ts
│ │ │ ├── BodegaRepositoryMySQL.ts
│ │ │ └── MovimientoRepositoryMySQL.ts
│ │ └── presentation/ # Capa de Presentación
│ │ ├── controllers/ # Controladores Express
│ │ │ ├── insumoController.ts
│ │ │ ├── bodegaController.ts
│ │ │ └── movimientoController.ts
│ │ └── routes/ # Definición de rutas HTTP
│ │ ├── insumoRoutes.ts
│ │ ├── bodegaRoutes.ts
│ │ └── movimientoRoutes.ts
│ ├── package.json
│ ├── tsconfig.json
│ ├── ecosystem.config.ts # Configuración PM2
│ └── Dockerfile
│
├── web/ # Frontend Django
│ ├── config/ # Configuración del proyecto Django
│ │ ├── settings.py
│ │ ├── urls.py
│ │ └── wsgi.py
│ ├── core/ # Aplicación principal
│ │ ├── init.py
│ │ ├── apps.py
│ │ ├── views.py # Vistas Django
│ │ ├── urls.py # URLs de la aplicación
│ │ ├── services/ # Servicios de negocio (Frontend)
│ │ │ ├── insumo_service.py
│ │ │ ├── movimiento_service.py
│ │ │ └── dashboard_service.py
│ │ ├── infra/ # Clientes de infraestructura
│ │ │ └── api_client.py # Cliente HTTP para consumir la API
│ │ ├── templates/ # Plantillas HTML
│ │ │ ├── base.html
│ │ │ ├── dashboard.html
│ │ │ ├── insumos.html
│ │ │ ├── movimientos_form.html
│ │ │ ├── historial.html
│ │ │ └── ayuda.html
│ │ └── static/ # Archivos estáticos
│ │ └── css/
│ │ └── style.css
│ ├── manage.py # CLI de Django
│ ├── requirements.txt # Dependencias Python
│ └── Dockerfile
│
├── db/ # Scripts de base de datos
│ └── init.sql # Inicialización y datos de prueba
│
├── docs/ # Documentación del proyecto
│ ├── detalle.md
│ ├── structure.md
│ ├── casos_uso.md
│ ├── install.md
│ ├── infographic.md
│ └── anexos.md
│
├── docker-compose.yml # Orquestación de servicios
├── .dockerignore
├── .gitignore
└── README.md Sistema-de-Inventario/
├── api/ # Backend Node.js + TypeScript
│ ├── src/
│ │ ├── app.ts # Punto de entrada de la API
│ │ ├── domain/ # Capa de Dominio (Clean Architecture)
│ │ │ ├── entities/ # Entidades de negocio
│ │ │ │ ├── Insumo.ts
│ │ │ │ ├── Bodega.ts
│ │ │ │ └── Movimiento.ts
│ │ │ └── repositories/ # Interfaces de repositorios
│ │ │ ├── InsumoRepository.ts
│ │ │ ├── BodegaRepository.ts
│ │ │ └── MovimientoRepository.ts
│ │ ├── usecases/ # Casos de Uso (Lógica de negocio)
│ │ │ ├── crearInsumo.ts
│ │ │ ├── listarInsumos.ts
│ │ │ ├── listarInsumosBajoStock.ts
│ │ │ ├── actualizarInsumo.ts
│ │ │ ├── eliminarInsumo.ts
│ │ │ ├── importarInsumosCSV.ts
│ │ │ ├── registrarMovimiento.ts
│ │ │ ├── listarMovimientos.ts
│ │ │ ├── listarMovimientosPorInsumo.ts
│ │ │ └── listarBodegas.ts
│ │ ├── infra/ # Capa de Infraestructura
│ │ │ ├── database/
│ │ │ │ └── connection.ts # Pool de conexión MySQL
│ │ │ └── repositories/ # Implementaciones concretas
│ │ │ ├── InsumoRepositoryMySQL.ts
│ │ │ ├── BodegaRepositoryMySQL.ts
│ │ │ └── MovimientoRepositoryMySQL.ts
│ │ └── presentation/ # Capa de Presentación
│ │ ├── controllers/ # Controladores Express
│ │ │ ├── insumoController.ts
│ │ │ ├── bodegaController.ts
│ │ │ └── movimientoController.ts
│ │ └── routes/ # Definición de rutas HTTP
│ │ ├── insumoRoutes.ts
│ │ ├── bodegaRoutes.ts
│ │ └── movimientoRoutes.ts
│ ├── package.json
│ ├── tsconfig.json
│ ├── ecosystem.config.ts # Configuración PM2
│ └── Dockerfile
│
├── web/ # Frontend Django
│ ├── config/ # Configuración del proyecto Django
│ │ ├── settings.py
│ │ ├── urls.py
│ │ └── wsgi.py
│ ├── core/ # Aplicación principal
│ │ ├── init.py
│ │ ├── apps.py
│ │ ├── views.py # Vistas Django
│ │ ├── urls.py # URLs de la aplicación
│ │ ├── services/ # Servicios de negocio (Frontend)
│ │ │ ├── insumo_service.py
│ │ │ ├── movimiento_service.py
│ │ │ └── dashboard_service.py
│ │ ├── infra/ # Clientes de infraestructura
│ │ │ └── api_client.py # Cliente HTTP para consumir la API
│ │ ├── templates/ # Plantillas HTML
│ │ │ ├── base.html
│ │ │ ├── dashboard.html
│ │ │ ├── insumos.html
│ │ │ ├── movimientos_form.html
│ │ │ ├── historial.html
│ │ │ └── ayuda.html
│ │ └── static/ # Archivos estáticos
│ │ └── css/
│ │ └── style.css
│ ├── manage.py # CLI de Django
│ ├── requirements.txt # Dependencias Python
│ └── Dockerfile
│
├── db/ # Scripts de base de datos
│ └── init.sql # Inicialización y datos de prueba
│
├── docs/ # Documentación del proyecto
│ ├── detalle.md
│ ├── structure.md
│ ├── casos_uso.md
│ ├── install.md
│ ├── infographic.md
│ └── anexos.md
│
├── docker-compose.yml # Orquestación de servicios
├── .dockerignore
├── .gitignore
└── README.md


## 2. Detalle de Capas (Clean Architecture)

### 2.1 Capa de Dominio (`src/domain/`)
- **Entidades**: Definen las estructuras de datos del negocio (`Insumo`, `Bodega`, `Movimiento`). Son interfaces TypeScript sin dependencias externas.
- **Repositorios**: Interfaces que definen los contratos de persistencia. Aislan la lógica de negocio de la implementación concreta de la base de datos.

### 2.2 Capa de Casos de Uso (`src/usecases/`)
Contiene la lógica de negocio pura. Cada caso de uso corresponde a una operación específica del sistema, por ejemplo:
- `crearInsumo`: Valida y persiste un nuevo insumo.
- `registrarMovimiento`: Valida stock y registra entrada/salida.
- `eliminarInsumo`: Verifica existencia antes de eliminar.

**Principio**: Los casos de uso dependen de interfaces de repositorio, no de implementaciones concretas.

### 2.3 Capa de Infraestructura (`src/infra/`)
- **Database**: Configuración del pool de conexiones MySQL.
- **Repositorios MySQL**: Implementaciones concretas de las interfaces de dominio. Usan `mysql2/promise` para consultas parametrizadas.

### 2.4 Capa de Presentación (`src/presentation/`)
- **Controladores**: Manejan las peticiones HTTP, llaman a los casos de uso y retornan respuestas JSON.
- **Rutas**: Definen los endpoints REST y asocian cada URL a su controlador correspondiente.

### 2.5 Frontend (Django)
- **Vistas**: Renderizan templates HTML.
- **Servicios**: Abstraen la comunicación con la API (usan `APIClient`).
- **Templates**: Utilizan herencia de plantillas para mantener consistencia visual.

## 3. Dependencias y Relaciones

| Capa | Depende de |
|------|------------|
| **Presentation** | Use Cases |
| **Use Cases** | Domain Repositories (interfaces) |
| **Infrastructure** | Domain Repositories (implementaciones concretas) |
| **Domain** | Ninguna (independiente) |
| **Frontend (Django)** | API (mediante HTTP) |

> **Nota**: No existen dependencias inversas, lo que facilita el testing y el mantenimiento.

## 4. Configuración de Entornos

| Archivo | Propósito |
|---------|-----------|
| `docker-compose.yml` | Orquesta los servicios (db, api, web) para desarrollo y producción. |
| `ecosystem.config.ts` | Configuración de PM2 para producción en modo cluster. |
| `.env` (no versionado) | Variables de entorno sensibles (DB_PASSWORD, SECRET_KEY, etc.). |
| `tsconfig.json` | Configuración del compilador TypeScript. |

---
