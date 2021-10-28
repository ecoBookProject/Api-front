import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from '../models/BookModel';
import { UserModel } from '../models/UserModel';
import { AlertsService } from '../services/alerts.service';
import { BookServiceService } from '../services/book-service.service';
import { CepServiceService } from '../services/cep-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  user: UserModel = new UserModel();
  book: BookModel = new BookModel();
  bookcard: BookModel[];

  pValue: number;
  totalValue: number;
  empty: string;
  quant: number;
  cart = {
    value: 0,
  };

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
    private router: Router,
    private route: ActivatedRoute,
    private alerts: AlertsService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    let id = this.route.snapshot.params['id'];
  }

  confirCompra(){
    Swal.fire({
      icon: 'success',
      title: 'Compra realizada com sucesso!',
      text: 'Você recebera um email para finalizar sua compra',
    })
    this.router.navigate(['/home'])
  }

  buscarCep() {
    this.cepsService
      .buscar(this.user.cep)
      .then((cep: UserModel) => (this.user = cep))
      .catch(() => {
        let cep = this.user.cep;
        this.user.cep = cep;
      });
  }

  toShowTotalValue() {
    this.totalValue = 0;
    let dataCart = [];
    dataCart = JSON.parse(localStorage.getItem('shoppingCart') || '{}');

    dataCart.forEach((i: any) => {
      this.cart = {
        value: i.partialValue,
      };

      this.totalValue += this.cart.value;
    });
    return this.totalValue;
  }

  priceSum() {
    console.log('PREÇO: ' + JSON.stringify(this.totalValue));

    this.bookcard.forEach((item) => {
      this.totalValue += item.price;
    });
    console.log('PREÇO2: ' + JSON.stringify(this.totalValue));
  }
}
