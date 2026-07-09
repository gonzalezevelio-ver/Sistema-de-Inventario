-- ============================================
-- SISTEMA DE INVENTARIO Y BODEGAS (CON RESET)
-- ============================================

DROP DATABASE IF EXISTS inventario_db;
CREATE DATABASE inventario_db;
USE inventario_db;

-- TABLA INSUMOS
CREATE TABLE insumos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    unidad_medida VARCHAR(20) NOT NULL,
    stock_total INT NOT NULL DEFAULT 0,
    stock_minimo INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- TABLA BODEGAS
CREATE TABLE bodegas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(200),
    responsable VARCHAR(100)
);

-- TABLA MOVIMIENTOS
CREATE TABLE movimientos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo ENUM('entrada', 'salida') NOT NULL,
    fecha DATE NOT NULL,
    cantidad INT NOT NULL,
    motivo TEXT,
    insumo_id INT NOT NULL,
    bodega_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (insumo_id) REFERENCES insumos(id) ON DELETE CASCADE,
    FOREIGN KEY (bodega_id) REFERENCES bodegas(id) ON DELETE CASCADE
);

-- ============================================
-- DATOS ADICIONALES
-- ============================================

-- BODEGAS EN PANAMA
INSERT INTO bodegas (nombre, ubicacion, responsable) VALUES
('Bodega Este', 'Via Transistmica, Panama City', 'Ana Rodriguez'),
('Bodega Oeste', 'Arraijan, Panama Oeste', 'Luis Martinez'),
('Bodega Pacifico', 'Costa del Este, Panama', 'Marta Fernandez'),
('Bodega Atlantico', 'Colon, Provincia de Colon', 'Pedro Ramirez'),
('Bodega Central 2', 'San Miguelito, Panama', 'Rosa Garcia');

