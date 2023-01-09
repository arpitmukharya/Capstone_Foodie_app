import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipList, MatChipsModule} from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import{MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { HomepageComponent } from './homepage/homepage.component';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { SignupComponent } from './signup/signup.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import { LoginComponent } from './login/login.component';
import { JwtService } from './jwt.service';
import { AddRestroComponent } from './add-restro/add-restro.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ShowReviewComponent } from './show-review/show-review.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { GreetingsComponent } from './greetings/greetings.component';
import {MatRippleModule} from '@angular/material/core';
import { FavoriteRestroComponent } from './favorite-restro/favorite-restro.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { VendorComponent } from './vendor/vendor.component';
import { UpdateMyRestroComponent } from './update-my-restro/update-my-restro.component';
import { VendorOrdersComponent } from './vendor-orders/vendor-orders.component';
import { SearchListComponent } from './search-list/search-list.component';
import {MatRadioModule} from '@angular/material/radio';
import { AdminComponent } from './admin/admin.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminRestaurantsComponent } from './admin-restaurants/admin-restaurants.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminReviewComponent } from './admin-review/admin-review.component';
import { LogInGuard } from './log-in-guard';
import { AdminChildGuard } from './admin-child-guard';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AllRestaurantsComponent,
    SignupComponent,
    LoginComponent,
    AddRestroComponent,
    RestaurantComponent,
    ShowReviewComponent,
    AddReviewComponent,
    OrderSummaryComponent,
    GreetingsComponent,
    FavoriteRestroComponent,
    OrderhistoryComponent,
    OrderdetailsComponent,
    MyProfileComponent,
    VendorComponent,
    UpdateMyRestroComponent,
    VendorOrdersComponent,
    SearchListComponent,
    AdminComponent,
    AdminUsersComponent,
    AdminRestaurantsComponent,
    AdminOrdersComponent,
    AdminReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatChipsModule,
    HttpClientModule,
    MatMenuModule,
    MatTableModule,
    CdkTableModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatRippleModule,
    MatRadioModule,
    FlexLayoutModule
  ],
  providers: [JwtService,LogInGuard,AdminChildGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
