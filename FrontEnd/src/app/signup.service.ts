import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient:HttpClient) { }

  baseUrlOfRegisterUser:any="http://localhost:1212/foodie-app/user-app/v1/register-user";

  baseUrlOfUserProfilePicture:any="http://localhost:1212/foodie-app/profile-picture-app/v1";

  baseUrlOfRestaurantPicture="http://localhost:1212/foodie-app/restro-profile-picture-app/v1/add-restro-profile-picture"

 
  addProfilePicture(imageData:any){
    return this.httpClient.post(this.baseUrlOfUserProfilePicture+'/add-profile-picture',imageData);
  }

  addRestroProfilePicture(imageData:any){
    return this.httpClient.post(this.baseUrlOfRestaurantPicture,imageData);
  }

  registerUser(userObj:any){
    return this.httpClient.post(this.baseUrlOfRegisterUser,userObj);
  }
}
