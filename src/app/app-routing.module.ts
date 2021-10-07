import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdimHomeComponent } from './adim-home/adim-home.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'cadastro', component: CadastrarComponent },
  {path: 'login', component: LoginComponent },
  {path: 'adim-home', component: AdimHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
