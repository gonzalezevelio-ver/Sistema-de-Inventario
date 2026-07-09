from ..infra.api_client import APIClient

class InsumoService:
    def __init__(self):
        self.client = APIClient()

    def listar_todos(self):
        return self.client.get_insumos()

    def listar_bajo_stock(self):
        return self.client.get_insumos_bajo_stock()

    def crear(self, data):
        return self.client.create_insumo(data)

    def actualizar(self, id, data):
        return self.client.update_insumo(id, data)

    def eliminar(self, id):           # NUEVO
        return self.client.delete_insumo(id)

    def importar_csv(self, archivo):
        return self.client.import_insumos_csv(archivo)