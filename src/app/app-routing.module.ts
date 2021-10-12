import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdimHomeComponent } from './adim-home/adim-home.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoryComponent } from './category/category.component';
import { BookDeleteComponent } from './delete/book-delete/book-delete.component';
import { BookEditComponent } from './edit/book-edit/book-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'cadastro', component: CadastrarComponent },
  {path: 'login', component: LoginComponent },
  {path: 'adim-home', component: AdimHomeComponent},
  {path: 'book-delete/:id', component: BookDeleteComponent},
  {path: 'book-edit/:id', component: BookEditComponent},
  {path: 'category', component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
