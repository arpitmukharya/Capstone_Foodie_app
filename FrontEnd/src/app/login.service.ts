import { AnimateTimings } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:any="http://localhost:1212/foodie-app/user-auth-app/v1/authenticate";

  isloggedOut:boolean=true;

  loginOrNot:boolean=false;

  vendorloggedin:boolean=true;
  adminLoggedIn:boolean=true;

  login(userObj:any){
   return this.httpClient.post(this.baseUrl,userObj);
  }

  


}