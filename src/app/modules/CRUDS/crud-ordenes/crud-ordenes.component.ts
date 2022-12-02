import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-crud-ordenes',
  templateUrl: './crud-ordenes.component.html',
  styleUrls: ['./crud-ordenes.component.css'],
})
export class CrudOrdenesComponent implements OnInit {
  products: Array<any> = [];
  titles: Array<any> = [
    'No',
    'Cliente',
    'Valor',
    'Detalle',
    'Estado'
  ];
  constructor( private ordenService: UsersService) {}

  ngOnInit(): void {
    this.products.push(
      { numero: '1', cliente: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', cliente: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', cliente: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', cliente: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', cliente: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', cliente: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', cliente: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', cliente: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', cliente: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', cliente: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', cliente: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', cliente: 'nombre', valor: '10.000', estado: 'Activo' }
    );
    this.getOrders();
  }

  getOrders(){
    this.ordenService.getOrder().subscribe({
      next: (data) => {
        console.log(data)
      }, error: (err) =>{console.log(err)}
    })
  }
}
