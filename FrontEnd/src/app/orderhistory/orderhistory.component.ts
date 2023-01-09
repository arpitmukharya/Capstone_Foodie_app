import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JwtService } from '../jwt.service';
import { OrderService } from '../order.service';
import { OrderdetailsComponent } from '../orderdetails/orderdetails.component';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {

  constructor(private orderHistoryservice:OrderService,private jwtService:JwtService,private router:Router,private matDialog:MatDialog) {
    this.getAllOrders();
   }

  ngOnInit(): void {
  }

  token:any;
  emailId:any;
  tokendata:any;
  allOrdersData:any;

  getAllOrders(){
    this.token=localStorage.getItem('jwt');
    this.tokendata=this.jwtService.DecodeToken(this.token);
    console.log(this.tokendata);
    this.emailId=this.tokendata.userObject.emailId;
    console.log(this.emailId);

    this.orderHistoryservice.getOrderHistoryByEmailId(this.emailId).subscribe(
      resp=>{
        this.allOrdersData=resp;
        console.log(this.allOrdersData);
      }
    )
  }

  showOrder(orderId:any){
    this.orderHistoryservice.orderId=orderId;
    this.matDialog.open(OrderdetailsComponent,
      {
        width:"70%",
        disableClose:true
      })
  }

}
