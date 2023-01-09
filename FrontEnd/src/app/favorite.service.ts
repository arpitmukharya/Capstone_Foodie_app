import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private httpClient:HttpClient) { }

 httpHeaders=new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem('jwt')});
    requestOption={headers:this.httpHeaders};

  baseUrlOfAddFavRestro="http://localhost:1212/foodie-app/user-favourite-restaurant-app/v1/add-favourite-restaurant-to-user/"

  baseUrlOfGetRestroByEmailId="http://localhost:1212/foodie-app/user-favourite-restaurant-app/v1/get-favourite-restaurant-by-emailid/"

  baseUrlOfDeleteFavRestro="http://localhost:1212/foodie-app/user-favourite-restaurant-app/v1/delete-favourite-restaurant-by-emailId/"


  addFavoriteRestro(emailId:any,userObj:any){
    return this.httpClient.put(this.baseUrlOfAddFavRestro+emailId,userObj,this.requestOption);
  }


  getAllFavRestroByEmailId(emailId:any){
    return this.httpClient.get(this.baseUrlOfGetRestroByEmailId+emailId,this.requestOption);
  }

  deleteFavoriteRestro(emailId:any,gstNo:any){
    return this.httpClient.delete(this.baseUrlOfDeleteFavRestro+emailId+"/"+gstNo,this.requestOption);
  }
}
