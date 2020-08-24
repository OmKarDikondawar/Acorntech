import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreFirstGuard } from "./storeFirst.guard";
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "store", component: MenuComponent,
  canActivate: [StoreFirstGuard]
  },
  { path: "login", component: LoginComponent,
  canActivate: [StoreFirstGuard]
  },
  { path: "cart", component: CartDetailComponent,
  canActivate: [StoreFirstGuard]

  },
  { path: "checkout", component: CheckoutComponent,
  canActivate: [StoreFirstGuard]
},
  { path: "**", redirectTo: "/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StoreFirstGuard],

})
export class AppRoutingModule { }
