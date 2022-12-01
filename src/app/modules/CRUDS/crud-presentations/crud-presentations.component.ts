import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-presentations',
  templateUrl: './crud-presentations.component.html',
  styleUrls: ['./crud-presentations.component.css'],
})
export class CrudPresentationsComponent implements OnInit {
  products: Array<any> = [];
  titles: Array<any> = [
    'code',
    'name',
    'reference',
    'plu',
    'stock',
    'price1',
    'price2',
    'price3',
    'med',
    'bulk',
    'isActive',
    'editar',
    'eliminar'
  ];

  constructor() {}

  ngOnInit(): void {
    this.products.push(
      {
        code: 'code',
        name: 'name',
        reference: 'reference',
        plu: 'plu',
        stock: 'stock',
        price1: 'price1',
        price2: 'price2',
        price3: 'price3',
        med: 'med',
        bulk: 'bulk',
        isActive: 'isActive',
      },
      {
        code: 'code',
        name: 'name',
        reference: 'reference',
        plu: 'plu',
        stock: 'stock',
        price1: 'price1',
        price2: 'price2',
        price3: 'price3',
        med: 'med',
        bulk: 'bulk',
        isActive: 'isActive',
      },
      {
        code: 'code',
        name: 'name',
        reference: 'reference',
        plu: 'plu',
        stock: 'stock',
        price1: 'price1',
        price2: 'price2',
        price3: 'price3',
        med: 'med',
        bulk: 'bulk',
        isActive: 'isActive',
      },
      {
        code: 'code',
        name: 'name',
        reference: 'reference',
        plu: 'plu',
        stock: 'stock',
        price1: 'price1',
        price2: 'price2',
        price3: 'price3',
        med: 'med',
        bulk: 'bulk',
        isActive: 'isActive',
      },
      {
        code: 'code',
        name: 'name',
        reference: 'reference',
        plu: 'plu',
        stock: 'stock',
        price1: 'price1',
        price2: 'price2',
        price3: 'price3',
        med: 'med',
        bulk: 'bulk',
        isActive: 'isActive',
      }
    );
  }
}
