import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { BookModel } from '../models/BookModel';
import { CategoryModel } from '../models/CategoryModel';
import { UserModel } from '../models/UserModel';
import { BookServiceService } from '../services/book-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-adim-home',
  templateUrl: './adim-home.component.html',
  styleUrls: ['./adim-home.component.css']
})
export class AdimHomeComponent implements OnInit {

  book: BookModel = new BookModel()
  listBook: BookModel[]
  user: UserModel = new UserModel()
  idUser = environment.idClient
  categoty: CategoryModel = new CategoryModel()
  idCategory: number
  listCategory: CategoryModel[]

  constructor(
    private router: Router,
    private bookService: BookServiceService,
    private userService: UserServiceService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/home'])
    }

    this.findAllBook()
  }

  findAllBook(){
    this.bookService.getAllBooks().subscribe((resp: BookModel[])=>{
      this.listBook = resp
    })
  }

  findByIdUser(){
    this.userService.getByIdUser(this.idUser).subscribe((resp: UserModel)=>{
      this.user = resp
    })
  }

  post(){

  }
}
