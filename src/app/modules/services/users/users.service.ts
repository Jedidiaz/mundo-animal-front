import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthI, LoginI, RegisterI } from 'src/app/Models/authentication/authmodel.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  private readonly url = environment.api;

  login(form: LoginI):Observable<any>{
    return this.http.post(this.url + 'api/v1/store/auth/login', form)
  }

  register(form: RegisterI): Observable<any> {
    let direccion = this.url +'api/v1/store/users/new';
    return this.http.post<any>(direccion, form);
  }

  auth(): Observable<any> {
    let direccion =
      this.url +
      +'api/v1/store/users/confirm';
    return this.http.post<any>(direccion, '')
  }

  getClients():Observable<any>{
    return this.http.get<any>(this.url + 'api/v1/store/users')
  }

  getOrder():Observable<any>{
    return this.http.get<any>(this.url + 'api/v1/store/purchaseOrders')
  }
}


