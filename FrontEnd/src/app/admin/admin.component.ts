import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private homeComp:HomepageComponent) {
    this.homeComp.hider();
    this.homeComp.getLogInStatus();
    this.homeComp.adminLogInCheck();
   }

  ngOnInit(): void {
  }

}
