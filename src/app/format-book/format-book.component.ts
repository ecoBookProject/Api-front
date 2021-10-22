import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from '../models/BookModel';
import { BookServiceService } from '../services/book-service.service';

@Component({
  selector: 'app-format-book',
  templateUrl: './format-book.component.html',
  styleUrls: ['./format-book.component.css']
})
export class FormatBookComponent implements OnInit {

  book: BookModel = new BookModel()
  listBook: BookModel[]
  previous: boolean = false
  tituloBook: string
  formato: string

  constructor(
    private router: Router,
    private bookService: BookServiceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(){
    window.scroll(0, 0)
    this.findAllBook()
    let format = this.route.snapshot.params['format']
    this.formato = format
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
}
