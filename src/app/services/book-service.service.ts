import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { BookModel } from '../models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }

  token = {headers: new HttpHeaders().set('Authorization', environment.token)}

  getAllBooks():Observable<BookModel[]>{
    return this.http.get<BookModel[]>('https://projetoecobook.herokuapp.com/book', this.token)
  }

  getByIdBook(id: number):Observable<BookModel>{
    return this.http.get<BookModel>(`https://projetoecobook.herokuapp.com/book/${id}`, this.token)
  }

  getByTituloBook(titulo: string): Observable<BookModel[]>{
    return this.http.get<BookModel[]>(`https://projetoecobook.herokuapp.com/book/title/${titulo}`, this.token)
  }
  
  postBook(book: BookModel): Observable<BookModel>{
    return this.http.post<BookModel>('https://projetoecobook.herokuapp.com/book', book, this.token)
  }

  deleteBook(id: number){
    return this.http.delete(`https://projetoecobook.herokuapp.com/book/${id}`, this.token)
  }
  putBook(book: BookModel):Observable<BookModel>{
    return this.http.put<BookModel>('https://projetoecobook.herokuapp.com/book', book, this.token)
  }
}
