import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IAccount } from 'src/app/interfaces/account';
import { JwtResponse } from 'src/app/interfaces/jwt-response';
import { IUser } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/modals/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient,
              private loginService: LoginService) { }

  getAllData(username: string): Observable<IUser>{
    return this.http.get<IUser>(`${this.BASE_URL}/account/data/${username}`,
      {'headers': new HttpHeaders({'Authorization': `Bearer ${this.loginService.getToken()}`})}).pipe(
        tap(
          (res: IUser) => {
            this.setData(res);
          },
          (err) => {

          }
        )
      );
  }

  updateData(id: number, account: IAccount): Observable<JwtResponse>{
    return this.http.patch<JwtResponse>(`${this.BASE_URL}/account/update/${id}`, account,
      {'headers': new HttpHeaders({'Authorization': `Bearer ${this.loginService.getToken()}`})});
  }

  setData(user: IUser){
    localStorage.setItem('user', JSON.stringify(user));
  }

  getData(){
    return localStorage.getItem('user');
  }

  removeData(){
    localStorage.removeItem('user');
  }

}
