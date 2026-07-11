import express from 'express';
import dotenv from 'dotenv';
import insumoRoutes from './presentation/routes/insumoRoutes';
import bodegaRoutes from './presentation/routes/bodegaRoutes';
import movimientoRoutes from './presentation/routes/movimientoRoutes';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/insumos', insumoRoutes);
app.use('/api/bodegas', bodegaRoutes);
app.use('/api/movimientos', movimientoRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API de Inventario corriendo en puerto ${PORT}`);
});