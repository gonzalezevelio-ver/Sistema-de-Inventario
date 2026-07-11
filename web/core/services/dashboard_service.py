from ..infra.api_client import APIClient
from datetime import datetime, timedelta
from collections import defaultdict

class DashboardService:
    def __init__(self):
        self.client = APIClient()

    def get_stats(self):
        insumos = self.client.get_insumos() or []
        bajo_stock = self.client.get_insumos_bajo_stock() or []
        movimientos = self.client.get_movimientos() or []
        hoy = datetime.now().date()
        hoy_str = str(hoy)

        # Movimientos de hoy
        movimientos_hoy = [m for m in movimientos if m.get('fecha', '').startswith(hoy_str)]

        # Total movimientos
        total_movimientos = len(movimientos)

        # Últimos 7 días: agrupar por fecha
        ultimos_7_dias = []
        for i in range(7):
            fecha = hoy - timedelta(days=i)
            fecha_str = str(fecha)
            # Contar movimientos de esa fecha
            count = sum(1 for m in movimientos if m.get('fecha', '').startswith(fecha_str))
            ultimos_7_dias.append({
                'fecha': fecha_str,
                'total': count
            })
        # Ordenar por fecha ascendente (para que se vea de más antiguo a más reciente)
        ultimos_7_dias.reverse()

        # Últimos 5 movimientos
        ultimos_movimientos = sorted(movimientos, key=lambda x: x.get('fecha', ''), reverse=True)[:5]

        return {
            'total_insumos': len(insumos),
            'bajo_stock': len(bajo_stock),
            'movimientos_hoy': len(movimientos_hoy),
            'total_movimientos': total_movimientos,
            'movimientos_ultimos_7_dias': ultimos_7_dias,
            'insumos_bajo_stock': bajo_stock[:5],
            'ultimos_movimientos': ultimos_movimientos,
        }