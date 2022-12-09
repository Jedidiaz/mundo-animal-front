import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  clasification!: ClasificationModel;
  disableButtonDelete: boolean = false;
  nuevo: boolean = false;
  formClasification: FormGroup;
  constructor(private getItemId: ProductService, private _router: ActivatedRoute, formBuilder: FormBuilder, private userService: UsersService) {
    this.formClasification = formBuilder.group({
      name: ['']
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
    this.getItemId.getClasificationById(id). subscribe({
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
    const img = event.files[0].name;
    console.log(img)
    const params = {productid: this.clasification.id, image: img}
    this.userService.postUploadImg(params).subscribe({
      next: (data)=> {console.log(data)}, error: (err)=> {console.log(err)}
    })
  }
}
