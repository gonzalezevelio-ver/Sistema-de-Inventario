from dataclasses import dataclass
from datetime import datetime

@dataclass
class Insumo:
    id: int
    nombre: str
    unidad_medida: str
    stock_total: int
    stock_minimo: int
    created_at: datetime
    updated_at: datetime