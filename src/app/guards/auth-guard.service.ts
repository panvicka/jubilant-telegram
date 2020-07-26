import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Url } from 'url';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {

    return this.authService.auth().pipe(
      map(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate(["login"]);
        }
        return isAuthenticated;
      })    
      );
}
}
