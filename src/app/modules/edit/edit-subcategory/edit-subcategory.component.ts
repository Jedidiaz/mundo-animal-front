import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SubcategoriesModel } from 'src/app/Models/CategoriesModel';
import { ProductService } from '../../products/service/product.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-edit-subcategory',
  templateUrl: './edit-subcategory.component.html',
  styleUrls: ['./edit-subcategory.component.css'],
  providers: [MessageService]
})
export class EditSubcategoryComponent implements OnInit {
  idSubcategory!: any;
  image: any = '../../../../assets/default-thumbnail.jpg';
  archivo: any;

  subcategory!: SubcategoriesModel;
  disableButtonDelete: boolean = false;
  nuevo: boolean = false;
  formSubcategory: FormGroup;

  constructor(
    private productService: ProductService,
    private _router: ActivatedRoute,
    formBuilder: FormBuilder,
    private userService: UsersService,
    private sanitizer: DomSanitizer,
    private messageService: MessageService
  ) {
    this.formSubcategory = formBuilder.group({
      name: ['', Validators.required],
      categorieId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this._router.snapshot.paramMap.get('id');
    this.idSubcategory = id;
    if (id != 'new') {
      this.getSubcategoria(id);
    } else {
      this.nuevo = true;
      this.disableButtonDelete = true;
    }
  }

  deleteImage() {
    this.image = '../../../../assets/default-thumbnail.jpg';
    this.disableButtonDelete = true;
  }

  getSubcategoria(id: any) {
    this.productService.getSubcategoryById(id).subscribe({
      next: (data) => {
        this.subcategory = data.data;
        this.formSubcategory.setValue({
          name: data.data.name,
          categorieId: data.data.categorieId,
        });
        this.image = data.data.image;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  uploadImg(event: any) {}

  //image capture
  fileEvent(fileInput: any): any {
    const [file] = fileInput.target.files;
    this.archivo = {
      fileRaw: file,
      fileName: file.name,
    };
    //visualizar
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
    const params = {
      name: this.formSubcategory.value.name,
      categorieId: this.formSubcategory.value.categorieId,
    };
    this.productService
      .pacthEditSubcategory(this.idSubcategory, params)
      .subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'success',
            detail: 'Actualizado con exito!',
          });
        },
        error: (err) => {
          console.log(err)
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Algo salió mal :(',
          });
        },
      });
  }

  //Crear Nuevo
  newItem() {
    // const params = {
    //   name: this.formSubcategory.value.name,
    //   image: this.archivo[0],
    //   categorieId: this.formSubcategory.value.categorieId
    // }
    const params = new FormData();
    params.append('image', this.archivo.fileRaw, this.archivo.fileName);
    params.append('name', this.formSubcategory.value.name);
    params.append('categorieId', this.formSubcategory.value.categorieId);
    console.log(params);
    // const params = new FormData ();
    // params.append('image', this.archivo[0]),
    // params.append('name', this.formSubcategory.value.name),
    // params.append('categorieId', this.formSubcategory.value.categorieId)
    // console.log(params)
    this.productService
      .postNewSubcategory(params)
      .subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'success',
            detail: 'Creado con exito!',
          });
        },
        error: (err) => {
          console.log(err)
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Algo salió mal :(',
          });
        },
      });
  }
}
