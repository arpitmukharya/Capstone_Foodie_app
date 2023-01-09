import { Component, OnInit } from '@angular/core';
import { AllRestaurantsService } from '../all-restaurants.service';
import { RatingService } from '../rating.service';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
  styleUrls: ['./show-review.component.css']
})
export class ShowReviewComponent implements OnInit {

  constructor(private reviewService:RatingService,private allrestroservice:AllRestaurantsService) { 
    this.getAllReview();
  }

  ngOnInit(): void {
  }

  gstNo:any;
  allReviews:any;
  getAllReview(){
    this.gstNo=this.allrestroservice.selectedRestaurant.gstNo;
    console.log(this.gstNo);
    this.reviewService.getReviewOfRestaurantByGstNo(this.gstNo).subscribe(
      resp=>{
        this.allReviews=resp;
        console.log(this.allReviews);
      }
    )
  }
}
