import { Component, OnInit } from '@angular/core';
import { SubcategoriesModel } from 'src/app/Models/CategoriesModel';
import { ProductService } from '../../products/service/product.service';

@Component({
  selector: 'app-edit-subcategory',
  templateUrl: './edit-subcategory.component.html',
  styleUrls: ['./edit-subcategory.component.css']
})
export class EditSubcategoryComponent implements OnInit {
  idSubcategory!: number;

  subcategory!: SubcategoriesModel;
  constructor( private getTtemId: ProductService) { }

  ngOnInit(): void {
    let URLsearch = `${window.location.href}`;
    let url = URLsearch.split('/')
    let n = url.length;
    this.idSubcategory = Number(url[n-1]);

    this.getSubcategoria();
  }

  getSubcategoria(){
    this.getTtemId.getSubcategoryById(this.idSubcategory). subscribe({
      next: (data)=> {
        console.log(data)
        this.subcategory = data.data;
      }, error: (err)=>{console.log(err)}
    })
  }

}
