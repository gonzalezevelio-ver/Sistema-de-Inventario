from dataclasses import dataclass
from datetime import date

@dataclass
class Movimiento:
    id: int
    tipo: str
    fecha: date
    cantidad: int
    motivo: str
    insumo_id: int
    bodega_id: int
    insumo_nombre: str = ""
    bodega_nombre: str = ""