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

  ngOnInit(): void {
  }

  cadastrar () {
    this.categoryService.postCategory(this.category).subscribe((resp: CategoryModel) => {
      this.category = resp
      alert('Categoria cadastrada com sucesso!')
      this.category = new CategoryModel()

    })
  }
}
