import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Model/login';
import { Users } from '../Model/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

RootUrl:string="http://localhost:56134/api/Users/";
loginUrl:string="http://localhost:56134/api/account/login";

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
                             'access-control-allow-origin': '*',
                             'responseType': "'arraybuffer' | 'blob' | 'json' | 'text'"
                            })
};
  constructor(private http:HttpClient) { }

  public RegistrationAsync(User:Users):Observable<Users>
  {
    let  data=JSON.stringify(User);
     console.log(data);
    return this.http.post<Users>(this.RootUrl+'register',User,this.httpOptions);
  }
  public Login(login:Login):Observable<any>
  {
    return this.http.post(this.loginUrl,login,{responseType: 'text'});
  }
}
