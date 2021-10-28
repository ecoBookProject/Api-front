import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { BookModel } from '../models/BookModel';
import { AlertsService } from '../services/alerts.service';
import { BookServiceService } from '../services/book-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  book: BookModel = new BookModel()
  listBook: BookModel[]
  previous: boolean = false
  tituloBook: string

  cart: BookModel[];
  quant: number;
  partialValue: number;

  
  constructor(
    private router: Router,
    private bookService: BookServiceService,
    private alerts: AlertsService
  ) { }

  ngOnInit(){
    window.scroll(0, 0)
    this.findAllBook()

    this.quant = 1;
    this.partialValue = this.book.price;
  }

  vitrine(){
    this.router.navigate(["/vitrine"])
  }

  findByTituloBook(){
    if (this.tituloBook == '') {
      this.findAllBook()
    } else {
      this.bookService.getByTituloBook(this.tituloBook).subscribe((resp: BookModel[]) => {
        this.listBook = resp
      })
    }
    console.log(this.tituloBook)
  }

    
  findByAuthor(){
    if (this.tituloBook == '') {
      this.findAllBook()
    } else {
      this.bookService.getByAuthor(this.tituloBook).subscribe((resp: BookModel[]) => {
        this.listBook = resp
      })
    }
    console.log(this.tituloBook)
  }

  findAllBook(){
    this.bookService.getAllBooks().subscribe((resp: BookModel[])=>{
      this.listBook = resp
    })
    this.previous = true
  }

  partial() {
    this.partialValue = this.book.price * this.quant
    return this.partialValue;
  }

  toBuy(id: number) {
    if (environment.token == "") {
      this.alerts.showAlertInfo('Faça o login para continuar')
      this.router.navigate(['/login'])
    } else {
      this.router.navigate(['/vitrine', id])
    }
  }

}
