import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { checkPhNo } from '../checkPhNo';
import { EmailService } from '../email.service';
import { JwtService } from '../jwt.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  constructor(private orderservice:OrderService,private jwtService:JwtService,private route:Router,private emailservice:EmailService,private snackbar:MatSnackBar) { 
    this.getOrders();
    
  }

  ngOnInit(): void {
  }
  orderList:any[]=[];

  getOrders(){
this.orderList=this.orderservice.order;
this.priceCalculator();
 }

coupon:number=0;
 applyCoupon(coupon:any){
this.coupon=coupon;
this.priceCalculator();

 }
   totalPrice:number=0;
    gstAmount:any;
    payPrice:any;

    priceCalculator(){
      this.totalPrice=0;
      for(let i=0;i<this.orderList.length;i++){
        this.totalPrice=this.totalPrice+this.orderList[i].price;
      }
      this.totalPrice=this.totalPrice-(this.totalPrice*this.coupon);
      this.gstAmount=this.totalPrice*0.1;
      this.payPrice=this.gstAmount+this.totalPrice;
      this.payPrice=Math.round(this.payPrice);
    }

    deleteItem(item:any){
     if(confirm("Are you sure to let it go")){
      const index=this.orderList.indexOf(item);
      console.log(index);
      this.orderList.splice(index,1);
      this.priceCalculator();
      console.log(this.orderList)
     }
    }

    orderDetails=new FormGroup({
      address:new FormControl('',[Validators.required]),
      mobileNo:new FormControl('',[Validators.required,checkPhNo()])   
      
    })

     token:any;
  emailId:any;
  tokendata:any;
  orderObj:any;
  mail:any;
  durationInSeconds=5;
    addOrder(){
      this.token=localStorage.getItem('jwt');
      this.tokendata=this.jwtService.DecodeToken(this.token);
      console.log(this.tokendata);
      this.emailId=this.tokendata.userObject.emailId;

      this.orderObj={
        emailId:this.emailId,
        address:this.orderDetails.value.address,
        mobileNo:this.orderDetails.value.mobileNo,
        itemList:this.orderList,
        totalPrice:this.totalPrice,
        gstNo:this.orderList[0].gstNo
      }

      this.orderservice.addOrder(this.orderObj).subscribe(
        resp=>{
          
          this.orderservice.finalOrder=resp;
          this.emailService();
          this.vendorEmailService();
          console.log(resp);
          console.log(this.emailId);
          this.snackbar.open('Order Placed','Close',{
            duration: this.durationInSeconds * 1000,
           
          });
            this.route.navigateByUrl("/grettings");
        }
      )
    }
    
    cancel(){
      this.route.navigateByUrl("");
    }

    emailService(){
      console.log("emailService")
      this.mail={
        "recipient":this.emailId,
        "msgBody":"Order Id :"+this.orderservice.finalOrder.orderId+"\n Please keep this orderId safe to track your order.\n Your food will be delivered soon!!!\nThanks for ordering with us",
        "subject":"Welcome to Foodie App \n Feed the hunger with us!! as our precious customer."
        }
         this.emailservice.sendMail(this.mail).subscribe(
            resp=>{
              this.snackbar.open('Check Your Registered E-mail','Close',{
                duration: this.durationInSeconds * 1000,
               
              });
            }
          )
    }

    vendorMailId:any;
    vendorEmailService(){
      this.vendorMailId=this.orderservice.vendorEmailId;
      console.log("vendoremailService")
      this.mail={
        "recipient":this.vendorMailId,
        "msgBody":"Order Id :"+this.orderservice.finalOrder.orderId+"\n Please keep this orderId safe.\n Deliver it on time.\nThanks for working with us!!!",
        "subject":"Welcome to Foodie App \n Feed the hunger with us!! as our precious vendor"
        }
         this.emailservice.sendMail(this.mail).subscribe(
            resp=>{
              this.snackbar.open('Check Your Registered E-mail','Close',{
                duration: this.durationInSeconds * 1000,
               
              });
            }
          )
    }
}
