import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BarndsModels } from 'src/app/Models/CategoriesModel';
import { ProductService } from '../../products/service/product.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-edit-brands',
  templateUrl: './edit-brands.component.html',
  styleUrls: ['./edit-brands.component.css']
})
export class EditBrandsComponent implements OnInit {
  image: any = '../../../../assets/default-thumbnail.jpg';

  brand!: BarndsModels;
  formBrand!: FormGroup;
  disableButtonDelete: boolean = false;
  nuevo: boolean = false;
  constructor( private getItemId: ProductService, private _router: ActivatedRoute, formBuilder: FormBuilder, private userService: UsersService) {
    this.formBrand = formBuilder.group({
      name: ['']
    })
  }

  ngOnInit(): void {
    const id = this._router.snapshot.paramMap.get('id')
    if (id != 'new'){
      this.getBrand(id);
    }else{
      this.nuevo = true;
      this.disableButtonDelete = true;
    }



  }

  deleteImage(){
    this.image = '../../../../assets/default-thumbnail.jpg';
    this.disableButtonDelete = true;
  }

  getBrand(id: any){
    this.getItemId.getBrandById(id). subscribe({
      next: (data)=> {
        this.brand = data;
        this.formBrand.setValue({
          'name': data.name
        });
        this.image = data.image;
        console.log(data)

      }, error: (err)=>{console.log(err)}
    })
  }

  uploadImg(event: any){
    const img = event.files[0].name;
    console.log(img)
    const params = {productid: this.brand.id, image: img}
    this.userService.postUploadImg(params).subscribe({
      next: (data)=> {console.log(data)}, error: (err)=> {console.log(err)}
    })
  }
}
