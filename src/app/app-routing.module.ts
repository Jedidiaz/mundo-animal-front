import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './modules/cart/cart.component';
import { CRUDProductsComponent } from './modules/CRUDS/crud-products/crud-products.component';
import { CrudsClientsComponent } from './modules/CRUDS/cruds-clients/cruds-clients.component';
import { HomeComponent } from './modules/home/home.component';
import { CategoryComponent } from './modules/products/category/category.component';
import { ProductDetailComponent } from './modules/products/product-detail/product-detail.component';
import { ProductsComponent } from './modules/products/products/products.component';
import { RecoveryPasswordComponent } from './modules/recovery-password/recovery-password.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/detail/:id', component: ProductDetailComponent},
  {path: 'category/:name', component: CategoryComponent},
  {path: 'cart', component: CartComponent},
  {path: 'forgot-password', component: RecoveryPasswordComponent},
  {path: 'CrUd-products', component: CRUDProductsComponent},
  {path: 'CrUd-cients', component: CrudsClientsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
