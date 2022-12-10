import { Component, OnInit } from '@angular/core';
import { CartI } from '../../Models/cart/cart.interface';
import { PrimeIcons } from 'primeng/api';
import { UsersService } from '../services/users/users.service';
import { CartModels, ProductsModel } from 'src/app/Models/produts/productsModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsCart: ProductsModel[] = [];
  items: CartModels[] = [];
  constructor( private cartService: UsersService, private router: Router ) {
   }

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
    this.productsCart.forEach(item=> {
      this.items.push({presentationProductCode: item.pSelect.code, amount: item.val})
    })

    console.log(this.items)
  }

  setOrder(){

    if (this.productsCart.length != 0){
      localStorage.setItem('myArray', JSON.stringify(this.items));
      this.router.navigate(['orden'])
    }else{
      console.log('ingrese productos al carrito')
    }
  }

  deleteProduct(product: ProductsModel){
    const temp = this.productsCart.find((el)=> el.id === product.id)
    if (temp != null){
      this.productsCart.pop()
    }
  }

}
