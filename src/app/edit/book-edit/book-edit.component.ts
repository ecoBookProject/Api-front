import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from 'src/app/models/BookModel';
import { CategoryModel } from 'src/app/models/CategoryModel';
import { UserModel } from 'src/app/models/UserModel';
import { AlertsService } from 'src/app/services/alerts.service';
import { BookServiceService } from 'src/app/services/book-service.service';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book:BookModel= new BookModel()
  user: UserModel = new UserModel()
  idUser = environment.idClient
  category: CategoryModel = new CategoryModel()
  idCategory: number
  listCategory: CategoryModel[]
  FormGroup: FormGroup;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
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

  ngOnInit() {
    window.scroll(0,0) 
    if (environment.token == ''){
      this.router.navigate(["/home"])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdBook(id)
    this.findAllCategory()
  }

  findByIdBook(id: number){
    this.bookService.getByIdBook(id).subscribe((resp: BookModel) =>{
      this.book = resp
    } )
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

  findByIdUser(){
    this.userService.getByIdUser(this.idUser).subscribe((resp: UserModel)=>{
      this.user = resp
    })
  }
  putBook(){
    this.category.idCategory=this.idCategory
    this.book.category=this.category
    this.bookService.putBook(this.book).subscribe((resp:BookModel)=>{
      this.book = resp
      Swal.fire({
        icon: 'success',
        title: 'Livro atualizado com sucesso!',
        showConfirmButton: false,
        timer: 1500,
      })
      this.book = new BookModel()
      this.router.navigate(['/adim-home'])
    })
  }
}
