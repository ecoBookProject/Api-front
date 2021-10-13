import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdimHomeComponent } from './adim-home/adim-home.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoryComponent } from './category/category.component';
import { BookDeleteComponent } from './delete/book-delete/book-delete.component';
import { CategoryDeleteComponent } from './delete/category-delete/category-delete.component';
import { BookEditComponent } from './edit/book-edit/book-edit.component';
import { CategoryEditComponent } from './edit/category-edit/category-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VitrineComponent } from './vitrine/vitrine.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'cadastro', component: CadastrarComponent },
  {path: 'login', component: LoginComponent },
  {path: 'adim-home', component: AdimHomeComponent},
  {path: 'book-delete/:id', component: BookDeleteComponent},
  {path: 'book-edit/:id', component: BookEditComponent},
<<<<<<< HEAD
  {path: 'vitrine/:id', component: VitrineComponent }
=======
  {path: 'category', component: CategoryComponent},
  {path: 'category-edit/:id', component: CategoryEditComponent},
  {path: 'category-delete/:id', component: CategoryDeleteComponent},
  {path: 'vitrine', component: VitrineComponent }
>>>>>>> a70baaf4caa9a3ec0b433150f7e9cd452dbf3fcf
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
