from dataclasses import dataclass

@dataclass
class Bodega:
    id: int
    nombre: str
    ubicacion: str
    responsable: str