import { RowDataPacket } from 'mysql2';
import pool from '../database/connection';
import { BodegaRepository } from '../../domain/repositories/BodegaRepository';
import { Bodega } from '../../domain/entities/Bodega';

export class BodegaRepositoryMySQL implements BodegaRepository {
  async findAll(): Promise<Bodega[]> {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM bodegas');
    return rows as Bodega[];
  }
  async findById(id: number): Promise<Bodega | null> {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM bodegas WHERE id = ?', [id]);
    return rows[0] as Bodega || null;
  }
}