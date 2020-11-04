import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from "@angular/material/snack-bar";
// @ts-ignore
import jwt_decode from "jwt-decode";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  usuario= null;
  constructor(private http: HttpClient, private snackBar: MatSnackBar, private router: Router) {
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  async login(user: any) {
    this.usuario = user;
    const result = await this.http.post<any>(`${environment.api}/auth/login`, user).toPromise();
    if (result && result.accessToken && result.message == "Login efetuado com sucesso.") {
      this.showMessage(result.message);
      window.localStorage.setItem('token', result.accessToken);
      return true;
    } else {
      this.showMessage(result.message);
      return false;
    }
  }

  logout() {
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }

  getAuthorizationToken() {
    return window.localStorage.getItem('token');
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);
    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }

}
