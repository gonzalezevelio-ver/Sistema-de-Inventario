import { RowDataPacket, ResultSetHeader } from 'mysql2';
import pool from '../database/connection';
import { MovimientoRepository } from '../../domain/repositories/MovimientoRepository';
import { Movimiento } from '../../domain/entities/Movimiento';

export class MovimientoRepositoryMySQL implements MovimientoRepository {
  async save(movimiento: Movimiento): Promise<Movimiento> {
    const { tipo, fecha, cantidad, motivo, insumo_id, bodega_id } = movimiento;
    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO movimientos (tipo, fecha, cantidad, motivo, insumo_id, bodega_id) VALUES (?, ?, ?, ?, ?, ?)',
      [tipo, fecha, cantidad, motivo, insumo_id, bodega_id]
    );
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM movimientos WHERE id = ?', [result.insertId]);
    return rows[0] as Movimiento;
  }

  async findAll(filtros?: { insumo_id?: number; desde?: Date; hasta?: Date }): Promise<Movimiento[]> {
    let query = 'SELECT m.*, i.nombre as insumo_nombre, b.nombre as bodega_nombre FROM movimientos m JOIN insumos i ON m.insumo_id = i.id JOIN bodegas b ON m.bodega_id = b.id WHERE 1=1';
    const values: any[] = [];
    if (filtros?.insumo_id) {
      query += ' AND m.insumo_id = ?';
      values.push(filtros.insumo_id);
    }
    if (filtros?.desde) {
      query += ' AND m.fecha >= ?';
      values.push(filtros.desde);
    }
    if (filtros?.hasta) {
      query += ' AND m.fecha <= ?';
      values.push(filtros.hasta);
    }
    query += ' ORDER BY m.fecha DESC';
    const [rows] = await pool.query<RowDataPacket[]>(query, values);
    return rows as Movimiento[];
  }

  async getAgrupadosPorTipoUltimoMes(): Promise<{ tipo: string; total: number }[]> {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT tipo, SUM(cantidad) as total 
       FROM movimientos 
       WHERE fecha >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)
       GROUP BY tipo`
    );
    return rows as { tipo: string; total: number }[];
  }
}