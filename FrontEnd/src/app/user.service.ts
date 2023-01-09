import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  baseUrlOfGetUserByEmailId="http://localhost:1212/foodie-app/user-app/v1/get-user-data-by-emailid/"

  baseUrlOfUpdateUser="http://localhost:1212/foodie-app/user-app/v1/register-user"

  baseUrlOfNewAddress="http://localhost:1212/foodie-app/user-app/v1/add-address-to-user/"

  getUserByEmailId(emailId:any){
      return this.httpClient.get(this.baseUrlOfGetUserByEmailId+emailId);
  }

  updateUserData(userObj:any){
      return this.httpClient.post(this.baseUrlOfUpdateUser,userObj);
  }

  addAddressToUser(emailId:any,address:any){
    console.log(address);
    return this.httpClient.put(this.baseUrlOfNewAddress+emailId,address);
  }
}
