import { Router } from 'express';
import { createMovimentation, deleteMovimentation, getMovimentation, getMovimentationById } from '../controllers/movimentationController.js';

const router = Router();

router.get('/', getMovimentation);
router.get('/:id', getMovimentationById);
router.post('/', createMovimentation);
router.delete('/:id', deleteMovimentation);

export default router;