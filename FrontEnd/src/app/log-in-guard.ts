import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
@Injectable()
export class LogInGuard implements CanActivate {
    constructor(private loginService:LoginService,private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.loginService.loginOrNot==true){
            return true;
        }else{
            alert("LogInFirst");
            return this.router.parseUrl('/login');
        }
    }
}