import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IAccount } from 'src/app/interfaces/account';
import { IHome } from 'src/app/interfaces/home';
import { JwtResponse } from 'src/app/interfaces/jwt-response';
import { IService } from 'src/app/interfaces/service';
import { IUser } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/modals/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerHomeService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient,
              private loginService: LoginService) { }

              getAllData(username: string): Observable<IAccount>{
                return this.http.get<IUser>(`${this.BASE_URL}/account/homes/${username}`,
                  {'headers': new HttpHeaders({'Authorization': `Bearer ${this.loginService.getToken()}`})}).pipe(
                    tap(
                      (res: IAccount) => {
                        console.log(res)
                        this.setData(res);
                      },
                      (err) => {
            
                      }
                    )
                  );
              }

              
    createHotel(home: IHome): Observable<JwtResponse>{
      return this.http.post<JwtResponse>(`${this.BASE_URL}/home/create`, home,
        {'headers': new HttpHeaders({'Authorization': `Bearer ${this.loginService.getToken()}`})});
    }

    findAllService(): Observable<IService[]>{
      return this.http.get<IService[]>(`${this.BASE_URL}/service/services`,
        {'headers': new HttpHeaders({'Authorization': `Bearer ${this.loginService.getToken()}`})});
    }
            
              updateData(id: number, account: IAccount): Observable<JwtResponse>{
                return this.http.patch<JwtResponse>(`${this.BASE_URL}/account/update/${id}`, account,
                  {'headers': new HttpHeaders({'Authorization': `Bearer ${this.loginService.getToken()}`})});
              }
            
              setData(account: IAccount){
                localStorage.setItem('account', JSON.stringify(account));
              }
            
              getData(){
                return localStorage.getItem('account');
              }
            
              removeData(){
                localStorage.removeItem('account');
              }
            

}
