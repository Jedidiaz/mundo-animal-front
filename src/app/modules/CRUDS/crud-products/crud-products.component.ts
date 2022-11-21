import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-products',
  templateUrl: './crud-products.component.html',
  styleUrls: ['./crud-products.component.css']
})
export class CRUDProductsComponent implements OnInit {
  products: Array<any> = []
  titles: Array<any> = ['No', 'Codigo', 'Producto', 'Precio 1', 'Precio 2', 'acciones', 'visualizar', 'editar', 'eliminar']
  constructor() { }

  ngOnInit(): void {
    this.products.push(
      {number: 1, code: 1234567, name: 'camita de gato', precio_1: '20.000.00', precio_2: '25.000.00'},
      {number: 1, code: 1234567, name: 'camita de gato', precio_1: '20.000.00', precio_2: '25.000.00'},
      {number: 1, code: 1234567, name: 'camita de gato', precio_1: '20.000.00', precio_2: '25.000.00'},
      {number: 1, code: 1234567, name: 'camita de gato', precio_1: '20.000.00', precio_2: '25.000.00'},
      {number: 1, code: 1234567, name: 'camita de gato', precio_1: '20.000.00', precio_2: '25.000.00'},
      {number: 1, code: 1234567, name: 'camita de gato', precio_1: '20.000.00', precio_2: '25.000.00'},
      {number: 1, code: 1234567, name: 'camita de gato', precio_1: '20.000.00', precio_2: '25.000.00'},
      {number: 1, code: 1234567, name: 'camita de gato', precio_1: '20.000.00', precio_2: '25.000.00'},
      {number: 1, code: 1234567, name: 'camita de gato', precio_1: '20.000.00', precio_2: '25.000.00'},
      {number: 1, code: 1234567, name: 'camita de gato', precio_1: '20.000.00', precio_2: '25.000.00'},
      {number: 1, code: 1234567, name: 'camita de gato', precio_1: '20.000.00', precio_2: '25.000.00'},
      {number: 1, code: 1234567, name: 'camita de gato', precio_1: '20.000.00', precio_2: '25.000.00'},

    )
  }

}
