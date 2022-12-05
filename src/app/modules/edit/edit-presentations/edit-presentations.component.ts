import { Component, OnInit } from '@angular/core';
import { PresentationsModel } from 'src/app/Models/CategoriesModel';
import { ProductService } from '../../products/service/product.service';
import { ActivatedRoute } from '@angular/router';

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


  presentations!:PresentationsModel;
  constructor(private productService: ProductService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    let code = this._route.snapshot.paramMap.get('code');
    this.getproduct(id, code)
  }

  getproduct(id:any, code:any){
    this.productService.getProductById(id).subscribe({
      next: (pro) =>{
        let presetaciones = pro.presentations;
        for (let el of presetaciones){
          if (el.code == code){
            this.presentations = el;
          }
        }
        console.log(this.presentations)
      }
    })
  }


}
