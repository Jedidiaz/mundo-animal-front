import { Component, OnInit } from '@angular/core';
import { CartI } from '../../Models/cart/cart.interface';
import { PrimeIcons } from 'primeng/api';
import { UsersService } from '../services/users/users.service';
import { ProductsModel } from 'src/app/Models/produts/productsModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsCart: ProductsModel[] = [];
  constructor( private cartService: UsersService, private router: Router ) { }

  ngOnInit(): void {
    // this.productsCart.push(
    //   {
    //     descripcion: 'Dog Chow adultos - extralife',
    //     numero: 1,
    //     peso: '2kg',
    //     unidades_disponibles: 10,
    //     valor: 27.999,
    //     imagen: '../../../assets/product.png',
    //     val: 1
    //   },
    //   {
    //     descripcion: 'Dog Chow adultos - extralife',
    //     numero: 1,
    //     peso: '2kg',
    //     unidades_disponibles: 10,
    //     valor: 27.999,
    //     imagen: '../../../assets/product.png',
    //     val: 1
    //   },{
    //     descripcion: 'Dog Chow adultos - extralife',
    //     numero: 1,
    //     peso: '2kg',
    //     unidades_disponibles: 10,
    //     valor: 27.999,
    //     imagen: '../../../assets/product.png',
    //     val: 1
    //   },
    //   {
    //     descripcion: 'Dog Chow adultos - extralife',
    //     numero: 1,
    //     peso: '2kg',
    //     unidades_disponibles: 10,
    //     valor: 27.999,
    //     imagen: '../../../assets/product.png',
    //     val: 1
    //   }
    // );
    this.productsCart = this.cartService.getCart();
    console.log(this.productsCart)
  }

  setOrder(){
    if (this.productsCart.length != 0){
      
      this.router.navigate(['orden'])
    }else{
      console.log('ingrese productos al carrito')
    }

  }

}
