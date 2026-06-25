import { MovimientoRepository } from '../domain/repositories/MovimientoRepository';

export const listarMovimientosPorInsumo = async (movimientoRepo: MovimientoRepository, insumo_id: number) => {
  return await movimientoRepo.findAll({ insumo_id });
};