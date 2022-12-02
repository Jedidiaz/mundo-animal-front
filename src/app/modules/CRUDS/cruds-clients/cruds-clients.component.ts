import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-cruds-clients',
  templateUrl: './cruds-clients.component.html',
  styleUrls: ['./cruds-clients.component.css']
})
export class CrudsClientsComponent implements OnInit {
  products: Array<any> = [];
  Clients: Array<any> = [];
  titles: Array<any> = ['No', 'Codigo', 'Cliente', 'Fecha de nacimiento', 'Telefono', 'Ciudad', 'direccion', 'editar', 'eliminar']
  constructor(private userServices: UsersService) { }

  ngOnInit(): void {
    this.products.push(
      {number: 1, code: 1234567, name: 'Krlos Santos', date: '10-04-1999',phone: '', city: '25.000.00', adress: 'Avenida 14 # 156-67'},
      {number: 1, code: 1234567, name: 'Krlos Santos', date: '10-04-1999',phone: '', city: '25.000.00', adress: 'Avenida 14 # 156-67'},
      {number: 1, code: 1234567, name: 'Krlos Santos', date: '10-04-1999',phone: '', city: '25.000.00', adress: 'Avenida 14 # 156-67'},
      {number: 1, code: 1234567, name: 'Krlos Santos', date: '10-04-1999',phone: '', city: '25.000.00', adress: 'Avenida 14 # 156-67'},
      {number: 1, code: 1234567, name: 'Krlos Santos', date: '10-04-1999',phone: '', city: '25.000.00', adress: 'Avenida 14 # 156-67'},
      {number: 1, code: 1234567, name: 'Krlos Santos', date: '10-04-1999',phone: '', city: '25.000.00', adress: 'Avenida 14 # 156-67'},
      {number: 1, code: 1234567, name: 'Krlos Santos', date: '10-04-1999',phone: '', city: '25.000.00', adress: 'Avenida 14 # 156-67'},
      {number: 1, code: 1234567, name: 'Krlos Santos', date: '10-04-1999',phone: '', city: '25.000.00', adress: 'Avenida 14 # 156-67'},
      {number: 1, code: 1234567, name: 'Krlos Santos', date: '10-04-1999',phone: '', city: '25.000.00', adress: 'Avenida 14 # 156-67'},
      {number: 1, code: 1234567, name: 'Krlos Santos', date: '10-04-1999',phone: '', city: '25.000.00', adress: 'Avenida 14 # 156-67'},
      {number: 1, code: 1234567, name: 'Krlos Santos', date: '10-04-1999',phone: '', city: '25.000.00', adress: 'Avenida 14 # 156-67'}
    )
    this.getClients();
  }

  getClients(){
    this.userServices.getClients().subscribe({
      next: (data) => {
        this.Clients = data
        console.log(this.Clients)
      }, error: (err) => {console.log(err.name)}
    })
  }

}
