import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserModel } from '../models/UserModel';
import { UserServiceService } from '../services/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user: UserModel = new UserModel()
  FormGroup: FormGroup;
  confirmarSenha: string;
  complemento: string;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private userService: UserServiceService,
    private formBuilder: FormBuilder
  ) { 
    this.FormGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      cep: ['', Validators.required],
      senha: ['', Validators.required],
      conSenha: ['', Validators.required],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      numero: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required]
    })
  }

  ngOnInit(){
    window.scroll(0, 0)
    if (environment.token == ''){
      this.router.navigate(["/home"])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdUser(id)
  }

  findByIdUser(id: number){
    this.userService.getByIdUser(id).subscribe((resp: UserModel)=>{
      this.user = resp
    })
  }

  complet(event: any){
    this.complemento = event.target.value
    if(this.complemento == ''){
      this.complemento = ' '
    }
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  atualizar(){
    console.log(this.user.password)
    this.user.complement == this.complemento

    if(this.user.password != this.confirmarSenha){
     alert('A senhas estão incorretas.')
    }else{
      this.userService.atualizar(this.user).subscribe((resp: UserModel)=>{
        this.user = resp
        console.log(this.user)
        Swal.fire({
          icon: 'success',
          title: 'Usuario atualizado com sucesso!',
          showConfirmButton: false,
          timer: 1500,
        })
        this.router.navigate(['/home'])
      })
    }
  }
}
