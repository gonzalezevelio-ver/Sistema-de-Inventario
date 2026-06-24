# Sistema de Inventario y Bodegas

Plataforma para el control de inventario, gestión de insumos, movimientos de stock y alertas de stock bajo, con una API REST y un panel web administrativo.

---
## 📚 Índice

- [1. Información General](#1-información-general)
- [2. Tecnologías](#2-tecnologías)
- [3. Instalación](#3-instalación-y-ejecución)

## 1. Información General

- **Nombre del proyecto**: Sistema de Inventario y Bodegas
- **Descripción**: Aplicación para gestionar insumos, bodegas y movimientos de inventario, con capacidad de importación desde CSV, historial de movimientos y dashboard de indicadores.

- **Responsable**: Evelio Gonzalez
- **Repositorio**: [https://github.com/gonzalezevelio-ver]
- **Fecha**: 2026-06-23
- **Versión**: v1.0.0




## 2. Tecnologías

| Componente      | Tecnología                               |
|-----------------|------------------------------------------|
| **API**         | Node.js + TypeScript + Express           |
| **Web**         | Django 4.x (MVC con templates)           |
| **Base de datos**| MySQL 8.0                                |
| **Contenerización** | Docker + Docker Compose             |
| **Frontend**    | HTML5, CSS3, JavaScript (Django templates) |

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