import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilePictureService {

  constructor(private httpClient:HttpClient) { }

  baseUrlOfProfilePicture="http://localhost:1212/foodie-app/profile-picture-app/v1/get-profile-picture-by-emailid/"

  profilePic:any;
  getprofilepic(email:any){
    
      return this.httpClient.get(this.baseUrlOfProfilePicture+email);
    }
  }

  // let httpHeaders=new HttpHeaders({
  //   'Authorization':'Bearer '+localStorage.getItem('jwt')});
  //   let requestOption={headers:httpHeaders}
  //   return this.httpClient.get(this.baseUrlOfProfilePicture+"/"+email,requestOption);
  // }


