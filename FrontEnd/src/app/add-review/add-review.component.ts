import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AllRestaurantsService } from '../all-restaurants.service';
import { JwtService } from '../jwt.service';

import { RatingService } from '../rating.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  constructor(private ratingService:RatingService,private allrestroservice:AllRestaurantsService,private jwtService:JwtService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  reviewForm=new FormGroup({
    review:new FormControl('',[Validators.required]),
    star:new FormControl('',[Validators.required]),
  
  });

  get review(){
    return this.reviewForm.get('review');
  }
  get star(){
    return this.reviewForm.get('star');
  }


  gstNo:any;
  token:any;
  emailId:any;
  tokendata:any;
  userObj:any;
  durationInSeconds=5;
  addReview(){
    this.token=localStorage.getItem('jwt');
    this.tokendata=this.jwtService.DecodeToken(this.token);
    console.log(this.tokendata);
    this.emailId=this.tokendata.userObject.emailId;
    console.log(this.emailId);
    this.gstNo=this.allrestroservice.selectedRestaurant.gstNo;

    let reviewObj={
      userEmailId:this.tokendata.userObject.emailId,
      review:this.reviewForm.value.review,
      gstNo:this.gstNo,
      star:this.reviewForm.value.star
    }
    this.userObj=reviewObj;
    console.log(reviewObj);
   this.ratingService.addReview(this.userObj).subscribe(
    response=>{
      this.snackbar.open('Your Valuable Review Is Added','Close',{
        duration: this.durationInSeconds * 1000,
       
      });
    },fail=>{
      alert("not sent");
    }
   )
  }
}
