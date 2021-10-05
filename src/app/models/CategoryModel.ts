import { BookModel } from "./BookModel";

export class CategoryModel{
    idCategory: number;
    genre: string;
    book: BookModel[];
}