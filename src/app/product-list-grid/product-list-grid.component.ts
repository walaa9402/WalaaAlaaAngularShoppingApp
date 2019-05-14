import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-grid',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list-grid.component.css']
})
export class ProductListGridComponent implements OnInit {
  items = []
  constructor(private products : ProductsService, public router: Router) { }

  ngOnInit() {
    this.products.currentProducts.subscribe( data => this.items = data)
  }
  add(id){
    for(let item of this.items){
      if(item.id == id){
        item.count++;
      }
    }
    this.products.changeProducts(this.items)
  }
  remove(id){
    for(let item of this.items){
      if(item.id == id){
        item.count=0;
      }
    }
    this.products.changeProducts(this.items)
  }
  viewDetails(prod){
    this.router.navigate(['/view-details',JSON.stringify(prod)])
  }
}