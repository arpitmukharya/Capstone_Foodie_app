import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  baseUrlOfAllUsers="http://localhost:1212/foodie-app/user-app/v1/get-all-user"
  baseUrlOfAllRestaurants="http://localhost:1212/foodie-app/restaurant-app/v1/get-all-restaurants"
  baseUrlOfAllOrders="http://localhost:1212/foodie-app/user-order-app/v1/get-all-orders"
  baseUrlOfAllReviews="http://localhost:1212/foodie-app/restro-review-app/v1/get-all-reviews"

  getAllUsers(){
   return this.httpClient.get(this.baseUrlOfAllUsers);
  }
  getAllRestaurants(){
    return this.httpClient.get(this.baseUrlOfAllRestaurants);
   }
   getAllOrders(){
    return this.httpClient.get(this.baseUrlOfAllOrders);
   }
   getAllReviews(){
    return this.httpClient.get(this.baseUrlOfAllReviews);
   }
}
