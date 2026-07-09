from django.shortcuts import render, redirect
from django.contrib import messages
from .services.insumo_service import InsumoService
from .services.movimiento_service import MovimientoService
from .services.dashboard_service import DashboardService

insumo_svc = InsumoService()
movimiento_svc = MovimientoService()
dashboard_svc = DashboardService()

def home(request):
    return dashboard(request)

def dashboard(request):
    stats = dashboard_svc.get_stats()
    return render(request, 'dashboard.html', {'stats': stats})

def insumos(request):
    insumos_list = insumo_svc.listar_todos()
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        unidad = request.POST.get('unidad_medida')
        stock = request.POST.get('stock_total')
        minimo = request.POST.get('stock_minimo')
        if nombre and unidad and stock and minimo:
            insumo_svc.crear({
                'nombre': nombre,
                'unidad_medida': unidad,
                'stock_total': int(stock),
                'stock_minimo': int(minimo)
            })
            messages.success(request, 'Insumo creado exitosamente')
            return redirect('insumos')
    return render(request, 'insumos.html', {'insumos': insumos_list})

def importar_insumos(request):
    if request.method == 'POST' and request.FILES.get('csv_file'):
        archivo = request.FILES['csv_file']
        resultado = insumo_svc.importar_csv(archivo)
        if resultado:
            messages.success(request, f"Importados {resultado.get('imported',0)} insumos. Errores: {len(resultado.get('errors',[]))}")
        else:
            messages.error(request, 'Error al importar CSV')
        return redirect('insumos')
    return redirect('insumos')

# NUEVA VISTA: Eliminar insumo
def eliminar_insumo(request, id):
    if request.method == 'POST':
        resultado = insumo_svc.eliminar(id)
        if resultado is not None:  # Si no hubo error (devuelve dict o None)
            messages.success(request, 'Insumo eliminado correctamente')
        else:
            messages.error(request, 'Error al eliminar el insumo (puede que no exista)')
        return redirect('insumos')
    return redirect('insumos')

def movimientos(request):
    bodegas = movimiento_svc.get_bodegas()
    insumos = movimiento_svc.get_insumos()
    if request.method == 'POST':
        tipo = request.POST.get('tipo')
        fecha = request.POST.get('fecha')
        cantidad = request.POST.get('cantidad')
        motivo = request.POST.get('motivo')
        insumo_id = request.POST.get('insumo_id')
        bodega_id = request.POST.get('bodega_id')
        if tipo and fecha and cantidad and insumo_id and bodega_id:
            resultado = movimiento_svc.registrar({
                'tipo': tipo,
                'fecha': fecha,
                'cantidad': int(cantidad),
                'motivo': motivo,
                'insumo_id': int(insumo_id),
                'bodega_id': int(bodega_id)
            })
            if resultado:
                messages.success(request, 'Movimiento registrado')
            else:
                messages.error(request, 'Error (stock insuficiente o datos inválidos)')
            return redirect('movimientos')
    return render(request, 'movimientos_form.html', {'bodegas': bodegas, 'insumos': insumos})

def historial(request):
    insumo_id = request.GET.get('insumo_id')
    desde = request.GET.get('desde')
    hasta = request.GET.get('hasta')
    movimientos = movimiento_svc.listar(insumo_id, desde, hasta)
    insumos = movimiento_svc.get_insumos()
    return render(request, 'historial.html', {'movimientos': movimientos, 'insumos': insumos})

def ayuda(request):
    return render(request, 'ayuda.html')