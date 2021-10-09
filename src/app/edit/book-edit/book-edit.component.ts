import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from 'src/app/models/BookModel';
import { BookServiceService } from 'src/app/services/book-service.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
book:BookModel= new BookModel()
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private bookService: BookServiceService
  ) { }

  ngOnInit() {
    window.scroll(0,0) 
    if (environment.token == ''){
      this.router.navigate(["/home"])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdBook(id)
  }

  findByIdBook(id: number){
    this.bookService.getByIdBook(id).subscribe((resp: BookModel) =>{
      this.book = resp
    } )
  }

}
