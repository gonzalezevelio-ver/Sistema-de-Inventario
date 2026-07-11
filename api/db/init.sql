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

-- ============================================
-- INSERCIÓN DE 50 INSUMOS DE EJEMPLO
-- ============================================

INSERT INTO insumos (nombre, unidad_medida, stock_total, stock_minimo) VALUES
('Arroz', 'kg', 5, 5),
('Azúcar', 'g', 10, 5),
('Sal', 'L', 15, 6),
('Harina', 'ml', 20, 8),
('Aceite vegetal', 'unidad', 25, 10),
('Vinagre', 'paquete', 30, 12),
('Pimienta', 'caja', 35, 14),
('Orégano', 'rollo', 40, 16),
('Comino', 'botella', 45, 18),
('Pasta spaghetti', 'lata', 50, 20),
('Pasta codito', 'kg', 55, 5),
('Frijoles', 'g', 60, 5),
('Lentejas', 'L', 65, 6),
('Garbanzos', 'ml', 70, 8),
('Atún en lata', 'unidad', 75, 10),
('Salsa de tomate', 'paquete', 80, 12),
('Mayonesa', 'caja', 85, 14),
('Mostaza', 'rollo', 90, 16),
('Ketchup', 'botella', 95, 18),
('Leche', 'lata', 100, 20),
('Leche evaporada', 'kg', 105, 5),
('Leche condensada', 'g', 110, 5),
('Queso mozzarella', 'L', 115, 6),
('Queso cheddar', 'ml', 120, 8),
('Mantequilla', 'unidad', 125, 10),
('Margarina', 'paquete', 130, 12),
('Huevos', 'caja', 135, 14),
('Pan rallado', 'rollo', 140, 16),
('Avena', 'botella', 145, 18),
('Café', 'lata', 150, 20),
('Té', 'kg', 155, 5),
('Chocolate en polvo', 'g', 160, 5),
('Servilletas', 'L', 165, 6),
('Papel higiénico', 'ml', 170, 8),
('Toallas de papel', 'unidad', 175, 10),
('Detergente', 'paquete', 180, 12),
('Cloro', 'caja', 185, 14),
('Jabón líquido', 'rollo', 190, 16),
('Esponjas', 'botella', 195, 18),
('Bolsas de basura', 'lata', 200, 20),
('Film plástico', 'kg', 205, 5),
('Papel aluminio', 'g', 210, 5),
('Vasos desechables', 'L', 215, 6),
('Platos desechables', 'ml', 220, 8),
('Cubiertos desechables', 'unidad', 225, 10),
('Agua embotellada', 'paquete', 230, 12),
('Refresco cola', 'caja', 235, 14),
('Jugo naranja', 'rollo', 240, 16),
('Azúcar morena', 'botella', 245, 18),
('Miel', 'lata', 250, 20);

-- BODEGAS EN PANAMA
INSERT INTO bodegas (nombre, ubicacion, responsable) VALUES
('Bodega Este', 'Via Transistmica, Panama City', 'Ana Rodriguez'),
('Bodega Oeste', 'Arraijan, Panama Oeste', 'Luis Martinez'),
('Bodega Pacifico', 'Costa del Este, Panama', 'Marta Fernandez'),
('Bodega Atlantico', 'Colon, Provincia de Colon', 'Pedro Ramirez'),
('Bodega Central 2', 'San Miguelito, Panama', 'Rosa Garcia');

