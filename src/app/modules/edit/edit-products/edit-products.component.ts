import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  options: Array<any> = [];
  focus: any;
  constructor() { }

  ngOnInit(): void {
    this.options.push(
      { name: 'Opcion 1', code: '1' },
      { name: 'Opcion 2', code: '2' },
      { name: 'Opcion 3', code: '3' },
      { name: 'Opcion 4', code: '4' },
      { name: 'Opcion 5', code: '5' }
    );
  }

}
