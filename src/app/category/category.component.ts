import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoryModel } from '../models/CategoryModel';
import { AlertsService } from '../services/alerts.service';
import { CategoryService } from '../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: CategoryModel = new CategoryModel()
  listCategory: CategoryModel[]

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private alerts: AlertsService
  ) { }

  ngOnInit() {
      if(environment.token == '') {
        this.router.navigate(['/login'])
      }
    this.findAllCategories()
  }

  findAllCategories() {
    this.categoryService.getAllCategory().subscribe((resp: CategoryModel[]) => {
      this.listCategory = resp
    })
  }

  cadastrar() {
    this.categoryService.postCategory(this.category).subscribe((resp: CategoryModel) => {
      this.category = resp
      Swal.fire({
        icon: 'success',
        title: 'Categoria cadastrada com sucesso!',
        showConfirmButton: false,
        timer: 1500,
      })
      this.findAllCategories()
      this.category = new CategoryModel()

    })
  }
}
