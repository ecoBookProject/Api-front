import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CategoryModel } from '../models/CategoryModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
<<<<<<< HEAD
  constructor(private http: HttpClient) {}
=======

  endereco = environment.server + environment.port;

  constructor( private http: HttpClient) { }
>>>>>>> c1e4bad782c009335664ca324de77c01bc923635

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

<<<<<<< HEAD
  getAllCategory(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(
      'https://pi-g4.herokuapp.com/category',
      this.token
    );
  }

  getByIdCategory(id: number): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(
      `https://pi-g4.herokuapp.com/category/${id}`,
      this.token
    );
  }

  postCategory(category: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(
      'https://pi-g4.herokuapp.com/category',
      category,
      this.token
    );
  }

  putCategory(category: CategoryModel): Observable<CategoryModel> {
    return this.http.put<CategoryModel>(
      'https://pi-g4.herokuapp.com/category',
      category,
      this.token
    );
  }

  deleteCategory(id: number) {
    return this.http.delete(
      `https://pi-g4.herokuapp.com/category/${id}`,
      this.token
    );
=======
  getAllCategory(): Observable<CategoryModel[]>{
    return this.http.get<CategoryModel[]>(`${this.endereco}/category`, this.token)
  }
  
  getByIdCategory(id: number): Observable<CategoryModel>{
    return this.http.get<CategoryModel>(`${this.endereco}/category/${id}`, this.token)
  }

  postCategory(category: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(`${this.endereco}/category`, category, this.token)
  }

  putCategory(category: CategoryModel): Observable<CategoryModel> {
    return this.http.put<CategoryModel>(`${this.endereco}/category`, category, this.token)
  }

  deleteCategory(id: number) {
    return this.http.delete(`${this.endereco}/category/${id}`, this.token)
>>>>>>> c1e4bad782c009335664ca324de77c01bc923635
  }
}
