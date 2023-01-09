import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddReviewComponent } from '../add-review/add-review.component';
import { AllRestaurantsService } from '../all-restaurants.service';
import { FavoriteService } from '../favorite.service';
import { JwtService } from '../jwt.service';
import { LoginService } from '../login.service';
import { OrderService } from '../order.service';
import { RatingService } from '../rating.service';
import { ShowReviewComponent } from '../show-review/show-review.component';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(private allrestroservice:AllRestaurantsService,private matDialog:MatDialog,private ratingService:RatingService,private loginservice:LoginService,private orderservice:OrderService,private route:Router,private jwtService:JwtService,private favoriteservice:FavoriteService,private snackbar:MatSnackBar) {
    this.datamapping();
    this.getRestroPicyGstNo();
    this.getmenuListByGstNo();
    this.getRating();
    this. checkLogin();
   }

  ngOnInit(): void {
  }
  restroData:any;
  color:string="red";
  centered:boolean=true;
  radius: number=23;

  datamapping(){
    this.restroData=this.allrestroservice.selectedRestaurant;
    console.log(this.restroData);
  }

  token:any;
  emailId:any;
  tokendata:any;
  userObj:any;
  allFavoriteRestroByEmailId:any[]=[];
  alreadyFavAdded:boolean=false;
  durationInSeconds=5;
  addToFav(){
    this.token=localStorage.getItem('jwt');
    this.tokendata=this.jwtService.DecodeToken(this.token);
    console.log(this.tokendata);
    this.emailId=this.tokendata.userObject.emailId;
    console.log(this.emailId);

    this.userObj={
          gstNo:this.restroData.gstNo,
          restroName:this.restroData.restroName,
          restroAddress:this.restroData.restroAddress,
          openTime:this.restroData.openTime,
          closeTime:this.restroData.closeTime,
          cuisine:this.restroData.cuisine
        }
         this.favoriteservice.addFavoriteRestro(this.emailId,this.userObj).subscribe(
          resp=>{
            console.log(resp);
           
            if(resp==null){
              this.snackbar.open('Already Added','Close',{
                duration: this.durationInSeconds * 1000,
               
              });
            }else{
              this.snackbar.open('Favorite Added','Close',{
                duration: this.durationInSeconds * 1000,
               
              });
            }
          }
        )
  }


  restroPicdata:any;
  restroPic:any;

  getRestroPicyGstNo(){
    this.allrestroservice.getRestroPicByGstNo(this.restroData.gstNo).subscribe(
      resp=>{
        this.restroPicdata=resp;
        this.restroPic='data:image/jpeg;base64,'+this.restroPicdata.picSize
      }
    )
  }

  menuList:any;
  menuItempic:any;
  getmenuListByGstNo(){
    this.allrestroservice.getMenuListByGstNo(this.restroData.gstNo).subscribe(
      resp=>{
        this.menuList=resp;
         console.log(this.menuList);        
      }
    )
  }

  
  filterByCategory(category:any){
    this.allrestroservice.getMenuByCategory(this.restroData.gstNo,category).subscribe(
      resp=>{
        this.menuList=resp;
      }
    )
  }

  quantity:number=0;
 

  showreview(){

    this.matDialog.open(ShowReviewComponent,
      {
        width:"50%",
        disableClose:true
      })
  }
  addreview(){
    this.matDialog.open(AddReviewComponent,
      {
        width:"50%",
        disableClose:true
      })
  }

  rating:number=0;
  allreviewData:any;
  averageRating:any;

  getRating(){
    this.ratingService.getReviewOfRestaurantByGstNo(this.restroData.gstNo).subscribe(
      resp=>{
        this.allreviewData=resp;
        for(let i=0;i<this.allreviewData.length;i++){
            this.rating=this.rating+this.allreviewData[i].star;
           }
        this.averageRating=this.rating/this.allreviewData.length;
        this.averageRating= Math.round(this.averageRating);

      }
    )
  }

  isloggedin:boolean=true;

  checkLogin(){
    console.log(this.loginservice.loginOrNot);
    if(this.loginservice.loginOrNot){
      this.isloggedin=false;
    }else{
      this.isloggedin=true;
    }
  }

  calculatedPrice:number=0;
  allItemsInCart:any[]=[];
  items:any;
  addToCart(n:any,quantity:any){
   
    if(quantity>0){
     
      this.calculatedPrice=n.itemPrice*quantity;
      this.items={
        itemCategory:n.itemCategory,
        itemName:n.itemName,
        quantity:quantity,
        price:this.calculatedPrice,
        gstNo:this.restroData.gstNo
      }
   this.allItemsInCart.push(this.items);
   console.log(this.allItemsInCart);
   this.orderservice.order=this.allItemsInCart;
   this.snackbar.open('Items Added \n Total Amount: ₹'+this.calculatedPrice,'Close',{
    duration: this.durationInSeconds * 1000,
   
  });
   
   
    }
  }

  Order(){
    this.orderservice.vendorEmailId=this.restroData.emailId;
    this.route.navigateByUrl("/ordersummary");
  }

  
}
