import { InsumoRepository } from '../domain/repositories/InsumoRepository';
import { Insumo } from '../domain/entities/Insumo';   // ← esta línea faltaba

export const actualizarInsumo = async (insumoRepo: InsumoRepository, id: number, data: Partial<Insumo>) => {
  return await insumoRepo.update(id, data);
};