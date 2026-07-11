from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('insumos/', views.insumos, name='insumos'),
    path('insumos/importar/', views.importar_insumos, name='importar_insumos'),
    path('insumos/eliminar/<int:id>/', views.eliminar_insumo, name='eliminar_insumo'),  # NUEVO
    path('movimientos/', views.movimientos, name='movimientos'),
    path('historial/', views.historial, name='historial'),
    path('ayuda/', views.ayuda, name='ayuda'),
]