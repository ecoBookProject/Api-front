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
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SearchCategoryComponent } from './search-category/search-category.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { ContatoComponent } from './contato/contato.component';
import { FormatBookComponent } from './format-book/format-book.component';
import { FormatBookFisicoComponent } from './format-book-fisico/format-book-fisico.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'cadastro', component: CadastrarComponent },
  {path: 'login', component: LoginComponent },
  {path: 'adim-home', component: AdimHomeComponent},
  {path: 'book-delete/:id', component: BookDeleteComponent},
  {path: 'book-edit/:id', component: BookEditComponent},
  {path: 'vitrine/:id', component: VitrineComponent },
  {path: 'category', component: CategoryComponent},
  {path: 'category-edit/:id', component: CategoryEditComponent},
  {path: 'category-delete/:id', component: CategoryDeleteComponent},
  {path: 'search-category/:id', component: SearchCategoryComponent},
  {path: 'vitrine', component: VitrineComponent },
  {path: 'my-profile/:id', component: MyProfileComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'format-book-digital', component: FormatBookComponent},
  {path: 'format-book-fisico', component: FormatBookFisicoComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'payment/:id', component: PaymentComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
