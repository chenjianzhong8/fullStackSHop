import { Injectable } from '@angular/core';

import {  HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin: any = false;

  baseUrl :string = 'http://localhost:3000/users'

  constructor( private http: HttpClient  ) { }

  // user login   对象 obj: {username , password  }
  login(obj) {
   console.log ('login data =', obj);  
   return this.http.post( `${this.baseUrl}/login` , obj );
  } 


  //user register
  register(obj : any ) {
    console.log ('register data =', obj);  
    return this.http.post( `${this.baseUrl}/register` , obj );
  } 

  // 用户注销 （sign out）
 logout() {
  this.isLogin = false;
  sessionStorage.removeItem('status') ;   //清除登录状态 
 }

}
