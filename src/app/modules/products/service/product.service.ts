import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategoriesModels, SubcategoriesModel } from 'src/app/Models/CategoriesModel';
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


  getProducts():Observable<ProductsModel[]>{
    return this.http.get<ProductsModel[]>(`${this.URL}products`)
  }

  getProductById(id:number):Observable<ProductsModel>{
    return this.http.get<ProductsModel>(`${this.URL}products/${id}`)
  }

  getCategories():Observable<CategoriesModels[]>{
    return this.http.get<CategoriesModels[]>(`${this.URL}categories`)
  }

  getSubcategories():Observable<SubcategoriesModel[]>{
    return this.http.get<SubcategoriesModel[]>(`${this.URL}subCategorie`)
  }

}
