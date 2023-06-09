import { FooterComponent } from './../../shared/footer/footer.component';
import { Component, Input, OnInit, NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';

import { CategoriesModels } from 'src/app/Models/CategoriesModel';
import { ProductsModel } from 'src/app/Models/produts/productsModel';
import { ProductService } from '../../products/service/product.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css'],
  providers: [MessageService],
})
export class EditProductsComponent implements OnInit {
  options: Array<any> = [];
  archivo: any

  name!: string;
  description!: string;
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

  switch: boolean = false;

  //variable heredada
  @Input() id: any;

  constructor(
    private productService: ProductService,
    fromBuilder: FormBuilder,
    private userService: UsersService,
    public messageService: MessageService
  ) {
    this.formProducts = fromBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(30)]],
      brands: ['', Validators.required],
      categories: ['', Validators.required],
      clasifications: ['', Validators.required],
      state: [null, Validators.required],
      iva: ['', Validators.required],
      desc: ['', Validators.required],
      startPromo: ['', Validators.required],
      endPromo: ['', Validators.required],
    });
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

    if (this.id != null) {
      this.getProduct();
    } else {
      this.switch = true;
    }
  }

  //detalle de productos
  getProduct() {
    this.productService.getProductById(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.product = data;
        this.imagenes = data.images;
        this.imagenes.unshift({
          previewImageSrc: data.image,
          thumbnailImageSrc: data.image,
        });
        this.imagenes.unshift({
          previewImageSrc: data.image,
          thumbnailImageSrc: data.image,
        });
        this.formProducts.setValue({
          name: this.product.name,
          description: this.product.description,
          brands: this.product.brandId,
          categories: 1,
          clasifications: this.product.clasificationId,
          state: this.product.isActive,
          iva: this.product.iva,
          desc: this.product.discount,
          startPromo: this.product.startDiscount,
          endPromo: this.product.endDiscount,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //nuevo
  addNew() {
    const params = new FormData()
    params.append('name', this.formProducts.value.name)
    params.append('description', this.formProducts.value.description)
    params.append('brandId', this.formProducts.value.brands)
    params.append('discount', this.formProducts.value.desc)
    params.append('clasificationId', this.formProducts.value.clasifications)
    params.append('iva', this.formProducts.value.iva)
    params.append('startDiscount', this.formProducts.value.startPromo)
    params.append('endDiscount', this.formProducts.value.endPromo)
    params.append('isActive', this.formProducts.value.state)
    params.append('image', this.archivo.fileRaw, this.archivo.fileName)

    this.productService.postNewProduct(params).subscribe({
      next: (data) => {
        console.log(data);
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'Actualizado con exito!',
        });
        location.reload();
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Algo salió mal :(',
        });
      },
    });
  }

  //editar
  editProduct() {

  }
  //categorias
  getCategorias() {
    this.productService.getCategories().subscribe({
      next: (data) => {
        data.forEach((el) => {
          this.categoria.push({ name: el.name, code: el.id });
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //Clsificacion
  getClasificacion() {
    this.productService.getClasification().subscribe({
      next: (data) => {
        data.forEach((el) => {
          this.clasificacion.push({ name: el.name, code: el.id });
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getMarcas() {
    this.productService.getBrands().subscribe({
      next: (data) => {
        data.forEach((el) => {
          this.marcas.push({ name: el.name, code: el.id });
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //deleteImage
  deleteImage(image: string) {
    const params = { id: image, productId: this.id };
    this.userService.postRemoveImagesProducts(params).subscribe({
      next: (data) => {
        console.log(data);
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'Eliminado con exito!',
        });
        location.reload();
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Algo salio mal :(',
        });
      },
    });
  }

  //uploadIMAGE

  uploadImg($event: any) {
    const [ file ] = $event.files;
    const params = { productid: this.id, image: file };
    this.userService.postUploadImgProducts(params).subscribe({
      next: (data) => {
        console.log(data);
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'Se actualizaron los datos!',
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //imageMain
  fileEvent($event:any ) {
    const [ file ] = $event.target.files;
    this.archivo = {
      fileRaw: file,
      fileName: file.Name
    }
  }

  addImageMain(event: any){
    console.log(event.currentFiles[0].name)
  }
}
