import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent implements OnInit {

  constructor( private service: UsersService ) { }

  ngOnInit(): void {
  }

  recovery(email: string){
    let Email = {email: email}
    this.service.recoveryPassword(Email).subscribe({
      next: (data) => {
        console.log(data)
      }, error: (err)=> {console.log(err)}
    })
  }

}
