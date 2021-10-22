import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from 'src/app/models/BookModel';
import { AlertsService } from 'src/app/services/alerts.service';
import { BookServiceService } from 'src/app/services/book-service.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  book: BookModel = new BookModel()
  idProduct: number
  radioSelected: any;
  enum_details = [
    {name: 'digital'},
    {name: 'fisico'},
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookServiceService,
    private alerts: AlertsService
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
      Swal.fire({
        icon: 'success',
        title: 'Livro apagado com sucesso!',
        showConfirmButton: false,
        timer: 1500,
      })
      this.router.navigate(['/adim-home'])
    })
  }
}
