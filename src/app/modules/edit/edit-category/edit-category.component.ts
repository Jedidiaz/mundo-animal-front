import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesModels } from 'src/app/Models/CategoriesModel';
import { ProductService } from '../../products/service/product.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  idCategory!: number;

  //variables category
  formCategory!: FormGroup;
  nuevo: boolean = false;
  image: any = '../../../../assets/default-thumbnail.jpg';
  disableButtonDelete: boolean = false;

  constructor( private getItemId: ProductService, private _router: ActivatedRoute, formBuilder: FormBuilder) {
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
        this.formCategory.setValue({
          'name': data.name
        })
        this.image = data.image;

        console.log(data)
      }, error: (err)=> {console.log(err)}
    })
  }

  onBasicUpload(event: any){
    console.log(event.file)
  }
}
