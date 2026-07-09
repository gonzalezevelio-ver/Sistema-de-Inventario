import { Request, Response } from 'express';
import { BodegaRepositoryMySQL } from '../../infra/repositories/BodegaRepositoryMySQL';
import { listarBodegas } from '../../usecases/listarBodegas';

const bodegaRepo = new BodegaRepositoryMySQL();

export const getBodegas = async (req: Request, res: Response) => {
  try {
    const bodegas = await listarBodegas(bodegaRepo);
    res.json(bodegas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener bodegas' });
  }
};