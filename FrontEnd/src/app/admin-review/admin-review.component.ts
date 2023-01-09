import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.css']
})
export class AdminReviewComponent implements OnInit {

  constructor(private adminservice:AdminService) { 
    this.getAllReviews();
  }

  ngOnInit(): void {
  }
  allReviews:any;

  getAllReviews(){
    this.adminservice.getAllReviews().subscribe(
      resp=>{
        this.allReviews=resp;
      }
    )
  }

  displayedColumns: string[] = ['reviewId', 'userEmailId', 'review', 'gstNo','star'];

}
