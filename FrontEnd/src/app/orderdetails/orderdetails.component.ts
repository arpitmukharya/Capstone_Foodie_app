import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  constructor(private orderService:OrderService) {
    this.getOrderByOrderID();
   }

  ngOnInit(): void {
  }

  orderId:any;
  orderData:any;
  getOrderByOrderID(){
    this.orderId=this.orderService.orderId;
    this.orderService.getOrderByOrderId(this.orderId).subscribe(
      resp=>{
        this.orderData=resp;
        console.log(this.orderData);
      }
    )
  }

}
