import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SubcategoriesModel } from 'src/app/Models/CategoriesModel';
import { ProductService } from '../../products/service/product.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-edit-subcategory',
  templateUrl: './edit-subcategory.component.html',
  styleUrls: ['./edit-subcategory.component.css']
})
export class EditSubcategoryComponent implements OnInit {

  idSubcategory!: any;
  image: any = '../../../../assets/default-thumbnail.jpg';

  subcategory!: SubcategoriesModel;
  disableButtonDelete: boolean = false;
  nuevo: boolean = false;
  formSubcategory: FormGroup;

  constructor( private productService: ProductService, private _router: ActivatedRoute, formBuilder: FormBuilder, private userService: UsersService) {
    this.formSubcategory = formBuilder.group({
      name: ['']
    })
  }

  ngOnInit(): void {
    const id = this._router.snapshot.paramMap.get('id')
    this.idSubcategory = id;
    if (id != 'new'){
      this.getSubcategoria(id);
    }else{
      this.nuevo = true;
      this.disableButtonDelete = true;
    }

  }

  deleteImage(){
    this.image = '../../../../assets/default-thumbnail.jpg';
    this.disableButtonDelete = true;
  }

  getSubcategoria(id: any){
    this.productService.getSubcategoryById(id). subscribe({
      next: (data)=> {
        this.subcategory = data.data;
        this.formSubcategory.setValue({
          'name': data.data.name
        })
        this.image = data.data.image;
      }, error: (err)=>{console.log(err)}
    })
  }

  uploadImg(event: any){

  }

  //Actualizar datos
  saveChange(){
    const params = {name: this.formSubcategory.value.name, image: this.image}
    this.productService.pacthEditSubcategory(this.idSubcategory, params).subscribe({
      next: (data)=> {
        console.log(data)
      }, error: (err)=> {console.log(err)}
    })
  }

  //Crear Nuevo
  newItem(){
    const params = {name: this.formSubcategory.value.name, image: this.image}
    this.productService.postNewSubcategory(params).subscribe({
      next: (data)=> {
        console.log(data)
      }, error: (err)=> {console.log(err)}
    })
  }
}
