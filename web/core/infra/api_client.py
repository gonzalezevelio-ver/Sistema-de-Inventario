import requests
from django.conf import settings

class APIClient:
    BASE_URL = settings.API_BASE_URL

    @classmethod
    def _request(cls, method, endpoint, data=None):
        url = f"{cls.BASE_URL}{endpoint}"
        try:
            if method == 'GET':
                resp = requests.get(url, timeout=10)
            elif method == 'POST':
                resp = requests.post(url, json=data, timeout=10)
            elif method == 'PUT':
                resp = requests.put(url, json=data, timeout=10)
            else:
                raise ValueError(f"Método no soportado: {method}")
            resp.raise_for_status()
            return resp.json()
        except requests.exceptions.RequestException as e:
            print(f"Error API: {e}")
            return None

    # Insumos
    def get_insumos(self):
        return self._request('GET', '/insumos') or []

    def get_insumos_bajo_stock(self):
        return self._request('GET', '/insumos/bajos-stock') or []

    def create_insumo(self, data):
        return self._request('POST', '/insumos', data)

    def update_insumo(self, id, data):
        return self._request('PUT', f'/insumos/{id}', data)

    def import_insumos_csv(self, file):
        url = f"{self.BASE_URL}/insumos/import"
        try:
            files = {'archivo': file}
            resp = requests.post(url, files=files, timeout=30)
            resp.raise_for_status()
            return resp.json()
        except Exception as e:
            print(f"Error import CSV: {e}")
            return None

    # Bodegas
    def get_bodegas(self):
        return self._request('GET', '/bodegas') or []

    # Movimientos
    def create_movimiento(self, data):
        return self._request('POST', '/movimientos', data)

    def get_movimientos(self, params=None):
        url = f"{self.BASE_URL}/movimientos"
        try:
            resp = requests.get(url, params=params, timeout=10)
            resp.raise_for_status()
            return resp.json()
        except Exception:
            return []