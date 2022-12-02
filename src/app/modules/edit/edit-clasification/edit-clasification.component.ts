import { Component, OnInit } from '@angular/core';
import { ClasificationModel } from 'src/app/Models/CategoriesModel';
import { ProductDetailComponent } from '../../products/product-detail/product-detail.component';
import { ProductService } from '../../products/service/product.service';

@Component({
  selector: 'app-edit-clasification',
  templateUrl: './edit-clasification.component.html',
  styleUrls: ['./edit-clasification.component.css']
})
export class EditClasificationComponent implements OnInit {
  idClasification!: number;

  clasification!: ClasificationModel;
  constructor(private getItemId: ProductService) { }

  ngOnInit(): void {
    let URLsearch = `${window.location.href}`;
    let url = URLsearch.split('/')
    let n = url.length;
    this.idClasification = Number(url[n-1]);

    this.getClasification();
  }

  getClasification(){
    this.getItemId.getClasificationById(this.idClasification). subscribe({
      next: (data)=> {
        console.log(data)
        this.clasification = data.data;
      }, error: (err)=>{console.log(err)}
    })
  }
}
