import { Router } from 'express';
import { postMovimiento, getMovimientos } from '../controllers/movimientoController';

const router = Router();
router.post('/', postMovimiento);
router.get('/', getMovimientos);
export default router;