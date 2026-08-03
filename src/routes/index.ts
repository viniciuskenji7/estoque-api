import { Router } from 'express';
import userRoutes from './userRoutes.js';
import productRoutes from './productRoutes.js';
import categoryRoutes from './categoryRoutes.js';
import movimentationRoutes from './movimentationRoutes.js';
const routes = Router();

routes.use('/users', userRoutes);
routes.use('/products', productRoutes);
routes.use('/categories', categoryRoutes);
routes.use('/movimentations', movimentationRoutes);

export default routes;