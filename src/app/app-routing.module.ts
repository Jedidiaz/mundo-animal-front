import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { CategoryComponent } from './modules/products/category/category.component';
import { ProductDetailComponent } from './modules/products/product-detail/product-detail.component';
import { ProductsComponent } from './modules/products/products/products.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/detail/:id', component: ProductDetailComponent},
  {path: 'category/:name', component: CategoryComponent}
  //{path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
