import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  FormGroup: FormGroup;
  FormGroup1: FormGroup;
  FormGroup2: FormGroup;
  FormGroup3: FormGroup;

  constructor(
    private cepsService: CepServiceService,
    private userService: UserServiceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

    this.FormGroup = this.formBuilder.group({
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required]
    });

    this.FormGroup1 = this.formBuilder.group({
      numero: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required]
    });

    this.FormGroup2 = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required]
      //email: ['', [
      //  Validators.required,
      //Validators.email
      //]]
    });

    this.FormGroup3 = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
      conSenha: ['', Validators.required],
    });
  }

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
