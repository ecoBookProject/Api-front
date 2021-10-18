import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
<<<<<<< HEAD
import { UserDTO } from '../models/UserDTO';
import { UserServiceService } from '../services/user-service.service';
=======
import { CategoryModel } from '../models/CategoryModel';
import { CategoryService } from '../services/category.service';
>>>>>>> 562d84214b0b0776c671d428e1332dbd80ecbb97

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  name = environment.name
<<<<<<< HEAD
  id = environment.idClient
=======
  category: CategoryModel = new CategoryModel()
  listCategory: CategoryModel[]
  idCategory: number
  idUser = environment.idClient
  digital: string = 'digital'
  fisico: string = 'fisico'
>>>>>>> 562d84214b0b0776c671d428e1332dbd80ecbb97

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.findAllCategory();
  }

  findAllCategory() {
    this.categoryService.getAllCategory().subscribe((resp: CategoryModel[]) => {
      this.listCategory = resp;
    });
  }

  findByIdCategory() {
    this.categoryService
      .getByIdCategory(this.idCategory)
      .subscribe((resp: CategoryModel) => {
        this.category = resp;
      });
  }

  logout() {
    this.router.navigate(['/home']);
    environment.idClient = 0;
    environment.name = '';
    environment.type_user = '';
    environment.token = '';
  }

  logged(){
    let ok: boolean = true

    if(environment.token == ''){
      ok = false
    }
    return ok
  }

}
