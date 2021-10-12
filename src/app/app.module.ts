import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { AdimHomeComponent } from './adim-home/adim-home.component';
import { AdimNavbarComponent } from './adim-navbar/adim-navbar.component';
import { BookDeleteComponent } from './delete/book-delete/book-delete.component';
import { BookEditComponent } from './edit/book-edit/book-edit.component';
import { CategoryComponent } from './category/category.component';
import { CategoryEditComponent } from './edit/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './delete/category-delete/category-delete.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VitrineComponent } from './vitrine/vitrine.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatProgressBarModule} from '@angular/material/progress-bar'

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    HomeComponent,
    NavbarComponent,
    RodapeComponent,
    ContatoComponent,
    LoginComponent,
    AdimHomeComponent,
    AdimNavbarComponent,
    BookDeleteComponent,
    BookEditComponent,
    CategoryComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    VitrineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    NgxCurrencyModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
