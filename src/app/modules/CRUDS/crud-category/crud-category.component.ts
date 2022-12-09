import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BarndsModels, CategoriesModels, ClasificationModel, SubcategoriesModel } from 'src/app/Models/CategoriesModel';
import { ProductService } from '../../products/service/product.service';

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

  //variables api
  //categoria
  categorias: CategoriesModels[] = [];
  //Subcategoria
  subCategorias: SubcategoriesModel[] = [];
  //Clasificacion
  clasificaciones: ClasificationModel[] = [];
  //Marcas
  marcas: BarndsModels[] = [];
  filterClasifications = '';
  filterBrands = '';
  filterCategories = '';
  filterSubcategories = '';

  constructor(private apiGet: ProductService) {}

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
    this.getCategorias();
    this.getSubcategorias();
    this.getClasificaciones();
    this.getMarcas();
  }
  //Categories
  getCategorias(){
    this.apiGet.getCategories().subscribe({
      next: (data)=> {
        this.categorias = data;
      }, error: (err)=> {console.log(err)}
    })
  }

  //Subcategories
  getSubcategorias(){
    this.apiGet.getSubcategories().subscribe({
      next: (data)=> {
        this.subCategorias = data;
      }, error: (err)=> {console.log(err)}
    })
  }

  //Clasifications
  getClasificaciones(){
    this.apiGet.getClasification().subscribe({
      next: (data)=> {
        this.clasificaciones = data;
      }, error: (err)=> {console.log(err)}
    })
  }

  //BRANDS
  getMarcas(){
    this.apiGet.getBrands().subscribe({
      next: (data)=> {
        this.marcas = data;
      }, error: (err)=> { console.log(err)}
    })
  }
}
