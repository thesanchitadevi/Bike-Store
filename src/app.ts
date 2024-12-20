// Code for the app
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRouter } from './app/modules/products/products.routes';
import { OrderRouter } from './app/modules/orders/orders.routes';

const app: Application = express();

//parse application/json
app.use(express.json());
app.use(cors());

// application routes
// Product routes
app.use('/api/products', ProductRouter);
// Order routes
app.use('/api/orders', OrderRouter);

// Default route
const getController = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the Bike Store API',
  });
};

app.get('/', getController);

export default app;
