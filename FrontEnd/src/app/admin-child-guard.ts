import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
@Injectable()
export class AdminChildGuard implements CanActivateChild {
    constructor(private loginService:LoginService,private router:Router){}
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.loginService.adminLoggedIn==false){
            return true;
        }else{
            alert("LogInFirst");
            return this.router.parseUrl('/login');
        }
    }
   
}
