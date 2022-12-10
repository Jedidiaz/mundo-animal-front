import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css'],
})
export class OrdenComponent implements OnInit {
  //arrays de opciones dropdown
  direcciones: Array<any> = [];
  options: Array<any> = [];
  metodoPago: Array<any> = [];

  //Focus dropdown
  focus: any;
  focusDirecciones: any;
  focusPagos: any;
  constructor( private userService: UsersService) {}

  ngOnInit(): void {
    let array = JSON.parse(localStorage.getItem('myArray')!);
    for (let el of array){
      el.amount = +el.amount
    }
    console.log(array)
    this.userService.getDetailCustomer().subscribe({
      next: (ok)=> {
        console.log(ok)
      }, error: (err)=> {console.log(err)}
    })

    this.direcciones.push(
      { name: 'dig 78 # 22 44', code: '1' },
      { name: 'dig 78 # 22 44', code: '1' },
      { name: 'dig 78 # 22 44', code: '1' }
    );

    this.options.push(
      { name: 'Enconotrarse en la puerta', code: '1' },
      { name: 'Dejar en recepcion', code: '1' },
      { name: 'Encontrarse afuera', code: '1' }
    );

    this.metodoPago.push(
      { name: 'Tarjeta credito o debito', code: '1' },
      { name: 'Efectivo', code: '1' }
    );
  }
}
