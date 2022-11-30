import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-products',
  templateUrl: './crud-products.component.html',
  styleUrls: ['./crud-products.component.css']
})
export class CRUDProductsComponent implements OnInit {
  products: Array<any> = [];
  images: Array<any> = [];
  options: Array<any> = [];
  focus: any;
  responsiveOptions: any;
  titles: Array<any> = ['No', 'Codigo', 'Producto', 'Precio 1', 'Precio 2', 'acciones', 'visualizar', 'editar', 'eliminar'];
  constructor() { }

  ngOnInit(): void {
    this.products.push(
      {
        number: 1,
        code: 1234567,
        name: 'camita de gato',
        precio_1: '20.000.00',
        precio_2: '25.000.00',
      },
      {
        number: 1,
        code: 1234567,
        name: 'camita de gato',
        precio_1: '20.000.00',
        precio_2: '25.000.00',
      },
      {
        number: 1,
        code: 1234567,
        name: 'camita de gato',
        precio_1: '20.000.00',
        precio_2: '25.000.00',
      },
      {
        number: 1,
        code: 1234567,
        name: 'camita de gato',
        precio_1: '20.000.00',
        precio_2: '25.000.00',
      },
      {
        number: 1,
        code: 1234567,
        name: 'camita de gato',
        precio_1: '20.000.00',
        precio_2: '25.000.00',
      },
      {
        number: 1,
        code: 1234567,
        name: 'camita de gato',
        precio_1: '20.000.00',
        precio_2: '25.000.00',
      },
      {
        number: 1,
        code: 1234567,
        name: 'camita de gato',
        precio_1: '20.000.00',
        precio_2: '25.000.00',
      },
      {
        number: 1,
        code: 1234567,
        name: 'camita de gato',
        precio_1: '20.000.00',
        precio_2: '25.000.00',
      },
      {
        number: 1,
        code: 1234567,
        name: 'camita de gato',
        precio_1: '20.000.00',
        precio_2: '25.000.00',
      },
      {
        number: 1,
        code: 1234567,
        name: 'camita de gato',
        precio_1: '20.000.00',
        precio_2: '25.000.00',
      },
      {
        number: 1,
        code: 1234567,
        name: 'camita de gato',
        precio_1: '20.000.00',
        precio_2: '25.000.00',
      },
      {
        number: 1,
        code: 1234567,
        name: 'camita de gato',
        precio_1: '20.000.00',
        precio_2: '25.000.00',
      }
    );

    this.images.push('../../../../assets/product.png')
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '960px',
        numVisible: 4,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];

    this.options.push(
      { name: 'Opcion 1', code: '1' },
      { name: 'Opcion 2', code: '2' },
      { name: 'Opcion 3', code: '3' },
      { name: 'Opcion 4', code: '4' },
      { name: 'Opcion 5', code: '5' }
    );
  }

}
