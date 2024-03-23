import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';
import { selectCart, selectCartQuantity } from 'src/app/store/cart-selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cart: any[] = [];
  cartQty: any;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectCart).subscribe(res => {
      this.cart = res.cart;
      console.log(res.cart);
    });
    this.cartQty = this.store.select(selectCartQuantity);
  }
}
