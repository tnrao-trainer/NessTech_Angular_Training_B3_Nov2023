import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    //   alert("Message from AuthGuard Service - canActivate method");

    if(sessionStorage.getItem("AUTH_TOKEN") == null)
    {
      this.router.navigate(['/Login'], { queryParams : { returnUrl: state.url  } });
    }

  }
}
