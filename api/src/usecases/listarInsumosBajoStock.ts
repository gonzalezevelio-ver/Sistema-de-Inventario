import { InsumoRepository } from '../domain/repositories/InsumoRepository';

export const listarInsumosBajoStock = async (insumoRepo: InsumoRepository) => {
  return await insumoRepo.findBajoStock();
};