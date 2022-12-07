import { Component, Input, OnInit, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


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

  //Forrmulario
  formProducts!: FormGroup;

  product!: ProductsModel;

  marcas: any = [];
  categoria: any = [];
  clasificacion: any = [];

  switch:boolean = false;

  //variable heredada
  @Input() id:any;

  constructor( private getItemId: ProductService, fromBuilder: FormBuilder ) {
    this.formProducts = fromBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      brands: ['', Validators.required],
      categories: ['', Validators.required],
      clasifications: ['', Validators.required],
      state: ['', Validators.required],
      iva: ['', Validators.required],
      desc: ['', Validators.required],
      promo: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.options.push(
      { name: 'True', code: '1' },
      { name: 'False', code: '2' }
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

    this.getCategorias();
    this.getClasificacion();
    this.getMarcas();

    if(this.id != null){
      this.getProduct();
    }else{
      this.switch = true
    }
  }


//detalle de productos
  getProduct(){
    this.getItemId.getProductById(this.id). subscribe({
      next: (data)=> {
        console.log(data)
        this.product = data;
        this.imagenes = data.images;
        this.imagenes.unshift({
          previewImageSrc:data.image,
          thumbnailImageSrc: data.image
        });
        this.imagenes.unshift({
          previewImageSrc:data.image,
          thumbnailImageSrc: data.image
        });
        this.formProducts.setValue({
          'name' : this.product.name,
          'description' : this.product.description,
          'brands' : this.product.brandId,
          'categories' : 1,
          'clasifications' : this.product.clasificationId,
          'state' : this.product.isActive,
          'iva' : this.product.iva,
          'desc' : this.product.discount,
          'promo' : this.product.startDiscount,
        })
      }, error: (err)=>{console.log(err)}
    })
  }

  //EditPost
  updateOrNew(){
    if (this.id != null){

    }else{

    }
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
