import { Component, OnInit } from '@angular/core';
import { PresentationsModel } from 'src/app/Models/CategoriesModel';
import { ProductService } from '../../products/service/product.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-presentations',
  templateUrl: './edit-presentations.component.html',
  styleUrls: ['./edit-presentations.component.css']
})
export class EditPresentationsComponent implements OnInit {
  campos: Array<any> = [
    'Code',
    'Name',
    'Reference',
    'Plu',
    'Stock',
    'Price1',
    'Price2',
    'Price3',
    'Med',
    'Bulk',
    'IsActive',
    'productId'
  ];

  New: boolean = false;
  formPresentations!: FormGroup;
  presentations!:PresentationsModel;
  constructor(private productService: ProductService, private _route: ActivatedRoute, fromBuilder: FormBuilder) {
    this.formPresentations = fromBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      reference: ['', Validators.required],
      plu: ['', Validators.required],
      stock: ['', Validators.required],
      price1: ['', Validators.required],
      price2: ['', Validators.required],
      price3: ['', Validators.required],
      med: ['', Validators.required],
      bulk: ['', Validators.required],
      isActive: ['', Validators.required],
      productId: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    let code = this._route.snapshot.paramMap.get('code');

    if (code === 'new'){
      this.New = true;
      console.log('new');
    }else {
      this.getproduct(id, code);
      console.log('edit')
    }
  }

  getproduct(id:any, code:any){
    this.productService.getProductById(id).subscribe({
      next: (pro) =>{
        let presetaciones = pro.presentations;
        for (let el of presetaciones){
          if (el.code == code){
            this.presentations = el;
            this.formPresentations.setValue({
              'code': this.presentations.code,
              'name': this.presentations.name,
              'reference': this.presentations.reference,
              'plu': this.presentations.plu,
              'stock': this.presentations.stock,
              'price1': this.presentations.price1,
              'price2': this.presentations.price2,
              'price3': this.presentations.price3,
              'med': this.presentations.med,
              'bulk': this.presentations.bulk,
              'isActive': this.presentations.isActive,
              'productId': this.presentations.productId
            })
          }
        }
      }
    })
  }

  updateOrNew(){
    if(!this.New){
      console.log('editar')
    }else{
      console.log('nuevo')
    }
  }


}
