import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  payload: any;

  constructor( private service: UsersService, private _route: ActivatedRoute ) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe({
      next: (data)=> {
        this.payload = data;
        console.log(this.payload)
      }, error: (err)=> {console.log(err)}
    })
  }

  changePass(pass1: string, pass2: string){
    if (pass1 == pass2){
      let params = {payload: this.payload.payload, password: pass1}
      console.log(params)
      this.service.postChangePass(params).subscribe({
        next: (data)=> {
          console.log(data)
        }, error: (err)=> {console.log(err)}
      })
    }else{
      console.log('La contraseña no coincide')
    }
  }
}
