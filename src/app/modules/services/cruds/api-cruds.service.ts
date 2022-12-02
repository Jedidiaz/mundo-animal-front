import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { productsCrudsI } from 'src/app/Models/Cruds/productsCrud.interface';


@Injectable({
  providedIn: 'root',
})
export class ApiCrudService {
  constructor(private http: HttpClient) {}

  private readonly url = environment.api;

  getAllProductsCrud():Observable<productsCrudsI[]>{
    return this.http.get<productsCrudsI[]>(this.url+ 'api/v1/store/'+ 'products')
  }
}
