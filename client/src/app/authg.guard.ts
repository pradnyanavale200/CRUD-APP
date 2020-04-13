import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthgGuard implements CanActivate {
  constructor(
    private Auth: AuthService,
    private route: Router
  ){}

  canActivate(): boolean {
    if ( this.Auth.loggedIn()) {
      return true;
    } else {
      this.route.navigate(['/login'])
      return false;
    }
  }

}
