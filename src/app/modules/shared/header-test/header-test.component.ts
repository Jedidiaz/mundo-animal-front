import { UsersService } from './../../services/users/users.service';
import { ProductService } from './../../products/service/product.service';
import { MegaMenuItem } from 'primeng/api/megamenuitem';
import { CategoriesModels, BarndsModels } from './../../../Models/CategoriesModel';
import { ProductsModel } from './../../../Models/produts/productsModel';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-test',
  templateUrl: './header-test.component.html',
  styleUrls: ['./header-test.component.css']
})
export class HeaderTestComponent implements OnInit {
  products: ProductsModel[] = [];
  display: any;

  categories: CategoriesModels[] = [];
  subcategories: any = [];
  user: any;
  userSelect: number = 1;

  text: string = '';
  results: string[] = [];

  items: MegaMenuItem[] = [];
  info: Array<any> = [];

  checked: boolean = false;

  checkDropMarcas: boolean = false;
  checkDropcategporias: boolean = false;

  checkAdmin: boolean = false;

  productsTest: Array<any> = [
    { name: 'colo', id: 1 },
    { name: 'productor', id: 1 },
    { name: 'productor', id: 1 },
    { name: 'productor', id: 1 },
    { name: 'productor', id: 1 },
  ];
  selectProduct: any;

  // categories!: CategoriesModels[];
  marcas: BarndsModels[] = [];

  constructor(
    private productsService: ProductService,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.info = ['Trabaja con nosotros', 'Contacto'];
    this.getBrands();
    this.getCategories();

    const token = localStorage.getItem('token');
    if (token) {
      this.checked = true;
      this.getSesion();
    }

    this.getProduts();
  }

  //metodos

  getSesion() {
    this.userService.getClientToken().subscribe((res) => console.log(res));
  }

  logOut() {
    this.userService.deleteToken();
    location.reload();
  }

  show() {}

  getProduts() {
    this.productsService.getProducts().subscribe({
      next: (ok) => {
        console.log(ok);
      },
      error: (err) => {},
    });
  }

  getCategories() {
    this.productsService.getCategories().subscribe({
      next: (ok) => {
        this.categories = ok;
      },
      error: (err) => {},
    });
  }

  getSubCategories() {
    this.productsService.getSubcategories().subscribe({
      next: (ok) => {
        ok.forEach((el) => {
          this.subcategories.push({ name: el.name, code: el.id });
        });
        this.subcategories = ok;
      },
      error: (err) => {},
    });
  }

  getBrands() {
    this.productsService.getBrands().subscribe({
      next: (data) => {
        this.marcas = data;
      },
      error: (err) => {},
    });
  }

  search(event: any) {
    this.productsService.getProductById(event.query).subscribe({
      next: () => {
        console.log('ok');
      },
      error: (err) => {},
    });
  }

  searchBar(like: any) {
    this.userService.postSearchBar(like).subscribe({
      next: (ok) => {
        console.log(ok);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //drops
  dropMarcas() {
    this.checkDropMarcas = !this.checkDropMarcas;
    if (this.checkDropMarcas)
      document.getElementById('brandIcon')!.style.transform = 'rotateX(180deg)';
    else
      document.getElementById('brandIcon')!.style.transform = 'rotateX(0deg)';
  }

  dropCategorias() {
    this.checkDropcategporias = !this.checkDropcategporias;
    if (this.checkDropcategporias)
      document.getElementById('categorieIcon')!.style.transform =
        'rotateX(180deg)';
    else
      document.getElementById('categorieIcon')!.style.transform =
        'rotateX(0deg)';
  }

  //searchBar filter

  filterCountry(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.productsTest.length; i++) {
      let Productos = this.productsTest[i];
      if (Productos.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(Productos);
      }
    }
    console.log(filtered);
    this.results = filtered;
    console.log(this.results);
  }

  select(event: any) {
    this.router.navigate([`/products`], { queryParams: { id: event.id } });
  }

}
