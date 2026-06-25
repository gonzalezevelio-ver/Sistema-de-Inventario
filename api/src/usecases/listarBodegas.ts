import { BodegaRepository } from '../domain/repositories/BodegaRepository';

export const listarBodegas = async (bodegaRepo: BodegaRepository) => {
  return await bodegaRepo.findAll();
};