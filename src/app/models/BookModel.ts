import { CategoryModel } from "./CategoryModel";
import { UserModel } from "./UserModel";

export class BookModel{
    idProduct: number;
    title: string;
    description: string;
    price: number;
    author: string;
    year: number;
    inventory: number;
    language: string;
    isbn: number;
    ean: number;
    country: string;
    publisher: string;
    format: string;
    pages: number;
    foto: string;
    category: CategoryModel;
    users: UserModel;
}