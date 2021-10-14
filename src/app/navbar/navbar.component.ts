import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoryModel } from '../models/CategoryModel';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name = environment.name
  category: CategoryModel = new CategoryModel()
  listCategory: CategoryModel[]
  idCategory: number
  idUser = environment.idClient

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.findAllCategory()
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

  logout() {
    this.router.navigate(['/home'])
    environment.idClient = 0    
    environment.name = ''
    environment.type_user = ''
    environment.token = ''    
  }

  logged(){
    let ok: boolean = true

    if(environment.token == ''){
      ok = false
    }
    return ok
  }

}
