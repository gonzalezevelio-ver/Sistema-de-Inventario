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

-- INSUMOS 
INSERT INTO insumos (nombre, unidad_medida, stock_total, stock_minimo) VALUES
('Arroz', 'kg', 1000, 200),
('Frijoles', 'kg', 600, 100),
('Lentejas', 'kg', 300, 50),
('Sal', 'kg', 150, 30),
('Pimienta', 'kg', 40, 10),
('Oregano', 'kg', 20, 5),
('Comino', 'kg', 25, 5),
('Paprika', 'kg', 30, 8),
('Ajo en polvo', 'kg', 35, 10),
('Cebolla en polvo', 'kg', 30, 8),
('Caldo de pollo', 'unidad', 500, 100),
('Caldo de res', 'unidad', 400, 80),
('Salsa de tomate', 'litros', 120, 30),
('Mayonesa', 'litros', 90, 20),
('Mostaza', 'litros', 70, 15),
('Vinagre', 'litros', 60, 15),
('Aceite de oliva', 'litros', 100, 25),
('Mantequilla', 'kg', 80, 20),
('Leche en polvo', 'kg', 150, 40),
('Huevos', 'unidad', 2000, 500);

-- MOVIMIENTOS
INSERT INTO movimientos (tipo, fecha, cantidad, motivo, insumo_id, bodega_id) VALUES
('entrada', CURDATE(), 200, 'Compra mensual', (SELECT id FROM insumos WHERE nombre='Arroz'), (SELECT id FROM bodegas WHERE nombre='Bodega Este')),
('salida', CURDATE(), 30, 'Produccion de pan', (SELECT id FROM insumos WHERE nombre='Harina de Trigo'), (SELECT id FROM bodegas WHERE nombre='Bodega Central')),
('entrada', CURDATE(), 50, 'Compra directa', (SELECT id FROM insumos WHERE nombre='Aceite de oliva'), (SELECT id FROM bodegas WHERE nombre='Bodega Pacifico')),
('salida', CURDATE(), 10, 'Uso en cocina', (SELECT id FROM insumos WHERE nombre='Azucar Blanca'), (SELECT id FROM bodegas WHERE nombre='Bodega Norte')),
('entrada', CURDATE(), 100, 'Compra semanal', (SELECT id FROM insumos WHERE nombre='Frijoles'), (SELECT id FROM bodegas WHERE nombre='Bodega Atlantico')),
('salida', CURDATE(), 15, 'Mantenimiento de maquinaria', (SELECT id FROM insumos WHERE nombre='Aceite Vegetal'), (SELECT id FROM bodegas WHERE nombre='Bodega Sur'));