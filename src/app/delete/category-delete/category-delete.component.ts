import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/CategoryModel';
import { CategoryService } from 'src/app/services/category.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  category: CategoryModel = new CategoryModel()
  idCategory: number

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/login'])
    }
    let idCategory = this.route.snapshot.params['idCategory']
    this.findByIdCategory(idCategory)
  }
  
  findByIdCategory(idCategory: number) {
    this.categoryService.getByIdCategory(idCategory).subscribe((resp: CategoryModel) => {
      this.category = resp
    })
  }

  delete() {
    this.categoryService.deleteCategory(this.idCategory).subscribe(() => {
      alert('Categoria apagada com sucesso!')
      this.router.navigate(['/category'])
    })
  }

}
