import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-adim-navbar',
  templateUrl: './adim-navbar.component.html',
  styleUrls: ['./adim-navbar.component.css']
})
export class AdimNavbarComponent implements OnInit {

  nome = environment.name
  id = environment.idClient

  constructor(
    private router: Router
  ) { }

  ngOnInit(){}

  sair(){
    this.router.navigate(['/home'])
    environment.token = ''
    environment.name = ''
    environment.type_user = ''
    environment.idClient = 0
  }
}
