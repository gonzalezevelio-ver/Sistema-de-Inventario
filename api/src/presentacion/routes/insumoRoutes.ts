import { Router } from 'express';
import { getInsumos, getInsumosBajoStock, postInsumo, putInsumo, postImportarCSV } from '../controllers/insumoController';

const router = Router();

router.get('/', getInsumos);
router.get('/bajos-stock', getInsumosBajoStock);
router.post('/', postInsumo);
router.put('/:id', putInsumo);
router.post('/import', postImportarCSV);

export default router;