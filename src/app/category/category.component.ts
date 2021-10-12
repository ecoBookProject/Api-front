import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../models/CategoryModel';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: CategoryModel = new CategoryModel()
  listCategory: CategoryModel[]

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {

    this.findAllCategories()
  }

  findAllCategories () {
    this.categoryService.getAllCategory().subscribe((resp: CategoryModel[]) => {
      this.listCategory = resp
    })
  }

  cadastrar () {
    this.categoryService.postCategory(this.category).subscribe((resp: CategoryModel) => {
      this.category = resp
      alert('Categoria cadastrada com sucesso!')
      this.findAllCategories()
      this.category = new CategoryModel()

    })
  }
}
