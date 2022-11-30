import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthI, RegisterI } from 'src/app/Models/authentication/authmodel.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  private readonly url = environment.api;

  register(form: RegisterI): Observable<any> {
    let direccion = this.url +'api/v1/store/users/new';
    return this.http.post<any>(direccion, form);
  }

  auth(): Observable<any> {
    let direccion =
      this.url +
      +'api/v1/store/users/confirm?payload=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjEwLCJpYXQiOjE2Njc4NTc5NjMsImV4cCI6MTY2Nzg1ODU2M30.84-6Fkw0GFhWV7f7H9kFLRJRfy8GS2aEgZrS7w8GGJ4&extendsI=10';
    return this.http.post<any>(direccion, '')
  }
}


