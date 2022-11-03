import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsModel, ProductWeigth } from 'src/app/Models/produts/productsModel';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  urlTree:any;
  idProduct!:number;

  images:any = []
  principalImage:string = '';
  product!:ProductsModel;
  name:string = '';
  desc:string = '';

  weight:ProductWeigth[] = [];
  selectWeight:ProductWeigth[] = [];
  val:number = 1;

  responsiveOptions:any[] = []

  constructor(private productsService:ProductService,
    private router:Router) { }

  ngOnInit(): void {
    let URLsearch = `${window.location.href}`;
    let url = URLsearch.split('/')
    let n = url.length;

    this.idProduct = Number(url[n-1]);

    this.getProduct();
    this.weight = [
      {name: '4KG', code: 4},
      {name: '8KG', code: 8},
      {name:'12KG', code: 12}
    ];
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '960px',
          numVisible: 4
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
    ];
  }

  getProduct(){
    this.productsService.getProductById(this.idProduct).subscribe({
      next: (ok) => {
        this.product = ok;
        this.name = ok.name;
        this.desc = ok.description;
        this.images = ok.images;
        this.images.unshift({
          previewImageSrc:ok.image,
          thumbnailImageSrc: ok.image
        });
        this.images.unshift({
          previewImageSrc:ok.image,
          thumbnailImageSrc: ok.image
        });
        console.log(ok, this.product, this.images);
      },
      error: (err) => {}
    });
  }

}
