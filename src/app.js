import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import productRouter from './routers/product.router';

const app = express();

// middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.use('/api', productRouter)

export const viteNodeApp = app;
