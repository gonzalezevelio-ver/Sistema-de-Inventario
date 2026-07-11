import { InsumoRepository } from '../domain/repositories/InsumoRepository';

export const eliminarInsumo = async (
  insumoRepo: InsumoRepository,
  id: number
): Promise<boolean> => {
  const insumo = await insumoRepo.findById(id);
  if (!insumo) {
    throw new Error('Insumo no encontrado');
  }
  return await insumoRepo.delete(id);
};