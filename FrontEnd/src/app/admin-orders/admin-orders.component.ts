import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  constructor(private adminservice:AdminService) {
    this. getAllOrders();
   }

  ngOnInit(): void {
  }

  allOrders:any;

  getAllOrders(){
    this.adminservice.getAllOrders().subscribe(
      resp=>{
        this.allOrders=resp;
        console.log(this.allOrders);
      }
    )
  }

  
  displayedColumns: string[] = ['orderId', 'emailId', 'address', 'mobileNo','gstNo','totalPrice'];

}
