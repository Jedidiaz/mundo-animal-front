import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { CartComponent } from './modules/cart/cart.component';
import { CrudCategoryComponent } from './modules/CRUDS/crud-category/crud-category.component';
import { CRUDProductsComponent } from './modules/CRUDS/crud-products/crud-products.component';
import { CrudsClientsComponent } from './modules/CRUDS/cruds-clients/cruds-clients.component';
import { EditBrandsComponent } from './modules/edit/edit-brands/edit-brands.component';
import { EditCategoryComponent } from './modules/edit/edit-category/edit-category.component';
import { EditClasificationComponent } from './modules/edit/edit-clasification/edit-clasification.component';
import { EditClientsComponent } from './modules/edit/edit-clients/edit-clients.component';
import { EditProductsComponent } from './modules/edit/edit-products/edit-products.component';
import { EditSubcategoryComponent } from './modules/edit/edit-subcategory/edit-subcategory.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { OrdenComponent } from './modules/orden/orden.component';
import { CategoryComponent } from './modules/products/category/category.component';
import { ProductDetailComponent } from './modules/products/product-detail/product-detail.component';
import { ProductsComponent } from './modules/products/products/products.component';
import { RecoveryPasswordComponent } from './modules/recovery-password/recovery-password.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/detail/:id', component: ProductDetailComponent },
  { path: 'category/:name', component: CategoryComponent },
  { path: 'cart', component: CartComponent },
  { path: 'forgot-password', component: RecoveryPasswordComponent },
  { path: 'crud-products', component: CRUDProductsComponent },
  { path: 'crud-clients', component: CrudsClientsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'Account_Verification/payload:payload&extendsI:extendsI',
    component: AuthComponent,
  },
  { path: 'edit-products', component: EditProductsComponent },
  { path: 'edit-clients', component: EditClientsComponent },
  { path: 'edit-category', component: EditCategoryComponent },
  { path: 'edit-subcategory', component: EditSubcategoryComponent },
  { path: 'edit-clasification', component: EditClasificationComponent },
  { path: 'edit-brands', component: EditBrandsComponent },
  { path: 'crud-categories', component: CrudCategoryComponent },
  { path: 'crud-categories', component: CrudCategoryComponent },
  { path: 'orden', component: OrdenComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
