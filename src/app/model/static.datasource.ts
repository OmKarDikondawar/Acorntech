import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";
import { Order } from "./order.model";


@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Chicken pot pie.", "MENU", "Chicken pot pie. (MENU)", 100),
        new Product(2, "Mashed potatoes", "MENU", "Mashed potatoes (MENU)", 100),
        new Product(3, "Fried chicken", "MENU", "Fried chicken. (MENU)", 100),
        new Product(4, "Burgers", "MENU", "Burgers (MENU)", 100),
        new Product(5, "Chicken soup", "MENU", "Chicken soup (MENU)", 100),
        new Product(6, "Meatloaf", "FAVOURITES", "Meatloaf. (FAVOURITES)", 100),
        new Product(7, "Lasagna", "FAVOURITES", "Lasagna. (FAVOURITES)", 100),
        new Product(8, "Spaghetti with meatballs", "FAVOURITES", "Spaghetti with meatballs (FAVOURITES)", 100),
        new Product(9, "Salad", "FAVOURITES", "Salad (FAVOURITES)", 100),
        new Product(10, "Breadsticks", "FAVOURITES", "Breadsticks (FAVOURITES)", 100),
        new Product(11, "Onion rings", "CHICKEN", "Onion rings (CHICKEN)", 100),
        new Product(12, "French fries", "CHICKEN", "French fries  (CHICKEN)", 100),
        new Product(13, "Baked potato", "CHICKEN", "Baked potato (CHICKEN)", 100),
        new Product(14, "Cheesecake", "CHICKEN", "Cheesecake (CHICKEN)", 100),
        new Product(15, "Burger Sliders", "CHICKEN", "Burger Sliders (CHICKEN)", 100),
    ];
    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
        }
}