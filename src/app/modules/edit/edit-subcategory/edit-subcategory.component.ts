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
  idSubcategory!: number;
  image: any = '../../../../assets/default-thumbnail.jpg';

  subcategory!: SubcategoriesModel;
  disableButtonDelete: boolean = false;
  nuevo: boolean = false;
  formSubcategory: FormGroup;

  constructor( private getTtemId: ProductService, private _router: ActivatedRoute, formBuilder: FormBuilder, private userService: UsersService) {
    this.formSubcategory = formBuilder.group({
      name: ['']
    })
  }

  ngOnInit(): void {
    const id = this._router.snapshot.paramMap.get('id')
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
    this.getTtemId.getSubcategoryById(id). subscribe({
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
    const img = event.files[0].name;
    console.log(img)
    const params = {productid: this.subcategory.id, image: img}
    this.userService.postUploadImg(params).subscribe({
      next: (data)=> {console.log(data)}, error: (err)=> {console.log(err)}
    })
  }
}
