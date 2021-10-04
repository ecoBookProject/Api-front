import { BookModel } from "./BookModel";

export class UserModel{
    idClient: number;
    name: string;
    email: string;
    cpf: string;
    phone: string;
    password: string;
    cep: string;
    address: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    type_user: string;
    book: BookModel[];
}