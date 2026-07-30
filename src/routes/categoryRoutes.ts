import { Router } from 'express';
import { createCategory, deleteCategory, getCategory, getCategoryById, updateCategory } from '../controllers/categoryController.js';

const router = Router();

router.get('/', getCategory);
router.get('/:id', getCategoryById);
router.post('/', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;