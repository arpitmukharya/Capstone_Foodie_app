import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private httpClient:HttpClient) { }

 
  

  baseUrlOfRestaurantAllReview="http://localhost:1212/foodie-app/restro-review-app/v1/get-review-by-gstno/";

  baseUrlOfAddReview="http://localhost:1212/foodie-app/restro-review-app/v1/add-review-by-email-id"

  getReviewOfRestaurantByGstNo(gstNo:any){
      return this.httpClient.get(this.baseUrlOfRestaurantAllReview+gstNo);
  }

  addReview(review:any){
     let httpHeaders=new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem('jwt')});
   let  requestOption={headers:httpHeaders};
    return this.httpClient.post(this.baseUrlOfAddReview,review,requestOption);
  }
}
