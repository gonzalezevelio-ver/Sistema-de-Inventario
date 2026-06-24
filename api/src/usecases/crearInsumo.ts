import { InsumoRepository } from '../domain/repositories/InsumoRepository';
import { Insumo } from '../domain/entities/Insumo';

export const crearInsumo = async (insumoRepo: InsumoRepository, data: Omit<Insumo, 'id' | 'created_at' | 'updated_at'>) => {
  return await insumoRepo.save(data);
};