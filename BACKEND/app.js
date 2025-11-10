import express from 'express';
import dotenv from 'dotenv';
dotenv.config('./.env');
import dbConnect from './src/config/mongo.config.js';
import shortUrlRoute from './src/routes/shortUrl.route.js';
import authRoutes from './src/routes/auth.routes.js';
import { redirectFromShortUrl } from './src/controller/shortUrl.controller.js';
import errorHandler from './src/middleware/errorHandler.js';
import cors from 'cors';
import { attachUser } from './src/utils/attachUser.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors());
app.use(cookieParser());
// Middleware to parse form data (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON body (application/json)
app.use(express.json());

const port = 3000;
app.use(attachUser);

app.use('/api/auth',authRoutes);
app.use("/api/create",shortUrlRoute);
app.get("/:shortId", redirectFromShortUrl);

app.listen(port,()=>{
    dbConnect();
    console.log(`Server is Running on ${port}`);
});

// Register centralized error handler (should be after routes)
app.use(errorHandler);