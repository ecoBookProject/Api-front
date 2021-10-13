import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { BookModel } from '../models/BookModel';
import { BookServiceService } from '../services/book-service.service';


@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit {

  book: BookModel = new BookModel


  constructor(
    private bookService: BookServiceService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(){
    window.scroll(0,0)

    let id = this.route.snapshot.params['id']
    this.findByIdBook(id)

  }

  buscarCEP(){
    
  }



  findByIdBook(id: number){
    this.bookService.getByIdBook(id).subscribe((resp: BookModel) =>{
      this.book = resp
    } )
  }

}
