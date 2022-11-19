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
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
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
