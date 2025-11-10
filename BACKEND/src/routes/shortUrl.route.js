import express from 'express';
import { createShortUrl } from '../controller/shortUrl.controller.js';
import { asyncHandler } from '../middleware/errorHandler.js';

const router = express.Router();

router.post("/", asyncHandler(createShortUrl));
// router.post("/", asyncHandler(createAuthShortUrl));

export default router;