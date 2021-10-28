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

  endereco = environment.server + environment.port;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  token = {headers: new HttpHeaders().set('Authorization', environment.token)}

  cadastrar(user: UserModel): Observable<UserModel> {
<<<<<<< HEAD
    return this.http.post<UserModel>('https://pi-g4.herokuapp.com/users/register', user)
=======
    return this.http.post<UserModel>(`${this.endereco}/users/register`, user)
>>>>>>> c1e4bad782c009335664ca324de77c01bc923635
  }

  //Para o login ->  
  entrar(userDto: UserDTO): Observable<UserDTO> {
<<<<<<< HEAD
    return this.http.post<UserDTO>('https://pi-g4.herokuapp.com/users/auth', userDto)
  }

  getByIdUser(id: number):Observable<UserModel>{
    return this.http.get<UserModel>(`https://pi-g4.herokuapp.com/users/${id}`, this.token)
  }

  atualizar(user: UserModel): Observable<UserModel>{
    return this.http.put<UserModel>('https://pi-g4.herokuapp.com/users/', user)
=======
    return this.http.post<UserDTO>(`${this.endereco}/users/auth`, userDto)
  }

  getByIdUser(id: number):Observable<UserModel>{
    return this.http.get<UserModel>(`${this.endereco}/users/${id}`, this.token)
  }

  atualizar(user: UserModel): Observable<UserModel>{
    return this.http.put<UserModel>(`${this.endereco}/users/`, user)
>>>>>>> c1e4bad782c009335664ca324de77c01bc923635
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
