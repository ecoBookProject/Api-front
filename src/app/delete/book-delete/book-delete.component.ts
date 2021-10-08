import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from 'src/app/models/BookModel';
import { BookServiceService } from 'src/app/services/book-service.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  book: BookModel = new BookModel()
  idProduct: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookServiceService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    
    if(environment.token == ''){
      this.router.navigate(['/home'])
    }

    this.idProduct = this.route.snapshot.params['id']
    this.findByIdBook(this.idProduct)
  }

  findByIdBook(id: number){
    this.bookService.getByIdBook(id).subscribe((resp: BookModel)=>{
      this.book = resp
    })
  }

  apagar(){
    this.bookService.deleteBook(this.idProduct).subscribe(()=>{
      alert("Livro apagado com sucesso!")
      this.router.navigate(['/adim-home'])
    })
  }
}
