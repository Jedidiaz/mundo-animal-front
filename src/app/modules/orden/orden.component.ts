import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {
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
