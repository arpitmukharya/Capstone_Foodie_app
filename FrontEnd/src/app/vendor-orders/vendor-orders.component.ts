import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-orders',
  templateUrl: './vendor-orders.component.html',
  styleUrls: ['./vendor-orders.component.css']
})
export class VendorOrdersComponent implements OnInit {

  constructor(private vendorService:VendorService) {
    this.getAllOrder();
   }

  ngOnInit(): void {
  }

  gstNo:any;
  allOrdersData:any;

  getAllOrder(){
    this.gstNo=this.vendorService.vendorGstNo;
    this.vendorService.getAllOrdersOfMyRestro(this.gstNo).subscribe(
      resp=>{
        this.allOrdersData=resp;
        console.log(this.allOrdersData);
      }
    )
  }

}
