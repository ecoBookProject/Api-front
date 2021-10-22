import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/CategoryModel';
import { AlertsService } from 'src/app/services/alerts.service';
import { CategoryService } from 'src/app/services/category.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

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
    private route: ActivatedRoute,
    private alerts: AlertsService
  ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/login'])
    }
    this.idCategory = this.route.snapshot.params['id']
    this.findByIdCategory(this.idCategory)
  }
  
  findByIdCategory(id: number) {
    this.categoryService.getByIdCategory(id).subscribe((resp: CategoryModel) => {
      this.category = resp
    })
  }

  delete() {
    this.categoryService.deleteCategory(this.idCategory).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Livro apagado com sucesso!',
        showConfirmButton: false,
        timer: 1500,
      })
      this.alerts.showAlertSuccess('Categoria apagada com sucesso!')
      this.router.navigate(['/category'])
    })
  }

}
