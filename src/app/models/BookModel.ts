import { CategoryModel } from './CategoryModel';
import { UserModel } from './UserModel';

export class BookModel {
  idProduct: number;
  title: string;
  description?: string;
  price: number;
  author: string;
  year?: number;
  inventory?: number;
  language?: string;
  isbn?: number;
  ean?: number;
  country?: string;
  publisher?: string;
  format?: string;
  pages?: number;
  photo: string;
  quantity: number;
  partialValue: number;
  category?: CategoryModel;
  users?: UserModel;
}
