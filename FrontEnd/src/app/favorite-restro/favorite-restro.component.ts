import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AllRestaurantsService } from '../all-restaurants.service';
import { FavoriteService } from '../favorite.service';
import { JwtService } from '../jwt.service';

@Component({
  selector: 'app-favorite-restro',
  templateUrl: './favorite-restro.component.html',
  styleUrls: ['./favorite-restro.component.css']
})
export class FavoriteRestroComponent implements OnInit {

  constructor(private favoriteService:FavoriteService,private jwtService:JwtService,private router:Router,private allRestroservice:AllRestaurantsService,private snackbar:MatSnackBar) { 
    this.getAllFavRestro();
  }

  ngOnInit(): void {
  }

  token:any;
  emailId:any;
  tokendata:any;
  favRestros:any;
  getAllFavRestro(){
    this.token=localStorage.getItem('jwt');
    this.tokendata=this.jwtService.DecodeToken(this.token);
    console.log(this.tokendata);
    this.emailId=this.tokendata.userObject.emailId;
    console.log(this.emailId);

    this.favoriteService.getAllFavRestroByEmailId(this.emailId).subscribe(
      resp=>{
        this.favRestros=resp;
        console.log(this.favRestros);
      }
    )
    
  }
  durationInSeconds=5;
  deleteItem(gstNo:any){
    if(confirm("Do you really want to remove it?")){
     this.favoriteService.deleteFavoriteRestro(this.emailId,gstNo).subscribe(
      resp=>{
        this.getAllFavRestro();
        this.snackbar.open('Deleted','Close',{
          duration: this.durationInSeconds * 1000,       
        });
      }
     )
    }
   }

   selectedRestro(obj:any){
    this.allRestroservice.getRestroByGstNo(obj.gstNo).subscribe(
      resp=>{
          this.allRestroservice.selectedRestaurant=resp;
          this.router.navigateByUrl("/restaurant");
      }
    )
  }

}
