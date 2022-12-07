import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RegisterI } from 'src/app/Models/authentication/authmodel.interface';
import { UsersService } from 'src/app/modules/services/users/users.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [MessageService]
})
export class SignInComponent implements OnInit {

  formRegister!: FormGroup;
  constructor( private userservice: UsersService, formBuilider: FormBuilder, public messageService: MessageService, private router: Router) {
    this.formRegister = formBuilider.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  auth() {
    let form: RegisterI = { email: this.formRegister.value.email, password: this.formRegister.value.password, role: 'customer'};
    this.userservice.register(form).subscribe({
      next: (data) => {
        this.showSucces();
      }, error: (err) => {
        if (err.statusText == 'Conflict') {
          this.showErrorRegisEmail();
        } else if (err.statusText == 'Bad Request') {
          this.showErrorEmail();
        }else{console.log(err)}
      }
    })
  }

  showSucces(){
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Usuario registrado, Se envio un correo de verificacion'});
  }

  showErrorEmail(){
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Email invalido'});
  }

  showErrorRegisEmail(){
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Email ya ha sido registrado, revise su correo'});
  }

}
