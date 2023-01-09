import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private httpClient:HttpClient) { }

  vendorGstNo:any;

  baseUrlToAddRestaurant="http://localhost:1212/foodie-app/restaurant-app/v1/add-restaurant"

  baseUrlOfMyRestaurant="http://localhost:1212/foodie-app/restaurant-app/v1/get-restaurant-by-emailid/"

  baseUrlOfDeleteMenuItem="http://localhost:1212/foodie-app/restaurant-app/v1/delete-menu-item-by-itemname/"

  bseUrlOfAllOrders="http://localhost:1212/foodie-app/user-order-app/v1/get-orderlist-by-gstno/"

  httpHeaders=new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem('jwt')});
     requestOption={headers:this.httpHeaders};
  
  addRestro(restroObj:any){
    return this.httpClient.post(this.baseUrlToAddRestaurant,restroObj,this.requestOption);
  }

  getMyRestros(email:any){
    return this.httpClient.get(this.baseUrlOfMyRestaurant+email,this.requestOption);
  }

  deleteMenuItem(gstNo:any,itemName:any){
    return this.httpClient.delete(this.baseUrlOfDeleteMenuItem+gstNo+"/"+itemName);
  }

  getAllOrdersOfMyRestro(gstNo:any){
    console.log(gstNo)
    return this.httpClient.get(this.bseUrlOfAllOrders+gstNo,this.requestOption);
  }
}
