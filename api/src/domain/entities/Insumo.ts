export interface Insumo {
  id?: number;
  nombre: string;
  unidad_medida: string;
  stock_total: number;
  stock_minimo: number;
  created_at?: Date;
  updated_at?: Date;
}