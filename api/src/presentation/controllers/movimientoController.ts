import { Request, Response } from 'express';
import { MovimientoRepositoryMySQL } from '../../infra/repositories/MovimientoRepositoryMySQL';
import { InsumoRepositoryMySQL } from '../../infra/repositories/InsumoRepositoryMySQL';
import { registrarMovimiento } from '../../usecases/registrarMovimiento';
import { listarMovimientos } from '../../usecases/listarMovimientos';

const movimientoRepo = new MovimientoRepositoryMySQL();
const insumoRepo = new InsumoRepositoryMySQL();

export const postMovimiento = async (req: Request, res: Response) => {
  try {
    const movimiento = await registrarMovimiento(movimientoRepo, insumoRepo, req.body);
    res.status(201).json(movimiento);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getMovimientos = async (req: Request, res: Response) => {
  try {
    const { insumo_id, desde, hasta } = req.query;
    const movimientos = await listarMovimientos(
      movimientoRepo,
      insumo_id ? parseInt(insumo_id as string) : undefined,
      desde ? new Date(desde as string) : undefined,
      hasta ? new Date(hasta as string) : undefined
    );
    res.json(movimientos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener movimientos' });
  }
};