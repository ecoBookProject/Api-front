import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/CategoryModel';
import { AlertsService } from 'src/app/services/alerts.service';
import { CategoryService } from 'src/app/services/category.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  category: CategoryModel = new CategoryModel()

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private alerts: AlertsService
  ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/login'])
    }

    let idCategory = this.route.snapshot.params['id']
    this.findByIdCategory(idCategory)
  }

  findByIdCategory(idCategory: number) {
    this.categoryService.getByIdCategory(idCategory).subscribe((resp: CategoryModel) => {
      this.category = resp
    })
  }

  update(){
    this.categoryService.putCategory(this.category).subscribe((resp: CategoryModel) =>{
      this.category = resp
      Swal.fire({
        icon: 'success',
        title: 'Categoria atualizada com sucesso!',
        showConfirmButton: false,
        timer: 1500,
      })
      this.router.navigate(['/category'])
    })
  }
}
