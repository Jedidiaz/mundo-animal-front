import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthI } from 'src/app/Models/authentication/authmodel.interface';
import { UsersService } from '../services/users/users.service'


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  queryparams: any;
  constructor( private _route:ActivatedRoute, private authService: UsersService ) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe({
      next: (ok) => {
        this.queryparams = ok;
        console.log(this.queryparams)
      }
    })
    this.Auth();
  }

  Auth(){
    this.authService.auth(this.queryparams).subscribe({
      next: (ok)=> {
        console.log(ok)
      }, error: (err)=> {console.log(err)}
    })
  }
}
