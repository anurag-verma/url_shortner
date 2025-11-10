import express from 'express';
import { register_user, login_user } from '../controller/auth.controller.js';
import { asyncHandler } from '../middleware/errorHandler.js';
const router = express.Router();

router.post('/register', asyncHandler(register_user));
router.post('/login', asyncHandler(login_user));

export default router;