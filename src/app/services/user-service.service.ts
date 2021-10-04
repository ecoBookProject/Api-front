import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  cadastrar(user: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>('https://projetointegradorgrupo4.herokuapp.com/users/register', user)
  }

  //Para o login ->  
  entrar(){}
  //As outras funcionalidades
}
