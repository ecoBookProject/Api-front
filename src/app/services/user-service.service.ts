import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserDTO } from '../models/UserDTO';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  token = {headers: new HttpHeaders().set('Authorization', environment.token)}

  cadastrar(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>('https://projetoecobook.herokuapp.com/users/register', user)
  }

  //Para o login ->  
  entrar(userDto: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>('https://projetoecobook.herokuapp.com/users/auth', userDto)
  }

  getByIdUser(id: number):Observable<UserModel>{
    return this.http.get<UserModel>(`https://projetoecobook.herokuapp.com/users/${id}`, this.token)
  }

  atualizar(user: UserModel): Observable<UserModel>{
    return this.http.put<UserModel>('https://projetoecobook.herokuapp.com/users/', user)
  }

  logged() {
    let ok: boolean = false;
    if (this.router.url.includes('/home') || this.router.url.includes('/search-category') 
      || this.router.url.includes('/my-profile') || this.router.url.includes('/format-book')
      || this.router.url.includes('/vitrine')
      || this.router.url.includes('/contato')
      || this.router.url.includes('/payment')
      || this.router.url.includes('/about-us')
    ){
      ok = true;      
    }
    return ok;
  }

  type_users(){
    let ok: boolean = true

    if(environment.type_user == 'Adim'){
      ok = false
    }
    return ok
  }

}
