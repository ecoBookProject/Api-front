import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from '../models/BookModel';
import { UserModel } from '../models/UserModel';
import { AlertsService } from '../services/alerts.service';
import { BookServiceService } from '../services/book-service.service';
import { CepServiceService } from '../services/cep-service.service';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  user: UserModel = new UserModel
  book: BookModel = new BookModel
  bookcard: BookModel[]

  nome: string = '';
  sobrenome: string = '';
  cep: string = '';
  endereco: string = '';
  numCasa: string = '';
  bairro: string = '';
  cidade: string = '';
  uf: string = '';
  nomeCartao: string = '';
  numCartao: string = '';
  valCartao: string = '';
  cvv: string = '';

  constructor(
    private bookservice: BookServiceService,
    private cepsService: CepServiceService,
    private route: ActivatedRoute,
    private alerts: AlertsService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    let id = this.route.snapshot.params['id']
    
  }

  confirCompra(){
    
    this.alerts.showAlertSuccess('Compra realizada com sucesso!')
    
  }
  
  buscarCep() {
    this.cepsService.buscar(this.user.cep)
      .then((cep: UserModel) => this.user = cep)
      .catch(() => {
        let cep = this.user.cep
        this.user.cep = cep;
        
      })
  }

}
