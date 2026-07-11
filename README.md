
---

## 📄 `README.md` 

```markdown
# Sistema de Inventario Aurora

Plataforma para el control de inventario, gestión de insumos, movimientos de stock y alertas de stock bajo.

---

## 📚 Índice

- [1. Información General](#1-información-general)
- [2. Tecnologías](#2-tecnologías)
- [3. Instalación y Ejecución](#3-instalación-y-ejecución)
- [4. Estructura del Proyecto](#4-estructura-del-proyecto)
- [5. Documentación de API](#5-documentación-de-api)
- [6. Colaboración](#6-colaboración)
- [7. Licencia](#7-licencia)

---

## 1. Información General

- **Nombre del proyecto**: Sistema de Inventario y Bodegas
- **Versión**: v2.0
- **Descripción**: Aplicación para gestionar insumos, bodegas y movimientos de inventario, con capacidad de importación desde CSV, historial de movimientos y dashboard de indicadores.
- **Fecha de lanzamiento**: 2026-06-23
- **Estado**: Estable / Producción

### Integrantes del Equipo

| Nombre | Rol | GitHub |
|--------|-----|--------|
| Evelio González | Líder Técnico / Backend | [gonzalezevelio-ver](https://github.com/gonzalezevelio-ver) |
| Kevin Kasquez | Frontend / QA | [kevinvasaquezp-project](https://github.com/kevinvasaquezp-project) |
| Álvaro Veliz | Base de Datos / Documentación | [alvaroariel57-cmd](https://github.com/alvaroariel57-cmd) |

---

## 2. Tecnologías

| Componente | Tecnología | Versión |
|------------|------------|---------|
| **API** | Node.js + TypeScript + Express | Node 18 / TS 5.0 |
| **Web** | Django 4.x (MVC con templates) | 4.2+ |
| **Base de datos** | MySQL 8.0 | 8.0 |
| **Contenerización** | Docker + Docker Compose | 3.8 |
| **Frontend** | HTML5, CSS3, Bootstrap 5, JavaScript | - |

---

## 3. Instalación y Ejecución

### Requisitos
- Docker y Docker Compose instalados.
- Puertos `3000` (API), `8000` (Web) y `3307` (MySQL) libres.

### Pasos

```bash
# Clonar repositorio
git clone https://github.com/gonzalezevelio-ver/Sistema-de-Inventario.git
cd Sistema-de-Inventario

# Levantar los contenedores
docker-compose up --build

Acceso
Servicio	URL
Frontend Web	http://localhost:8000
API REST	http://localhost:3000/api
Health Check	http://localhost:3000/health
4. Estructura del Proyecto
text
Sistema-de-Inventario/
├── api/                 # Backend Node.js + TypeScript
├── web/                 # Frontend Django
├── db/                  # Scripts de base de datos
├── docs/                # Documentación técnica
├── docker-compose.yml   # Orquestación de servicios
└── README.md            # Este archivo
Para más detalles, consulta docs/structure.md.

5. Documentación de API
Endpoints Disponibles
Método	Endpoint	Descripción
GET	/api/insumos	Listar todos los insumos
GET	/api/insumos/bajos-stock	Listar insumos con stock bajo
POST	/api/insumos	Crear nuevo insumo
PUT	/api/insumos/:id	Actualizar insumo
DELETE	/api/insumos/:id	Eliminar insumo (cascada)
POST	/api/insumos/import	Importar insumos desde CSV
GET	/api/bodegas	Listar bodegas
POST	/api/movimientos	Registrar movimiento
GET	/api/movimientos	Listar movimientos con filtros
GET	/health	Health check

6. Colaboración
Guía para Nuevos Contribuidores
Fork el repositorio y crea una rama con tu nombre:

bash
git checkout -b feature/nombre-integrantes
Realiza commits siguiendo Conventional Commits:

bash
git commit -m "feat: agregar endpoint para eliminar insumo"
Abre un Pull Request hacia la rama develop y solicita revisión de otro integrante.

Asegúrate de que todos los integrantes tengan al menos 5 commits y 1 PR mergeado.

Convenciones de Git
Ramas: feature/nombre-integrantes, hotfix/descripcion

Mensajes: feat, fix, docs, refactor, test

PRs: Mínimo 1 por integrante, con revisión de pares.

