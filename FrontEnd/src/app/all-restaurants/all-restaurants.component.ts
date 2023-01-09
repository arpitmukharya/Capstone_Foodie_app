import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllRestaurantsService } from '../all-restaurants.service';
import { HomepageComponent } from '../homepage/homepage.component';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.css']
})
export class AllRestaurantsComponent implements OnInit {

  constructor(private allRestroservice:AllRestaurantsService,private homeComp:HomepageComponent,private router:Router) {
    this.homeComp.hider();
    this.homeComp.getLogInStatus();
    this.getAllRestaurant();
    this.getAllRestaurantPic();
   
   }

  ngOnInit(): void {
  }

  allData:Restaurant[]=[];

  mapping(){
    this.allrestroData

    for(let i=0;i<this.allrestroData.length;i++ ){

      for(let k=0;k<this.allrestroPic.length;k++){
        if(this.allrestroData[i].gstNo==this.allrestroPic[k].gstNo){
          console.log(this.allrestroData[i].gstNo);
          console.log(this.allrestroPic[k].gstNo);
          this.allData.push(
            new Restaurant(this.allrestroData[i].restroName,this.allrestroData[i].restroAddress,this.allrestroData[i].cuisine,this.allrestroData[i].openTime,this.allrestroData[i].closeTime,this.allrestroPic[k].restroPicName,this.allrestroPic[k].picType,'data:image/jpeg;base64,'+this.allrestroPic[k].picSize,this.allrestroData[i].gstNo,this.allrestroData[i].restroPhone)
          )
        }
      }
      
    }
    console.log(this.allData);

  }

  allrestroData:any;
  allrestroPic:any;

  getAllRestaurant(){
    this.allRestroservice.getAllRestro().subscribe(
      resp=>{
        this.allrestroData=resp;
        console.log(this.allrestroData)
      }
    )
  }

  getAllRestaurantPic(){
    this.allRestroservice.getAllRestroPic().subscribe(
      resp=>{
        this.allrestroPic=resp;
        console.log(this.allrestroPic)
        this.mapping();
      }
    )
  }

  selectedRestro(obj:any){
  this.allRestroservice.getRestroByGstNo(obj.gstNo).subscribe(
    resp=>{
        this.allRestroservice.selectedRestaurant=resp;
        this.router.navigateByUrl("/restaurant");
    }
  )
}




}
