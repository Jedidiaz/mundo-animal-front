import { Component, OnInit } from '@angular/core';
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
  category!: CategoriesModels;
  constructor( private getItemId: ProductService) { }

  ngOnInit(): void {
    let URLsearch = `${window.location.href}`;
    let url = URLsearch.split('/')
    let n = url.length;
    this.idCategory = Number(url[n-1]);

    this.getCategory();
  }

  getCategory(){
    this.getItemId.getCategoryById(this.idCategory).subscribe({
      next: (data)=> {
        this.category = data;
        console.log(data  )
      }, error: (err)=> {console.log(err)}
    })
  }
}
