import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/app/Models/produts/productsModel';
import { ProductService } from '../../products/service/product.service';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-crud-products',
  templateUrl: './crud-products.component.html',
  styleUrls: ['./crud-products.component.css'],
})
export class CRUDProductsComponent implements OnInit {
  products: Array<any> = [];
  images: Array<any> = [];
  options: Array<any> = [];
  focus: any;
  responsiveOptions: any;
  titles: Array<any> = [
    'ID',
    'NOMBRE PRODUCTO',
    'DESCRIPCION',
    'ID MARCA',
    'ID CLASIFICACION',
    'IMAGEN',
    'DESCUENTO',
    'INICIO DESCUENTO',
    'FIN DESCUENTO',
    'IVA',
    'ESTADO',
    'EDITAR',
    'ELIMINAR'
  ];
  New: any = 'new';
  loading: boolean = true;
  filterProducts = '';

  //Variables de api
  Products: ProductsModel[] = [];
  constructor(private apiServices: ProductService) {}

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

    this.images.push('../../../../assets/product.png');
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

    this.getItems();
  }

  getItems() {
    this.apiServices.getProducts().subscribe({
      next: (data) => {
        this.Products = data;
        console.log(this.Products);
        this.loading = false;
      },
      error: (err) => {},
    });
  }

  deleteProduct(id: number) {
    this.apiServices.deleteProduct(id).subscribe();
    this.getItems();
  }
}
