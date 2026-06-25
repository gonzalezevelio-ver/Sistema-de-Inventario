import { InsumoRepository } from '../domain/repositories/InsumoRepository';
import { Insumo } from '../domain/entities/Insumo';
import * as fs from 'fs';
const csv = require('csv-parser');

export const importarInsumosCSV = async (
  insumoRepo: InsumoRepository,
  filePath: string
): Promise<{ imported: number; errors: string[] }> => {
  const results: Omit<Insumo, 'id' | 'created_at' | 'updated_at'>[] = [];
  const errors: string[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: any) => {
        const nombre = data.nombre || data.Nombre;
        const unidad_medida = data.unidad_medida || data.Unidad;
        const stock_total = parseInt(data.stock_total || data.Stock);
        const stock_minimo = parseInt(data.stock_minimo || data.Minimo);
        if (!nombre || !unidad_medida || isNaN(stock_total) || isNaN(stock_minimo)) {
          errors.push(`Fila inválida: ${JSON.stringify(data)}`);
          return;
        }
        results.push({ nombre, unidad_medida, stock_total, stock_minimo });
      })
      .on('end', async () => {
        let imported = 0;
        for (const item of results) {
          try {
            await insumoRepo.save(item);
            imported++;
          } catch (err) {
            errors.push(`Error guardando ${item.nombre}: ${err}`);
          }
        }
        resolve({ imported, errors });
      })
      .on('error', reject);
  });
};