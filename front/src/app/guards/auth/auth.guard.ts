import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription, tap } from 'rxjs';
import { LoginService } from 'src/app/modals/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private loginService: LoginService,
              private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean>| boolean {

      const role: string = route.data['role'];

      return this.loginService.isAuthenticated(role).pipe(
        tap({
          next: (res) => {
            if(res === true){
              return true;
            }
            this.router.navigate(['/']);
            return false;
          },
          error: (err) => {
            this.router.navigate(['/']);
            return false;
          }
        })
      );

  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.canActivate(childRoute, state);
  }
  
}
