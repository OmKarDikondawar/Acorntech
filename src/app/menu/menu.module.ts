import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { MenuComponent } from './menu.component';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { CartDetailComponent } from '../cart-detail/cart-detail.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { RouterModule } from "@angular/router";



@NgModule({
 imports: [ModelModule, BrowserModule, FormsModule,RouterModule],
 declarations: [MenuComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
 exports: [MenuComponent, CartDetailComponent, CheckoutComponent]
})
export class MenuModule { }