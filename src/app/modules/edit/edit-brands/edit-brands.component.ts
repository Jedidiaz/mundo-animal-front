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
  constructor( private productService: ProductService, private _router: ActivatedRoute, formBuilder: FormBuilder, private userService: UsersService) {
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
    this.productService.getBrandById(id). subscribe({
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
    console.log('upload')
  }

  //Actualizar datos
  saveChange(){
    const params = {name: this.formBrand.value.name, image: this.image}
    this.productService.patchEditBrand(this.brand.id, params).subscribe({
      next: (data)=> {
        console.log(data)
      }, error: (err)=> {console.log(err)}
    })
  }

  //Crear Nuevo
  newItem(){
    const params = {name: this.formBrand.value.name, image: this.image}
    this.productService.postNewBrand(params).subscribe({
      next: (data)=> {
        console.log(data)
      }, error: (err)=> {console.log(err)}
    })
  }
}
