import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { BookModel } from '../models/BookModel';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  constructor(private http: HttpClient) {}

<<<<<<< HEAD
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  getAllBooks(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(
      'https://pi-g4.herokuapp.com/book',
      this.token
    );
  }

  getByIdBook(id: number): Observable<BookModel> {
    return this.http.get<BookModel>(
      `https://pi-g4.herokuapp.com/book/${id}`,
      this.token
    );
  }

  getByTituloBook(titulo: string): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(
      `https://pi-g4.herokuapp.com/book/title/${titulo}`,
      this.token
    );
  }

  getByAuthor(autor: string): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(
      `https://pi-g4.herokuapp.com/book/author/${autor}`,
      this.token
    );
  }

  getByBookDigital() {
    return this.http.get<BookModel[]>(
      'https://pi-g4.herokuapp.com/book/format-digital',
      this.token
    );
  }

  getByBookPhysicist() {
    return this.http.get<BookModel[]>(
      'https://pi-g4.herokuapp.com/book/format-physicist',
      this.token
    );
  }

  postBook(book: BookModel): Observable<BookModel> {
    return this.http.post<BookModel>(
      'https://pi-g4.herokuapp.com/book',
      book,
      this.token
    );
  }

  deleteBook(id: number) {
    return this.http.delete(
      `https://pi-g4.herokuapp.com/book/${id}`,
      this.token
    );
  }
  putBook(book: BookModel): Observable<BookModel> {
    return this.http.put<BookModel>(
      'https://pi-g4.herokuapp.com/book',
      book,
      this.token
    );
=======
  endereco = environment.server + environment.port;

  constructor(private http: HttpClient) { }

  token = {headers: new HttpHeaders().set('Authorization', environment.token)}

  getAllBooks():Observable<BookModel[]>{
    return this.http.get<BookModel[]>(`${this.endereco}/book`, this.token)
  }

  getByIdBook(id: number):Observable<BookModel>{
    return this.http.get<BookModel>(`${this.endereco}/book/${id}`, this.token)
  }

  getByTituloBook(titulo: string): Observable<BookModel[]>{
    return this.http.get<BookModel[]>(`${this.endereco}/book/title/${titulo}`, this.token)
  }

  getByAuthor(autor: string): Observable<BookModel[]>{
    return this.http.get<BookModel[]>(`${this.endereco}/book/author/${autor}`, this.token)
  }

  getByBookDigital(){
    return this.http.get<BookModel[]>(`${this.endereco}/book/format-digital`, this.token)
  }

  getByBookPhysicist(){
    return this.http.get<BookModel[]>(`${this.endereco}/book/format-physicist`, this.token)
  }

  postBook(book: BookModel): Observable<BookModel>{
    return this.http.post<BookModel>(`${this.endereco}/book`, book, this.token)
  }

  deleteBook(id: number){
    return this.http.delete(`${this.endereco}/book/${id}`, this.token)
  }
  putBook(book: BookModel):Observable<BookModel>{
    return this.http.put<BookModel>(`${this.endereco}/book`, book, this.token)
>>>>>>> c1e4bad782c009335664ca324de77c01bc923635
  }
}
