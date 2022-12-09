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
  idCategory!: number;

  //variables category
  category!: CategoriesModels;
  formCategory!: FormGroup;
  nuevo: boolean = false;
  image: any = '../../../../assets/default-thumbnail.jpg';
  images: any = '';
  disableButtonDelete: boolean = false;
  constructor( private getItemId: ProductService, private _router: ActivatedRoute, formBuilder: FormBuilder, private userService: UsersService) {
    this.formCategory = formBuilder.group({
      name: ['']
    })
   }

  ngOnInit(): void {
    const id = this._router.snapshot.paramMap.get('id')
    console.log(id)
    if (id != 'new'){
      this.getCategory(id);
    }else{
      this.nuevo = true;
      this.disableButtonDelete = true;
    }

  }

  deleteImage(){
    this.image = '../../../../assets/default-thumbnail.jpg';
    this.disableButtonDelete = true;
  }

  getCategory(id: any){
    this.getItemId.getCategoryById(id).subscribe({
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
    const img = event.files[0].name;
    console.log(img)
    const params = {productid: this.category.id, image: img}
    this.userService.postUploadImg(params).subscribe({
      next: (data)=> {console.log(data)}, error: (err)=> {console.log(err)}
    })
  }
}
