import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllRestaurantsService {

  constructor(private httpClient:HttpClient) { }

  selectedRestaurant:any;

  averageRating:any;
  searchAddress:any;

  baseUrlOfAllRestaurants="http://localhost:1212/foodie-app/restaurant-app/v1/get-all-restaurants";

  baseUrlOfRestaurantImages="http://localhost:1212/foodie-app/restro-profile-picture-app/v1/get-all-restro-picture";

  baseUrlOfRestaurant="http://localhost:1212/foodie-app/restaurant-app/v1/get-retaurant-by-gst-no"

  baseUrlOfSelectedRestroImage="http://localhost:1212/foodie-app/restro-profile-picture-app/v1/get-restro-profile-picture-by-gstno"

  baseUrlOfmenuList="http://localhost:1212/foodie-app/restaurant-app/v1/get-menu-list-by-gst-no"

  baseUrlToGetRestroByAddress="http://localhost:1212/foodie-app/restaurant-app/v1/get-restaurant-by-address/"

  baseUrlForCategorizedrestro="http://localhost:1212/foodie-app/restaurant-app/v1/get-menu-list-by-category/"
 getAllRestro(){
  return this.httpClient.get(this.baseUrlOfAllRestaurants);
 }

 getAllRestroPic(){
  return this.httpClient.get(this.baseUrlOfRestaurantImages);
 }

getRestroByGstNo(gstNo:any){
  return this.httpClient.get(this.baseUrlOfRestaurant+"/"+gstNo);
}

getRestroPicByGstNo(gstNo:any){
  return this.httpClient.get(this.baseUrlOfSelectedRestroImage+"/"+gstNo);
}

getMenuListByGstNo(gstNo:any){
  return this.httpClient.get(this.baseUrlOfmenuList+"/"+gstNo);
}

getAllRestroByAddress(address:any){
  return this.httpClient.get(this.baseUrlToGetRestroByAddress+address);
}

getMenuByCategory(gstNo:any,category:any){
  return this.httpClient.get(this.baseUrlForCategorizedrestro+gstNo+"/"+category);
}
  
}
