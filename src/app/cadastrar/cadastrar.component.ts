import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/UserModel';
import { CepServiceService } from '../services/cep-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: UserModel = new UserModel();
  confirmarSenha: string;
  typeUser: string;

  constructor(
    private cepsService: CepServiceService,
    private userService: UserServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  cadastrar() {
    this.user.type_user = "client"

    if (this.user.password != this.confirmarSenha) {
      alert('A senhas estão incorretas.')
    } else {
      console.log(this.user)
      this.userService.cadastrar(this.user).subscribe((resp: UserModel) => {
      this.user = resp
      alert('Usuario cadastrado com sucesso!')
      this.router.navigate(['/login'])
      })
    }
  }

  buscar() {
   this.cepsService.buscar(this.user.cep)
      .then((cep: UserModel) => this.user = cep)
      .catch(() => {
        let cep = this.user.cep
        this.user.cep = cep;
        alert('Não possivel continuar a busca');
      })
  }

}
