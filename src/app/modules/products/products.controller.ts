import { Request, Response } from 'express';
import { getProductServices } from './products.services';

// Create a Controller.
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    console.log('product', product);

    const result = await getProductServices.createProductDB(product);
    console.log('result', result);

    res.status(200).json({
      message: 'Bike created successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error in creating Product',
      error: error,
    });

    // Specific handling for known errors (optional)
    if (error.name === 'ValidationError') {
      res.status(400).json({
        success: false,
        message: 'Validation error',
        error: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: error.message || 'Error in creating Product',
        error: error,
      });
    }
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await getProductServices.getAllProductsDB();
    res.status(200).json({
      success: true,
      message: 'Bikes retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Error in getAllProducts',
      error: error.message,
    });
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const result = await getProductServices.getProductDB(productId);
    res.status(200).json({
      success: true,
      message: 'Bike retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Error in getProduct',
      error: error.message,
    });
  }
};
// const deleteProduct = async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;
//     const result = await getProductServices.deleteProductDB(id);
//     res.status(200).json({
//       success: true,
//       message: 'Product deleted successfully',
//       data: result,
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: 'Error in deleteProduct',
//       error: error.message,
//     });
//   }
// };

export const productController = {
  createProduct,
  getAllProducts,
  getProduct,
};
