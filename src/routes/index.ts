import { Router } from 'express';
import UserRouter from './Users';
import BooksRouter from './Books';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/books', BooksRouter);

// Export the base-router
export default router;
