import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit {

  idProduct = environment.idProduct;
  title = environment.title;
  description = environment.description;
  price = environment.price;
  author = environment.author;
  year = environment.year;
  inventory = environment.inventory;
  language = environment.language;
  isbn = environment.isbn;
  ean = environment.ean;
  country = environment.country;
  publisher = environment.publisher;
  format = environment.format;
  pages = environment.pages;
  foto = environment.foto;



  constructor() { }

  ngOnInit(){
  }

}
