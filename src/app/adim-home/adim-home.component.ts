import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { BookModel } from '../models/BookModel';
import { CategoryModel } from '../models/CategoryModel';
import { UserModel } from '../models/UserModel';
import { BookServiceService } from '../services/book-service.service';
import { CategoryServiceService } from '../services/category-service.service';
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
  category: CategoryModel = new CategoryModel()
  idCategory: number
  listCategory: CategoryModel[]

  constructor(
    private router: Router,
    private bookService: BookServiceService,
    private userService: UserServiceService,
    private categoryService: CategoryServiceService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/home'])
    }

    this.findAllBook()
    this.findAllCategory()
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

  findAllCategory(){
    this.categoryService.getAllCategory().subscribe((resp: CategoryModel[])=>{
      this.listCategory = resp
    })
  }

  findByIdCategory(){
    this.categoryService.getByIdCategory(this.idCategory).subscribe((resp: CategoryModel) => {
      this.category = resp
    })
  }

  post(){
    this.category.idCategory = this.idCategory
    this.book.category = this.category

    this.user.idClient = this.idUser
    this.book.users = this.user

    this.bookService.postBook(this.book).subscribe((resp: BookModel) => {
      this.book = resp
      alert('Livro publicado com sucesso!')
      this.book = new BookModel()
      this.findAllBook()
    })
  }
}
