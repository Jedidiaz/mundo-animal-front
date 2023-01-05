import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClasificationModel } from 'src/app/Models/CategoriesModel';
import { ProductDetailComponent } from '../../products/product-detail/product-detail.component';
import { ProductService } from '../../products/service/product.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-edit-clasification',
  templateUrl: './edit-clasification.component.html',
  styleUrls: ['./edit-clasification.component.css']
})
export class EditClasificationComponent implements OnInit {
  image: any = '../../../../assets/default-thumbnail.jpg';
  idClasification!: number;
  archivo: any

  clasification!: ClasificationModel;
  disableButtonDelete: boolean = false;
  nuevo: boolean = false;
  formClasification: FormGroup;
  constructor(private productService: ProductService, private _router: ActivatedRoute, formBuilder: FormBuilder, private userService: UsersService, private sanitizer: DomSanitizer) {
    this.formClasification = formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    const id = this._router.snapshot.paramMap.get('id')
    if (id != 'new'){
      this.getClasification(id);
    }else{
      this.nuevo = true;
      this.disableButtonDelete = true;
    }

  }

  deleteImage(){
    this.image = '../../../../assets/default-thumbnail.jpg';
    this.disableButtonDelete = true;
  }

  getClasification(id: any){
    this.productService.getClasificationById(id). subscribe({
      next: (data)=> {
        console.log(data)
        this.clasification = data.data
        this.formClasification.setValue({
          'name': data.data.name
        });
        this.image = data.data.image;
      }, error: (err)=>{console.log(err)}
    })
  }

  uploadImg(event: any){

  }

  //image capture
  fileEvent(fileInput:any):any{
    const [ file ] = fileInput.target.files
    this.archivo = {
      fileRaw: file,
      fileName: file.name
    }
    this.extraerBase64(file).then(image => {
      this.image = image
      console.log(image)
    })
  }

  //extraer base64
  extraerBase64 = async ($event:any) => new Promise((resolve:any) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event)
      const image = this.sanitizer.bypassSecurityTrustHtml(unsafeImg)
      const reader = new FileReader()
      reader.readAsDataURL($event)
      reader.onload = () => {
        resolve(
          reader.result
        )
      }
      reader.onerror = error => {
        resolve(
          null
        )
      }
      return
    } catch (e) {
      return null
    }
  })

  //Actualizar datos
  saveChange(){
    const params = {name: this.formClasification.value.name, image: this.archivo[0]}
    this.productService.patchEditClasification(this.clasification.id, params).subscribe({
      next: (data)=> {
        console.log(data)
      }, error: (err)=> {console.log(err)}
    })
  }

  //Crear Nuevo
  newItem(){
    const params = new FormData();
    params.append('image', this.archivo.fileRaw, this.archivo.fileName)
    params.append('name', this.formClasification.value.name)
    this.productService.postNewClasification(params).subscribe({
      next: (data)=> {
        console.log(data)
      }, error: (err)=> {console.log(err)}
    })
  }
}
