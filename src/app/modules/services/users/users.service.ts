import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  AuthI,
  LoginI,
  RegisterI,
} from 'src/app/Models/authentication/authmodel.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})



export class UsersService {

  productCart: Array<any> = [];

  constructor(private http: HttpClient) {}

  private readonly url = environment.api;

  login(form: LoginI): Observable<any> {
    return this.http.post<any>(this.url + 'api/v1/store/auth/login', form);
  }

  register(form: RegisterI): Observable<any> {
    let direccion = this.url + 'api/v1/store/users/new';
    return this.http.post<any>(direccion, form);
  }

  auth(query: any): Observable<any> {
    let direccion = this.url + +'api/v1/store/users/confirm';

    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/x-www-form-urlencoded'
  );

    const body = {};

    const params = new HttpParams()
      .append('payload', query.payload)
      .append('extendsI', query.extendsI);

    return this.http.post<any>(this.url + 'api/v1/store/users/confirm', body, {
      headers: headers,
      params: params
    });
  }

  postChangePass(params: {}):Observable<any>{
    return this.http.post<any>(this.url + 'api/v1/store/users/change-password', params)
  }

  getClients(): Observable<any> {
    return this.http.get<any>(this.url + 'api/v1/store/users');
  }

  getOrder(): Observable<any> {
    return this.http.get<any>(this.url + 'api/v1/store/purchaseOrders');
  }

  getToken(){
    return localStorage.getItem('token')
  }

  deleteToken(){
    localStorage.removeItem('token')
  }

  recoveryPassword(email:{}):Observable<any>{
    return this.http.post<any>(this.url + 'api/v1/store/users/forgot-password', email)
  }

  setCart(product: {}){
    this.productCart.push(product)
  }

  getCart(){
    return this.productCart
  }
}
