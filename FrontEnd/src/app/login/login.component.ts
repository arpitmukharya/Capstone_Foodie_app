import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { checkEmail } from '../checkEmail';
import { JwtService } from '../jwt.service';
import { LoginService } from '../login.service';
import { ProfilePictureService } from '../profile-picture.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private jwtService:JwtService,private profilepicservice:ProfilePictureService,private route:Router,private snackbar:MatSnackBar) { 
  
  }

  ngOnInit(): void {
  }

  userAuth=new FormGroup({
    emailId:new FormControl('',[Validators.required,checkEmail()]),
    password:new FormControl('',[Validators.required])   
    
  })
  userobj:any=this.userAuth.value;
  respdata:any;
  tokendata:any;
  profile:any;
  profiledata:any;
  durationInSeconds=5;

  login(){
      this.loginService.login(this.userAuth.value).subscribe(
        response=>{
         
          this.loginService.isloggedOut=false;
          console.log(response);
          this.respdata=response;
          console.log(this.respdata.token);//retrieving token form backend
          console.log(this.jwtService.DecodeToken(this.respdata.token));
          this.tokendata=this.jwtService.DecodeToken(this.respdata.token);//retreiving token values from front end only
          let role=this.tokendata.userObject.role;//storing role of user in a variable
          console.log(role);
          
          //store token as localstorage in browser storage
          localStorage.setItem('jwt',this.respdata.token);
          
          this.profilegetter();
          this.snackbar.open('Login Success','Close',{
            duration: this.durationInSeconds * 1000,
           
          });
          setTimeout(
            ()=>{this.loginService.loginOrNot=true;
              if(role=="user"){
              this.route.navigateByUrl("");
            }else
            if(role=="vendor"){
              this.loginService.vendorloggedin=false;
              this.route.navigateByUrl("/vendor");
            }else{
              this.loginService.adminLoggedIn=false;
              this.route.navigateByUrl("/admin");
            }
            
            },2000
          )
          
          
          
  
        },fail=>{
          alert("failed")
          this.route.navigateByUrl("/signup")
        }
      )
    
  }

  emailId1:any;
  
  profilegetter(){
    this.emailId1=this.userAuth.value.emailId;
    console.log(this.emailId1);
    this.profilepicservice.getprofilepic(this.emailId1).subscribe(
      rsp=>{
       this.profiledata=rsp;
       this.profile=this.profiledata.pic;
       this.profilepicservice.profilePic='data:image/jpeg;base64,'+this.profile;

       },fail=>{
         console.log("not recovered");
       }
     )

  }

}
