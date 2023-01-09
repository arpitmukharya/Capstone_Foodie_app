import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddRestroComponent } from '../add-restro/add-restro.component';
import { AllRestaurantsService } from '../all-restaurants.service';
import { LoginService } from '../login.service';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { ProfilePictureService } from '../profile-picture.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private dialog:MatDialog,private profilePicserv:ProfilePictureService,private router:Router,private loginService:LoginService,private allRestroService:AllRestaurantsService) { 
    
    this.vendorLogInCheck();
    this.adminLogInCheck();
    this.hider();
    
    
  }

  ngOnInit(): void {
  }
  adminLoggedIn:boolean=true;
  adminLogInCheck(){
    this.adminLoggedIn=this.loginService.adminLoggedIn;
  }

  vendorLoggedIn:boolean=true;
  vendorLogInCheck(){
    this.vendorLoggedIn=this.loginService.vendorloggedin;
  }

  addRestro(){
    this.dialog.open(AddRestroComponent,{
      width:"50%",
      disableClose:true
  })
}
profilePic:any;

profileSetter(){
  console.log(this.loginService.loginOrNot);
  if(this.loginService.loginOrNot){
    this.profilePic=this.profilePicserv.profilePic;
  console.log(this.profilePic+"hi")
  }  
}

logout(){
  this.adminLoggedIn=true;
 // localStorage.removeItem('jwt');
  localStorage.clear();
  console.log(localStorage.getItem('jwt'));
  this.loginService.isloggedOut=true;
  this.loginService.loginOrNot=false;
  this.vendorLoggedIn=true;
  this.hider();
  this.profilePic="";
  
  this.router.navigateByUrl("/login");
  
}
isloggedOut:boolean=false;

hider(){
  this.isloggedOut=this.loginService.isloggedOut;
}

getLogInStatus(){
  if(this.loginService.loginOrNot){
    this.profileSetter();
  }
}

myFavoriteRestro(){
  this.router.navigateByUrl("/favrestro");
}

orderHistory(){
  this.router.navigateByUrl("/orderhistory");
}
myProfile(){
  this.dialog.open(MyProfileComponent,{
    width:"50%",
    disableClose:true
})
}
search(address:any){
  console.log(address);
  this.allRestroService.searchAddress=address;
  this.router.navigateByUrl("/searchedrestro");
}


}
