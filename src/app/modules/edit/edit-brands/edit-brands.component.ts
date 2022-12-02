import { Component, OnInit } from '@angular/core';
import { BarndsModels } from 'src/app/Models/CategoriesModel';
import { ProductService } from '../../products/service/product.service';

@Component({
  selector: 'app-edit-brands',
  templateUrl: './edit-brands.component.html',
  styleUrls: ['./edit-brands.component.css']
})
export class EditBrandsComponent implements OnInit {
  idBrand!: number;

  brand!: BarndsModels;
  constructor( private getItemId: ProductService) { }

  ngOnInit(): void {
    let URLsearch = `${window.location.href}`;
    let url = URLsearch.split('/')
    let n = url.length;
    this.idBrand = Number(url[n-1]);

    this.getBrand();
  }

  getBrand(){
    this.getItemId.getBrandById(this.idBrand). subscribe({
      next: (data)=> {
        console.log(data)
        this.brand = data;
      }, error: (err)=>{console.log(err)}
    })
  }
}
