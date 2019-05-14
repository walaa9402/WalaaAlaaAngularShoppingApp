import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  items = []
  filteredItems =[]
  constructor(private products : ProductsService) { }

  ngOnInit() {
    this.products.currentProducts.subscribe(data => {
      this.items = data
      this.filteredItems = this.items.filter(element => {
        if(element.count > 0){
          return element
        }
      })
      })
  }
  add(id){
    for(let prod of this.items){
      if(prod.id == id){
        prod.count++;
      }
    }
    this.products.changeProducts(this.items)
    this.products.currentProducts.subscribe(data => {
      this.items = data
      this.filteredItems = this.items.filter(element => {
        if(element.count > 0){
          return element
        }
      })
      })
  }
  reduce(id){
    for(let prod of this.items){
      if(prod.id == id && prod.count > 0){
        prod.count--;
      }
    }
    this.products.changeProducts(this.items)
    this.products.currentProducts.subscribe(data => {
      this.items = data
      this.filteredItems = this.items.filter(element => {
        if(element.count > 0){
          return element
        }
      })
      })
  }

}