export type TipoMovimiento = 'entrada' | 'salida';

export interface Movimiento {
  id?: number;
  tipo: TipoMovimiento;
  fecha: Date;
  cantidad: number;
  motivo: string;
  insumo_id: number;
  bodega_id: number;
  created_at?: Date;
}