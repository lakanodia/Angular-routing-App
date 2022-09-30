import { Injectable } from '@angular/core';
import{Observable, of, throwError} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string): void{
    localStorage.setItem('token', token)
  }


  getToken(): string | null{
    return localStorage.getItem('token');
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

  login({email, password}: any): Observable<any> {
    if (email === 'l.noida@gmai.com' && password === '123123') {
      this.setToken('ascassdsadsadasdasdas');
      return of({name: 'Laka', email: 'l.noida@gmai.com' });
    }
    return throwError(new Error('Failed to Login'));
  }

}
