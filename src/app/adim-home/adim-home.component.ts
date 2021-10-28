import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { BookModel } from '../models/BookModel';
import { CategoryModel } from '../models/CategoryModel';
import { UserModel } from '../models/UserModel';
import { AlertsService } from '../services/alerts.service';
import { BookServiceService } from '../services/book-service.service';
import { CategoryServiceService } from '../services/category-service.service';
import { UserServiceService } from '../services/user-service.service';
import Swal from 'sweetalert2';

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
  FormGroup: FormGroup;

  constructor(
    private router: Router,
    private bookService: BookServiceService,
    private userService: UserServiceService,
    private categoryService: CategoryServiceService,
    private formBuilder: FormBuilder,
    private alerts: AlertsService
  ) {

    this.FormGroup = this.formBuilder.group({
      titulo: ['', Validators.required],
      photo: ['', Validators.required],
      preco: ['', Validators.required],
      descricao: ['', Validators.required],
      autor: ['', Validators.required],
      ano: ['', Validators.required],
      estoque: ['', Validators.required],
      linguagem: ['', Validators.required],
      isbn: ['', Validators.required],
      ean: ['', Validators.required],
      pais: ['', Validators.required],
      editora: ['', Validators.required],
      formato: ['', Validators.required],
      paginas: ['', Validators.required],
      tema: ['', Validators.required]
    });
  }

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
      Swal.fire({
        icon: 'success',
        title: 'Livro publicado com sucesso!',
        showConfirmButton: false,
        timer: 1500,
      })
      this.book = new BookModel()
      this.findAllBook()
    })
  }
}
