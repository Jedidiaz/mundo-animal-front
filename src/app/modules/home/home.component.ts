import { Component, OnInit } from '@angular/core';
import { CategoriesModels, SubcategoriesModel } from 'src/app/Models/CategoriesModel';
import { ProductService } from '../products/service/product.service';
import { CarouselI } from '../../Models/carosuel/carousel'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories:CategoriesModels[] = [];
  subcategories:SubcategoriesModel[] = [];
  responsiveOptions:any = [];
  carousel!:CarouselI[];
  imagesProducts: Array<any> = [];
  val: number = 3;
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    // this.getSubCategories();
    // this.carouselService.getCarousel().then(Carousel=> {
    //   this.carousel = Carousel;
    // })

    this.carousel = [{image: '../../../../assets/carousel/pexels-engin-akyurt-14374653.jpg'},
    {image: '../../../../assets/carousel/pexels-lumn-4060142.jpg'},
    {image: '../../../../assets/carousel/pexels-mikkel-bendix-9789471.jpg'}];

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '720px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '360px',
          numVisible: 1,
          numScroll: 1
      }
    ];

    this.imagesProducts.push(
      '../../../assets/product.png', '../../../assets/product.png', '../../../assets/product.png','../../../assets/product.png')
  }

  /* getData(){
    this.service.getCategories().subscribe({
      next: (ok) => {
        this.categories = ok;
        this.categories.forEach((el, index) => {
          let temp:SubcategoriesModel = el.subcategories;
            let array:SubcategoriesModel = {
              categorieId : temp.categorieId,
              id:el.id,
              image:el.image,
              name:el.name
            }
            this.subcategories1.push(array)
        });
        console.log(this.subcategories1, this.subcategories2)
      },
      error: (err) => {}
    });
  } */

  getSubCategories(){
    this.service.getSubcategories().subscribe({
      next: (ok) => {
        this.subcategories = ok
        console.log(ok)
      },
      error: (err) => {}
    });
  }

}
