import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../models/BookModel';
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

  constructor(
    private router: Router,
    private bookService: BookServiceService,
  ) { }

  ngOnInit(){
    window.scroll(0, 0)
    this.findAllBook()
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

  findAllBook(){
    this.bookService.getAllBooks().subscribe((resp: BookModel[])=>{
      this.listBook = resp
    })
    this.previous = true
  }

}
