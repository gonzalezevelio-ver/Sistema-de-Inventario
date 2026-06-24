import { InsumoRepository } from '../domain/repositories/InsumoRepository';

export const listarInsumos = async (insumoRepo: InsumoRepository) => {
  return await insumoRepo.findAll();
};