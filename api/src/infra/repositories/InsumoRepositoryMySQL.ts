import { RowDataPacket, ResultSetHeader } from 'mysql2';
import pool from '../database/connection';
import { InsumoRepository } from '../../domain/repositories/InsumoRepository';
import { Insumo } from '../../domain/entities/Insumo';

export class InsumoRepositoryMySQL implements InsumoRepository {
  async findAll(): Promise<Insumo[]> {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM insumos ORDER BY id');
    return rows as Insumo[];
  }

  async findBajoStock(): Promise<Insumo[]> {
    const [rows] = await pool.query<RowDataPacket[]>(
      'SELECT * FROM insumos WHERE stock_total < stock_minimo'
    );
    return rows as Insumo[];
  }

  async findById(id: number): Promise<Insumo | null> {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM insumos WHERE id = ?', [id]);
    return rows[0] as Insumo || null;
  }

  async save(insumo: Insumo): Promise<Insumo> {
    const { nombre, unidad_medida, stock_total, stock_minimo } = insumo;
    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO insumos (nombre, unidad_medida, stock_total, stock_minimo) VALUES (?, ?, ?, ?)',
      [nombre, unidad_medida, stock_total, stock_minimo]
    );
    const nuevo = await this.findById(result.insertId);
    return nuevo!;
  }

  async update(id: number, insumo: Partial<Insumo>): Promise<Insumo | null> {
    const fields = [];
    const values = [];
    if (insumo.nombre !== undefined) { fields.push('nombre = ?'); values.push(insumo.nombre); }
    if (insumo.unidad_medida !== undefined) { fields.push('unidad_medida = ?'); values.push(insumo.unidad_medida); }
    if (insumo.stock_total !== undefined) { fields.push('stock_total = ?'); values.push(insumo.stock_total); }
    if (insumo.stock_minimo !== undefined) { fields.push('stock_minimo = ?'); values.push(insumo.stock_minimo); }
    if (fields.length === 0) return null;
    values.push(id);
    await pool.query(`UPDATE insumos SET ${fields.join(', ')} WHERE id = ?`, values);
    return this.findById(id);
  }

  async updateStock(id: number, cantidadDelta: number): Promise<void> {
    await pool.query('UPDATE insumos SET stock_total = stock_total + ? WHERE id = ?', [cantidadDelta, id]);
  }
}