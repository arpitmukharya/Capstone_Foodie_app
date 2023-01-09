import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddReviewComponent } from '../add-review/add-review.component';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  constructor(private orderService:OrderService,private router:Router,private matDialog:MatDialog) {
    this.mapping();
   }

  ngOnInit(): void {
  }

  finalOrderData:any;

  mapping(){
    this.finalOrderData=this.orderService.finalOrder;
  }
  home(){
    this.router.navigateByUrl("");
  }

  addreview(){
    this.matDialog.open(AddReviewComponent,
      {
        width:"50%",
        disableClose:true
      })
  }

}
