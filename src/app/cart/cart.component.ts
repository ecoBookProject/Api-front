import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { BookModel } from '../models/BookModel';
import { BookServiceService } from '../services/book-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  product: BookModel = new BookModel();
  shoppingCart: BookModel[];
  partialValue: number;
  totalValue: number;
  empty: string;
  quantity: number;
  cart = {
    value: 0,
  };

  constructor(
    private userService: UserServiceService,
    private bookService: BookServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    if (environment.token == '') {
      this.router.navigate(['/login']);
    }

    this.toShowCart();
    this.toShowTotalValue();

    console.log('PREÇO: ' + JSON.stringify(this.shoppingCart));
  }

  toShowCart() {
    const storage = localStorage['shoppingCart'];
    if (storage.length > 0) {
      this.shoppingCart = storage ? JSON.parse(storage) : [];
    } else {
      this.empty = 'O Carrinho está vazio';
      this.totalValue = 0;
    }
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

    this.shoppingCart.forEach((item) => {
      this.totalValue += item.price;
    });
    console.log('PREÇO2: ' + JSON.stringify(this.totalValue));
  }
}
