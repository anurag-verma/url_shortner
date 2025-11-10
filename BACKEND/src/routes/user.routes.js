import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { asyncHandler } from '../middleware/errorHandler.js';
import getUserUrls from '../controller/user.controller.js';

const router = express.Router();

router.post("/urls", authMiddleware , asyncHandler(getUserUrls));
// router.post("/", asyncHandler(createAuthShortUrl));

export default router;