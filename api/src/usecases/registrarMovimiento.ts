import { MovimientoRepository } from '../domain/repositories/MovimientoRepository';
import { InsumoRepository } from '../domain/repositories/InsumoRepository';
import { Movimiento, TipoMovimiento } from '../domain/entities/Movimiento';

export const registrarMovimiento = async (
  movimientoRepo: MovimientoRepository,
  insumoRepo: InsumoRepository,
  data: Omit<Movimiento, 'id' | 'created_at'>
) => {
  // Validar stock si es salida
  if (data.tipo === 'salida') {
    const insumo = await insumoRepo.findById(data.insumo_id);
    if (!insumo) throw new Error('Insumo no encontrado');
    if (insumo.stock_total < data.cantidad) throw new Error('Stock insuficiente');
  }
  // Actualizar stock
  const delta = data.tipo === 'entrada' ? data.cantidad : -data.cantidad;
  await insumoRepo.updateStock(data.insumo_id, delta);
  // Registrar movimiento
  return await movimientoRepo.save(data);
};