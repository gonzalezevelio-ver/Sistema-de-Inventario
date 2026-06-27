import { Router } from 'express';
import { getBodegas } from '../controllers/bodegaController';

const router = Router();
router.get('/', getBodegas);
export default router;