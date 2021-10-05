import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserDTO } from '../models/UserDTO';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  cadastrar(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>('https://projetointegradorgrupo4.herokuapp.com/users/register', user)
  }

  //Para o login ->  
  entrar(userDto: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>('https://projetointegradorgrupo4.herokuapp.com/users/auth', userDto)
  }

  logged() {
    let ok: boolean = false;
    if (environment.token != '') {
      ok = true;
    }
    return ok;
  }

}
