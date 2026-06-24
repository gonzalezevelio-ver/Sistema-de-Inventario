import { Bodega } from '../entities/Bodega';

export interface BodegaRepository {
  findAll(): Promise<Bodega[]>;
  findById(id: number): Promise<Bodega | null>;
}