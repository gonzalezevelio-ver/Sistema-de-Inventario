import { Request, Response } from 'express';
import { InsumoRepositoryMySQL } from '../../infra/repositories/InsumoRepositoryMySQL';
import { listarInsumos } from '../../usecases/listarInsumos';
import { listarInsumosBajoStock } from '../../usecases/listarInsumosBajoStock';
import { crearInsumo } from '../../usecases/crearInsumo';
import { actualizarInsumo } from '../../usecases/actualizarInsumo';
import { importarInsumosCSV } from '../../usecases/importarInsumosCSV';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const insumoRepo = new InsumoRepositoryMySQL();
const upload = multer({ dest: 'uploads/' });

export const getInsumos = async (req: Request, res: Response) => {
  try {
    const insumos = await listarInsumos(insumoRepo);
    res.json(insumos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener insumos' });
  }
};

export const getInsumosBajoStock = async (req: Request, res: Response) => {
  try {
    const insumos = await listarInsumosBajoStock(insumoRepo);
    res.json(insumos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener insumos bajo stock' });
  }
};

export const postInsumo = async (req: Request, res: Response) => {
  try {
    const nuevo = await crearInsumo(insumoRepo, req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear insumo' });
  }
};

export const putInsumo = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const actualizado = await actualizarInsumo(insumoRepo, id, req.body);
    if (!actualizado) return res.status(404).json({ error: 'Insumo no encontrado' });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar insumo' });
  }
};

export const postImportarCSV = async (req: Request, res: Response) => {
  const uploadSingle = upload.single('archivo');
  uploadSingle(req, res, async (err) => {
    if (err) return res.status(400).json({ error: 'Error al subir archivo' });
    if (!req.file) return res.status(400).json({ error: 'No se envió ningún archivo' });
    const filePath = req.file.path;
    try {
      const resultado = await importarInsumosCSV(insumoRepo, filePath);
      fs.unlinkSync(filePath);
      res.json(resultado);
    } catch (error) {
      fs.unlinkSync(filePath);
      res.status(500).json({ error: 'Error al procesar CSV' });
    }
  });
};