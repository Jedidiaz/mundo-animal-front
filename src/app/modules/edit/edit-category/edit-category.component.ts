import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesModels } from 'src/app/Models/CategoriesModel';
import { ProductService } from '../../products/service/product.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  idCategory!: any;

  //variables category
  category!: CategoriesModels;
  formCategory!: FormGroup;
  nuevo: boolean = false;
  image: any = '../../../../assets/default-thumbnail.jpg';
  images: any = '';
  disableButtonDelete: boolean = false;
  constructor( private productService: ProductService, private _router: ActivatedRoute, formBuilder: FormBuilder, private userService: UsersService) {
    this.formCategory = formBuilder.group({
      name: ['']
    })
   }

  ngOnInit(): void {
    this.idCategory = this._router.snapshot.paramMap.get('id')
    console.log(this.idCategory)
    if (this.idCategory != 'new'){
      this.getCategory();
    }else{
      this.nuevo = true;
      this.disableButtonDelete = true;
    }

  }

  deleteImage(){
    this.image = '../../../../assets/default-thumbnail.jpg';
    this.disableButtonDelete = true;
  }

  getCategory(){
    this.productService.getCategoryById(this.idCategory).subscribe({
      next: (data)=> {
        this.category = data;
        console.log(this.category)
        this.formCategory.setValue({
          'name': data.name
        })
        this.image = data.image;
      }, error: (err)=> {console.log(err)}
    })
  }

  uploadImg(event: any){
    
  }
//Actualizar datos
  saveChange(){
    const params = {name: this.formCategory.value.name, image: this.image}
    this.productService.patchEditCategory(this.idCategory, params).subscribe({
      next: (data)=> {
        console.log(data)
      }, error: (err)=> {console.log(err)}
    })
  }

  //Crear Nuevo
  newItem(){
    const params = {name: this.formCategory.value.name, image: this.image}
    this.productService.postNewCategory(params).subscribe({
      next: (data)=> {
        console.log(data)
      }, error: (err)=> {console.log(err)}
    })
  }
}
