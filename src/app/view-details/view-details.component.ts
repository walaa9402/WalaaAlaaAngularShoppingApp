import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  item
  items=[]
  n 
  constructor(private products : ProductsService, private rout : ActivatedRoute) { }

  ngOnInit() {
    this.rout.paramMap.subscribe( params => this.item = JSON.parse(params.get('item')))
    this.products.currentProducts.subscribe( data => this.items = data)
    this.n = this.item.count
  }


  add(id){
    for(let prod of this.items){
      if(prod.id == id){
        prod.count++;
        this.n = prod.count
      }
    }
    this.products.changeProducts(this.items)
  }
  reduce(id){
    for(let prod of this.items){
      if(prod.id == id){
        prod.count--;
        this.n = prod.count
      }
    }
    this.products.changeProducts(this.items)
  }
}