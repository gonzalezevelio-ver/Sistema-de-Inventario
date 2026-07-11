import { Insumo } from '../entities/Insumo';

export interface InsumoRepository {
  findAll(): Promise<Insumo[]>;
  findBajoStock(): Promise<Insumo[]>;
  findById(id: number): Promise<Insumo | null>;
  save(insumo: Insumo): Promise<Insumo>;
  update(id: number, insumo: Partial<Insumo>): Promise<Insumo | null>;
  updateStock(id: number, cantidadDelta: number): Promise<void>;
  delete(id: number): Promise<boolean>;
}
