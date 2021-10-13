import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from '../models/BookModel';
import { CategoryModel } from '../models/CategoryModel';
import { UserModel } from '../models/UserModel';
import { BookServiceService } from '../services/book-service.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.css']
})
export class SearchCategoryComponent implements OnInit {

  category: CategoryModel = new CategoryModel()
  listCategory: CategoryModel[]
  previous: boolean = false

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit(){
    window.scroll(0, 0)
    let id = this.route.snapshot.params['id']
    this.findByIdCategory(id)
  }

  vitrine(){
    this.router.navigate(["/vitrine"])
  }

  findByIdCategory(id: number) {
    this.categoryService.getByIdCategory(id).subscribe((resp: CategoryModel) => {
      this.category = resp
      console.log(this.category)
    })
  }

  findAllCategories() {
    this.categoryService.getAllCategory().subscribe((resp: CategoryModel[]) => {
      this.listCategory = resp
    })
  }

}
