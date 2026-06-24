import { Movimiento } from '../entities/Movimiento';

export interface MovimientoRepository {
  save(movimiento: Movimiento): Promise<Movimiento>;
  findAll(filtros?: { insumo_id?: number; desde?: Date; hasta?: Date }): Promise<Movimiento[]>;
  getAgrupadosPorTipoUltimoMes(): Promise<{ tipo: string; total: number }[]>;
}