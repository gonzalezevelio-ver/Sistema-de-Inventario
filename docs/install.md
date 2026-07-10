# Guía de Instalación y Despliegue

## Sistema de Inventario Aurora v2.0

---

## 1. Requisitos Previos

Antes de iniciar la instalación, asegúrate de tener instalados los siguientes componentes:

| Componente | Versión Mínima | Verificación |
|------------|----------------|--------------|
| **Docker** | 20.10.x | `docker --version` |
| **Docker Compose** | 2.x | `docker-compose --version` |
| **Git** | 2.30.x | `git --version` |
| **Puertos Libres** | 3000, 8000, 3307 | `netstat -tulpn` (Linux) o `netstat -ano` (Windows) |

> **Nota**: Si no deseas usar Docker, puedes ejecutar los servicios de forma nativa con Node.js 18+ y Python 3.11+. Sin embargo, se recomienda encarecidamente usar Docker para evitar conflictos de dependencias.

---

## 2. Clonación del Repositorio

```bash
git clone https://github.com/gonzalezevelio-ver/Sistema-de-Inventario.git
cd Sistema-de-Inventario

3. Despliegue con Docker Compose (Recomendado)
4 Levantar los Servicios
bash
docker-compose up --build
Este comando:

Construye las imágenes de api y web.

Descarga la imagen de MySQL 8.0.

Inicializa la base de datos con el script init.sql.

Levanta los tres servicios interconectados.

4.1 Verificar el Estado
bash
docker-compose ps
Salida esperada:

text
NAME                IMAGE                    PORTS
inventario_db       mysql:8.0                0.0.0.0:3307->3306/tcp
inventario_api      sistema-inventario-api   0.0.0.0:3000->3000/tcp
inventario_web      sistema-inventario-web   0.0.0.0:8000->8000/tcp
4.2 Acceso a la Aplicación
Servicio	URL
Frontend Web	http://localhost:8000
API REST	http://localhost:3000/api
Health Check API	http://localhost:3000/health
Base de Datos	localhost:3307 (usuario: root, contraseña: root)
4.3 Detener los Servicios
bash
docker-compose down
Para eliminar volúmenes y datos:

bash
docker-compose down -v 