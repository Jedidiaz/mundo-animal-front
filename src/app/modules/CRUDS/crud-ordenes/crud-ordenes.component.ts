import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-ordenes',
  templateUrl: './crud-ordenes.component.html',
  styleUrls: ['./crud-ordenes.component.css'],
})
export class CrudOrdenesComponent implements OnInit {
  products: Array<any> = [];
  titles: Array<any> = [
    'No',
    'Codigo',
    'Cliente',
    'Fecha de nacimiento',
    'Telefono',
    'Ciudad',
    'direccion',
    'editar',
    'eliminar',
  ];
  constructor() {}

  ngOnInit(): void {}
}
