from ..infra.api_client import APIClient

class MovimientoService:
    def __init__(self):
        self.client = APIClient()

    def registrar(self, data):
        return self.client.create_movimiento(data)

    def listar(self, insumo_id=None, desde=None, hasta=None):
        params = {}
        if insumo_id:
            params['insumo_id'] = insumo_id
        if desde:
            params['desde'] = desde
        if hasta:
            params['hasta'] = hasta
        return self.client.get_movimientos(params)

    def get_bodegas(self):
        return self.client.get_bodegas()

    def get_insumos(self):
        return self.client.get_insumos()