import { Component, OnInit } from '@angular/core';
import { CartI } from '../../Models/cart/cart.interface';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsCart: CartI[] = [];
  val: number = 1;
  constructor() { }

  ngOnInit(): void {
    this.productsCart.push(
      {
        descripcion: 'Dog Chow adultos - extralife',
        numero: 1,
        peso: '2kg',
        unidades_disponibles: 10,
        valor: 27.999,
        imagen: '../../../assets/product.png'
      },
      {
        descripcion: 'Dog Chow adultos - extralife',
        numero: 1,
        peso: '2kg',
        unidades_disponibles: 10,
        valor: 27.999,
        imagen: '../../../assets/product.png'
      },{
        descripcion: 'Dog Chow adultos - extralife',
        numero: 1,
        peso: '2kg',
        unidades_disponibles: 10,
        valor: 27.999,
        imagen: '../../../assets/product.png'
      },
      {
        descripcion: 'Dog Chow adultos - extralife',
        numero: 1,
        peso: '2kg',
        unidades_disponibles: 10,
        valor: 27.999,
        imagen: '../../../assets/product.png'
      }
    );
    console.log(this.productsCart)
  }

}
