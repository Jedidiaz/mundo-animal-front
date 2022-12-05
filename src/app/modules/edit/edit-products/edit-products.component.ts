import { Component, Input, OnInit, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

import { CategoriesModels } from 'src/app/Models/CategoriesModel';
import { ProductsModel } from 'src/app/Models/produts/productsModel';
import { ProductService } from '../../products/service/product.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css'],
})
export class EditProductsComponent implements OnInit {

  options: Array<any> = [];

  name!: string;
  description!:string;
  brands: any;
  focus1: any;
  focus2: any;
  focus3: any;
  focus4: any;
  focus5: any;

  imagenes: any = [];
  responsiveOptions: any;


  product!: ProductsModel;

  marcas: any = [];
  categoria: any = [];
  clasificacion: any = [];

  //variable heredada
  @Input() id:any;

  constructor( private getItemId: ProductService ) {}

  ngOnInit(): void {
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

    this.getProduct();
    this.getCategorias();
    this.getClasificacion();
    this.getMarcas();
  }

//detalle de productos
  getProduct(){
    this.getItemId.getProductById(this.id). subscribe({
      next: (data)=> {
        console.log(data)
        this.product = data;
        this.name = data.name;
        this.description = data.description;
        this.imagenes = data.images;
        this.imagenes.unshift({
          previewImageSrc:data.image,
          thumbnailImageSrc: data.image
        });
        this.imagenes.unshift({
          previewImageSrc:data.image,
          thumbnailImageSrc: data.image
        });
      }, error: (err)=>{console.log(err)}
    })
  }

  //categorias
  getCategorias(){
    this.getItemId.getCategories().subscribe({
      next: (data)=> {
        data.forEach(el => {
          this.categoria.push(
            {name: el.name, code: el.id}
          )
        })
      }, error: (err)=>{console.log(err)}
    })
  }
//Clsificacion
  getClasificacion(){
    this.getItemId.getClasification().subscribe({
      next: (data)=> {
        data.forEach(el => {
          this.clasificacion.push(
            {name: el.name, code: el.id}
          )
        })
      }, error: (err)=>{console.log(err)}
    })
  }

  getMarcas(){
    this.getItemId.getBrands().subscribe({
      next: (data)=> {
        data.forEach(el => {
          this.marcas.push(
            {name: el.name, code: el.id}
          )
        })
      }, error: (err)=>{console.log(err)}
    })
  }
}
