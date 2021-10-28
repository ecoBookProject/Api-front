import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { BookModel } from '../models/BookModel';
import { AlertsService } from '../services/alerts.service';
import { BookServiceService } from '../services/book-service.service';
import { CepServiceService } from '../services/cep-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css'],
})
export class VitrineComponent implements OnInit {
  book: BookModel = new BookModel();
  bookcard: BookModel[];
  previous: boolean = false;
  tituloPost: string;
  radioSelected: any;
  enum_details = [{ name: 'digital' }, { name: 'fisico' }];

  shoppingCart: BookModel[];
  quant: number;
  pValue: number;

  constructor(
    private bookService: BookServiceService,
    private route: ActivatedRoute,
    private cepsService: CepServiceService,
    private userService: UserServiceService,
    private alerts: AlertsService,
    private router: Router
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    let id = this.route.snapshot.params['id'];

    this.findByIdBook(id);

    this.quant = 1;
  }

  buscarCEP() {
    this.cepsService.buscar;
    console.log(this.cepsService);
  }

  findByIdBook(id: number) {
    this.bookService.getByIdBook(id).subscribe((resp: BookModel) => {
      this.book = resp;
    });
  }

  quantityChange(value: number) {
    this.quant += value;
    if (this.quant < 1) {
      this.quant = 1;
    } else if ( this.quant >= 10) {
      this.quant = 10;
    }
  }

  partial() {
    this.pValue = this.book.price * this.quant;
    return this.pValue;
  }

  addToShoppingCart() {
    this.partial();
    this.book.quantity = this.quant;
    this.book.partialValue = this.pValue;

    this.bookcard = JSON.parse(localStorage.getItem('bookcard') || '[]')

    this.bookcard.push({
      idProduct: this.book.idProduct,
      title: this.book.title,
      author: this.book.author,
      price: this.book.price,
      photo: this.book.photo,
      quantity: this.book.quantity,
      partialValue: this.book.partialValue        
    })
    localStorage.setItem('shoppingCart', JSON.stringify(this.bookcard))
    this.router.navigate(['/carrinho'])
  }
}
