import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from '../models/BookModel';
import { BookServiceService } from '../services/book-service.service';
import { CepServiceService } from '../services/cep-service.service';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})

export class VitrineComponent implements OnInit {

  book: BookModel = new BookModel
  bookcard: BookModel[]
  previous: boolean = false
  tituloPost: string
  radioSelected: any;
  enum_details = [
    {name: 'digital'},
    {name: 'fisico'},
  ]

  constructor(
    private bookService: BookServiceService,
    private route: ActivatedRoute,
    private cepsService: CepServiceService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    let id = this.route.snapshot.params['id']
    this.findByIdBook(id)
  }

  buscarCEP(){
    this.cepsService.buscar
     console.log(this.cepsService)    
  }

  findByIdBook(id: number){
    this.bookService.getByIdBook(id).subscribe((resp: BookModel) =>{
      this.book = resp
    } )
  }


}
