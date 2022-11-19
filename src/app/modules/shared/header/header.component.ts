import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api/megamenuitem';
import { CategoriesModels } from 'src/app/Models/CategoriesModel';
import { ProductsModel } from 'src/app/Models/produts/productsModel';
import { ProductService } from '../../products/service/product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  products:ProductsModel[] = [];

  categories:CategoriesModels[] = [];
  subcategories:any = [];
  user:any;
  userSelect:number = 1;

  text:string = '';
  results:string[] = [];

  items:MegaMenuItem[] = [];
  info:Array<any> = [];

  constructor(private productsService:ProductService) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Marcas',
        items: [
          [
            {
                label: 'Video 1',
                items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
            },
            {
                label: 'Video 2',
                items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
            }
          ]
        ]
      },
      {
        label: 'Categorias',
        items: [
          [
              {
                  label: 'User 1',
                  items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
              },
              {
                  label: 'User 2',
                  items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
              },
          ]
        ]
      },
      {
        label: 'Servicios',
        items: [
          [
              {
                  label: 'Event 1',
                  items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
              },
              {
                  label: 'Event 2',
                  items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
              }
          ]
        ]
      },
      {
        label: 'Contactenos'
      },
      {
        label: 'Promociones'
      },
      {
        label: 'Blog'
      },
      {
        label: 'Contactenos'
      }
    ];

    this.user = [
      {name: 'Mi cuenta', code: 1},
      {name: 'Mi cuenta', code: 2}
    ];

    this.info = ['Trabaja con nosotros','Contacto']
  }

  show(){
  }

  getProduts(){
    this.productsService.getProducts().subscribe({
      next: (ok) => {
        this.products  = ok;
      },error: (err) => {}
    });
  }

  getCategories(){
    this.productsService.getCategories().subscribe({
      next: (ok) => {
        this.categories  = ok
      },error: (err) => {}
    });
  }

  getSubCategories(){
    this.productsService.getSubcategories().subscribe({
      next: (ok) => {
        ok.forEach(el => {
          this.subcategories.push({ name:el.name, code:el.id})
        });
        this.subcategories = ok
        console.log(ok)
      },
      error: (err) => {}
    });
  }

  search(event:any) {
    this.productsService.getProductById(event.query).subscribe({
      next: () => {
        console.log('ok')
      },
      error: (err) => {}
    });
}
}
