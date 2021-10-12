import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from 'src/app/models/BookModel';
import { CategoryModel } from 'src/app/models/CategoryModel';
import { UserModel } from 'src/app/models/UserModel';
import { BookServiceService } from 'src/app/services/book-service.service';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { environment } from 'src/environments/environment.prod';

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

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private bookService: BookServiceService,
    private userService: UserServiceService,
    private categoryService: CategoryServiceService
  ) { }

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
      alert("Livro atualizado com sucesso !")
      this.book = new BookModel()
      this.router.navigate(['/adim-home'])
    })
  }
}
