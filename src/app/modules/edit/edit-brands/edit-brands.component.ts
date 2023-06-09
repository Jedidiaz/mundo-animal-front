import { MessageService } from 'primeng/api';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BarndsModels } from 'src/app/Models/CategoriesModel';
import { ProductService } from '../../products/service/product.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-edit-brands',
  templateUrl: './edit-brands.component.html',
  styleUrls: ['./edit-brands.component.css'],
  providers: [MessageService]
})
export class EditBrandsComponent implements OnInit {
  image: any = '../../../../assets/default-thumbnail.jpg';
  archivo: any;

  brand!: BarndsModels;
  formBrand!: FormGroup;
  disableButtonDelete: boolean = false;
  nuevo: boolean = false;
  constructor(
    private productService: ProductService,
    private _router: ActivatedRoute,
    formBuilder: FormBuilder,
    private userService: UsersService,
    private sanitizer: DomSanitizer,
    private messageService: MessageService
  ) {
    this.formBrand = formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this._router.snapshot.paramMap.get('id');
    if (id != 'new') {
      this.getBrand(id);
    } else {
      this.nuevo = true;
      this.disableButtonDelete = true;
    }
  }

  deleteImage() {
    this.image = '../../../../assets/default-thumbnail.jpg';
    this.disableButtonDelete = true;
  }

  getBrand(id: any) {
    this.productService.getBrandById(id).subscribe({
      next: (data) => {
        this.brand = data;
        this.formBrand.setValue({
          name: data.name,
          image: data.name,
        });
        this.image = data.image;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  uploadImg(event: any) {
    console.log('upload');
  }

  //image capture
  fileEvent($event: any): any {
    const [file] = $event.target.files;
    this.archivo = {
      fileRaw: file,
      fileName: file.name,
    };
    this.extraerBase64(file).then((image) => {
      this.image = image;
    });
  }

  //extraer base64
  extraerBase64 = async ($event: any) =>
    new Promise((resolve: any) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustHtml(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = (error) => {
          resolve(null);
        };
        return;
      } catch (e) {
        return null;
      }
    });
  //Actualizar datos
  saveChange() {
    const params = {name: this.formBrand.value.name}
    this.productService.patchEditBrand(this.brand.id, params).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'Actualizado con exito!',
        });
      }, error: (err)=> {
        console.log(err)
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Algo salió mal :(',
        });
      }
    })
  }

  //Crear Nuevo
  newItem() {
    const params = new FormData();
    params.append('image', this.archivo.fileRaw, this.archivo.fileName);
    params.append('name', this.formBrand.value.name);
    this.productService.postNewBrand(params).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'Creado con exito!',
        });
      }, error: (err)=> {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Algo salió mal :(',
        });
      }
    })
  }
}
