import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestroComponent } from './add-restro/add-restro.component';
import { AdminChildGuard } from './admin-child-guard';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminRestaurantsComponent } from './admin-restaurants/admin-restaurants.component';
import { AdminReviewComponent } from './admin-review/admin-review.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminComponent } from './admin/admin.component';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { FavoriteRestroComponent } from './favorite-restro/favorite-restro.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogInGuard } from './log-in-guard';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateMyRestroComponent } from './update-my-restro/update-my-restro.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
  {path:'',component:AllRestaurantsComponent},
  {path:'home',component:HomepageComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'addrestro',component:AddRestroComponent,canActivate:[LogInGuard]},
  {path:'restaurant',component:RestaurantComponent},
  {path:'ordersummary',component:OrderSummaryComponent,canActivate:[LogInGuard]},
  {path:'grettings',component:GreetingsComponent,canActivate:[LogInGuard]},
  {path:'favrestro',component:FavoriteRestroComponent,canActivate:[LogInGuard]},
  {path:'orderhistory',component:OrderhistoryComponent,canActivate:[LogInGuard]},
  {path:'orderDetails',component:OrderdetailsComponent,canActivate:[LogInGuard]},
  {path:'myprofile',component:MyProfileComponent,canActivate:[LogInGuard]},
  {path:'vendor',component:VendorComponent,canActivate:[LogInGuard]},
  {path:'updaterestro',component:UpdateMyRestroComponent,canActivate:[LogInGuard]},
  {path:'searchedrestro',component:SearchListComponent},
  {path:'admin',component:AdminComponent,canActivate:[LogInGuard],
  children:[
    {path:'adminusers',component:AdminUsersComponent},
    {path:'adminrestaurants',component:AdminRestaurantsComponent},
    {path:'adminorders',component:AdminOrdersComponent},
    {path:'adminreview',component:AdminReviewComponent}
  ],canActivateChild:[AdminChildGuard]},
  {path:'**',component:AllRestaurantsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
