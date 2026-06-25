import { MovimientoRepository } from '../domain/repositories/MovimientoRepository';

export const listarMovimientos = async (movimientoRepo: MovimientoRepository, insumo_id?: number, desde?: Date, hasta?: Date) => {
  return await movimientoRepo.findAll({ insumo_id, desde, hasta });
};