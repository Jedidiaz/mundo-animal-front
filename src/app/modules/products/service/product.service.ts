import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, retry } from 'rxjs';
import { BarndsModels, CategoriesModels, ClasificationModel, SubcategoriesModel } from 'src/app/Models/CategoriesModel';
import { ProductsModel } from 'src/app/Models/produts/productsModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private product:BehaviorSubject<any> = new BehaviorSubject<any>('0');

  private readonly URL = environment.api+'api/v1/store/';

  constructor(private http:HttpClient) { }


  get productId(){
    return this.product.asObservable();
  }

  set productIdS(id:string){
    this.product.next(id);
  }

  //PORDUCTS
  getProducts():Observable<ProductsModel[]>{
    return this.http.get<ProductsModel[]>(`${this.URL}products`)
  }

  getProductById(id:number):Observable<ProductsModel>{
    return this.http.get<ProductsModel>(`${this.URL}products/${id}`)
  }

  deleteProduct(id: number):Observable<{}>{
    return this.http.delete<{}>(`${this.URL}products/${id}`)
  }
  //CATEGORIES
  getCategories():Observable<CategoriesModels[]>{
    return this.http.get<CategoriesModels[]>(`${this.URL}categories/`)
  }

  getCategoryById(id: number):Observable<CategoriesModels>{
    return this.http.get<CategoriesModels>(`${this.URL}categories/${id}`)
  }

  deleteCategory(id: number):Observable<{}>{
    return this.http.delete<{}>(`${this.URL}categories/${id}`)
  }

  //SUBCATEGORIES
  getSubcategories():Observable<SubcategoriesModel[]>{
    return this.http.get<SubcategoriesModel[]>(`${this.URL}subCategorie`)
  }

  getSubcategoryById(id: number):Observable<any>{
    return this.http.get<any>(`${this.URL}subCategorie/${id}`)
  }

  deletesubcategory(id: number):Observable<{}>{
    return this.http.delete<{}>(`${this.URL}subcategories/${id}`)
  }

  //CLASIFICATIONS
  getClasification():Observable<ClasificationModel[]>{
    return this.http.get<ClasificationModel[]>(this.URL + 'clasification')
  }

  getClasificationById(id: number):Observable<any>{
    return this.http.get<any>(`${this.URL}clasification/${id}`)
  }

  deleteClasification(id: number):Observable<{}>{
    return this.http.delete<{}>(`${this.URL}clasification/${id}`)
  }

  //BRANDS
  getBrands():Observable<BarndsModels[]>{
    return this.http.get<BarndsModels[]>(this.URL + 'brands')
  }

  getBrandById(id: number):Observable<BarndsModels>{
    return this.http.get<BarndsModels>(`${this.URL}brands/${id}`)
  }

  deleteBrand(id: number):Observable<{}>{
    return this.http.delete<{}>(`${this.URL}brands/${id}`)
  }

  //ORDEN COMPRA
  
}
