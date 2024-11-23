import { Model } from 'mongoose';

// Product interface
export interface IProduct {
  name: string;
  brand: string;
  price: number;
  category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric';
  description: string;
  quantity: number;
  inStock: boolean;
  reduceStock(quantity: number): Promise<void>;
}

// Static Methods
export interface ProductStaticMethods extends Model<IProduct> {
  isProductExist: (productId: string) => Promise<IProduct | null>;
}

// Instance Methods
export interface ProductInstanceMethods {
  reduceStock: (orderQuantity: number) => Promise<IProduct | null>;
}
