import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount } from 'src/app/interfaces/account';
import { IUser } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/modals/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class GOwnerService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient,
              private loginService: LoginService) { }

  getOwners(role: string): Observable<IUser[]>{
    return this.http.get<IUser[]>(`${this.BASE_URL}/account/accounts/${role}`,
      {'headers': new HttpHeaders({'Authorization': `Bearer ${this.loginService.getToken()}`})});
  }

}
