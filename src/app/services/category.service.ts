import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CategoryModel } from '../models/CategoryModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategory(): Observable<CategoryModel[]>{
    return this.http.get<CategoryModel[]>('http://localhost:4200/category, this.token')
  }
  
  getByIdCategory(id: number): Observable<CategoryModel>{
    return this.http.get<CategoryModel>(`http://localhost:4200/category/${id}`, this.token)
  }

  postCategory(category: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>('http://localhost:4200/category', category, this.token)
  }

  putCategory(category: CategoryModel): Observable<CategoryModel> {
    return this.http.put<CategoryModel>('http://localhost:4200/category', category, this.token)
  }

  deleteCategory(id: number) {
    return this.http.delete(`http://localhost:4200/category/${id}`, this.token)
  }
}