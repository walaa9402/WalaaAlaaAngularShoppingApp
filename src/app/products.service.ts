import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private products=new BehaviorSubject([
    {
      id:1,
      name:'Nivea Cream',
      categ : 'Body care products',
      src:'https://i.ibb.co/cN8szGQ/p1.jpg',
      price : '$49.99',
      count : 0
    },
    {
      id:2,
      name:'Creamy Foundation',
      categ : 'Make up products',
      src:'https://i.ibb.co/gSDyrdb/p2.jpg',
      price : '$129.99',
      count : 0
    },
    {
      id:3,
      name:'Mascara',
      categ : 'Make up products',
      src:'https://i.ibb.co/rycNS7C/p3.jpg',
      price : '$28.99',
      count : 0
    },
    {
      id:4,
      name:'Nivea Lip Care',
      categ : 'Body care products',
      src:'https://i.ibb.co/PWw09DX/p4.jpg',
      price : '$64.99',
      count : 0
    },
    {
      id:5,
      name:'Dove Night Cream',
      categ : 'Body care products',
      src:'https://i.ibb.co/r3xFDsp/p5.jpg',
      price : '$24.99',
      count : 0
    },
    {
      id:6,
      name:'Dove Cream',
      categ : 'Body care products',
      src:'https://i.ibb.co/QkQFS8h/p6.jpg',
      price : '$29.99',
      count : 0
    },
    {
      id:7,
      name:'Dove Soap',
      categ : 'Body care products',
      src:'https://i.ibb.co/N7J93q5/p7.jpg',
      price : '$34.99',
      count : 0
    },
    {
      id:8,
      name:'Face Powder',
      categ : 'Make up products',
      src:'https://i.ibb.co/BjFbfzD/p8.jpg',
      price : '$84.99',
      count : 0
    }
  ])
  currentProducts = this.products.asObservable()
  constructor() { }
  changeProducts(newProducts){
    this.products.next(newProducts)
  }
}