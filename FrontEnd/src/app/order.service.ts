import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }

  order:any[]=[];

  finalOrder:any;
  orderId:any;
  vendorEmailId:any;

  httpHeaders=new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem('jwt')});
    requestOption={headers:this.httpHeaders};

  baseUrlOfAddOrder="http://localhost:1212/foodie-app/user-order-app/v1/add-order"

  baseUrlOfOrderHistoryByEmailId="http://localhost:1212/foodie-app/user-order-app/v1/get-order-by-emailId/"

  baseUrlOfOrdersByOrderId="http://localhost:1212/foodie-app/user-order-app/v1/get-order-by-orderid/"

  addOrder(orderObj:any){
    return this.httpClient.post(this.baseUrlOfAddOrder,orderObj,this.requestOption);
  }

  getOrderHistoryByEmailId(emailId:any){
    return this.httpClient.get(this.baseUrlOfOrderHistoryByEmailId+emailId,this.requestOption);
  }

  getOrderByOrderId(orderId:any){
    return this.httpClient.get(this.baseUrlOfOrdersByOrderId+orderId,this.requestOption);
  }

}
