import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css'],
})
export class EditProductsComponent implements OnInit {
  options: Array<any> = [];
  focus: any;
  images: Array<any> = [];
  responsiveOptions: any;
  constructor() {}

  ngOnInit(): void {
    this.images.push(
      '../../../../assets/product.png',
      '../../../../assets/product.png'
    );

    this.options.push(
      { name: 'Opcion 1', code: '1' },
      { name: 'Opcion 2', code: '2' },
      { name: 'Opcion 3', code: '3' },
      { name: 'Opcion 4', code: '4' },
      { name: 'Opcion 5', code: '5' }
    );

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
  }
}
