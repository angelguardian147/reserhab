import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtResponse } from 'src/app/interfaces/jwt-response';
import { IUser } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/modals/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class SegurityService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient,
              private loginService: LoginService) { }
              
  updatePassword(id_user: number, pass_old: string, pass_new: string, user: IUser): Observable<JwtResponse>{
    return this.http.patch<JwtResponse>(`${this.BASE_URL}/user/updPass/${pass_old}/${pass_new}/${id_user}`, user,
      {'headers': new HttpHeaders({'Authorization': `Bearer ${this.loginService.getToken()}`})});
  }

}
