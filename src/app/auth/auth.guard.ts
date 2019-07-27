import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService

  ) { }

  isGoLogin(url): boolean {
    const isLogin = sessionStorage.getItem('status');
    if (isLogin) {     // 如果用户处于登录状态
      return true;
    }
    else {     // 如果用户处于未登录状态
      this.router.navigate(['/login']);
      return false;
    }
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){

      const url: string = state.url;
      return this.isGoLogin(url); 
      
  }

  canLoad(route: Route): boolean {

    const url = `${route.path}`;
    return this.isGoLogin(url); 
  }

}
