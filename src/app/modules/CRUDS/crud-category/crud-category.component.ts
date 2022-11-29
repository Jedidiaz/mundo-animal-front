import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-category',
  templateUrl: './crud-category.component.html',
  styleUrls: ['./crud-category.component.css'],
})
export class CrudCategoryComponent implements OnInit {
  products: Array<any> = [];
  titles: Array<any> = ['Nombre', 'Imagen', 'Editar', 'Eliminar'];
  titlesSubcategoria: Array<any> = [
    'Categoria Asociada',
    'Nombre',
    'Imagen',
    'Editar',
    'Eliminar',
  ];
  titlesclasificacion: Array<any> = [
    'Sub Categoria Asociada',
    'Nombre',
    'Imagen',
    'Editar',
    'Eliminar',
  ];
  titlesMarcas: Array<any> = [
    'Nombre',
    'Imagen',
    'Editar',
    'Eliminar',
  ];
  constructor() {}

  ngOnInit(): void {
    this.products.push(
      {
        nombre: 'Nombre',
        imagen: 'Imagen',
        category: 'Categoria asosiada',
        subCategory: 'Sub categoria asociada',
      },
      {
        nombre: 'Nombre',
        imagen: 'Imagen',
        category: 'Categoria asosiada',
        subCategory: 'Sub categoria asociada',
      },
      {
        nombre: 'Nombre',
        imagen: 'Imagen',
        category: 'Categoria asosiada',
        subCategory: 'Sub categoria asociada',
      },
      {
        nombre: 'Nombre',
        imagen: 'Imagen',
        category: 'Categoria asosiada',
        subCategory: 'Sub categoria asociada',
      }
    );
  }
}
