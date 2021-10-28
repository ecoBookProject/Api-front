import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CategoryModel } from '../models/CategoryModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryServiceService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

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
}
