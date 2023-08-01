import express from 'express';
import { json, urlencoded } from 'body-parser';
import imageRoutes from './routes/imageRoutes';

const app = express();

// Parse request bodies
app.use(json());
app.use(urlencoded({ extended: true }));

// Mount image routes
app.use('/images', imageRoutes);

export default app;
