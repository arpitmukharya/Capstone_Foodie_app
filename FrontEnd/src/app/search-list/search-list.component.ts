import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllRestaurantsService } from '../all-restaurants.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  constructor(private allRestroService:AllRestaurantsService,private router:Router) { 
    this.getAllRestroByAddress();
  }

  ngOnInit(): void {
  }

  restaurantList:any;
  address:any;

  getAllRestroByAddress(){
    this.address=this.allRestroService.searchAddress;
    this.allRestroService.getAllRestroByAddress(this.address).subscribe(
      resp=>{
      this.restaurantList=resp;
      console.log(this.restaurantList);
      }
    )
  }

  showRestro(gstNo:any){
      this.allRestroService.getRestroByGstNo(gstNo).subscribe(
        resp=>{
            this.allRestroService.selectedRestaurant=resp;
            this.router.navigateByUrl("/restaurant");
        }
      )

}
}
