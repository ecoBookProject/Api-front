import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertsComponent } from '../alerts/alerts.component';
import { UserDTO } from '../models/UserDTO';
import { AlertsService } from '../services/alerts.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDto: UserDTO = new UserDTO();

  constructor(
    private userService: UserServiceService,
    private router: Router,
    private alerts: AlertsService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  login() {
    this.userService.entrar(this.userDto).subscribe((resp: UserDTO) => {
      this.userDto = resp;

      environment.idClient = this.userDto.idClient;
      environment.name = this.userDto.name;
      environment.token = this.userDto.token;
      environment.type_user = this.userDto.type_user

      console.log(environment.token)

      if(this.userDto.type_user == "Adim")
      {
        this.alerts.showAlertSuccess('Administrador logado com sucesso!')
        this.router.navigate(['/adim-home'])
      }else{
        this.alerts.showAlertSuccess('Usuario logado com sucesso!')
        this.router.navigate(['/home'])
      }
    }, error => {
      if (error.status == 401 || error.status == 404) {
        this.alerts.showAlertDanger('Usuário ou senha estão incorretos')
      }
    })
  }

}
