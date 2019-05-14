import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items=[]
  num=0
  constructor(private product : ProductsService) { }

  ngOnInit() {
     this.product.currentProducts.subscribe(data =>{ 
      this.items=data 
      this.num=0
      for(let item of this.items){
        //console.log(item)
        this.num += item.count
      }
      })
  }

}