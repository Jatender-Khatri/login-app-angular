import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  // Calling the server to generate the token
  generateToken(credentials:any) {
    // token generate
    return this.http.post(`${this.url}/token`,credentials);
  }
  // Login The User
  loginUser(token:any) {
    localStorage.setItem("token", token);
    return true;
  }
  // To check either user is login or not
  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == undefined || token == '' || token == null) {
      return false;
    }
    else {
      return true;
    }
  }
  // Logout the user
  logout() {
    localStorage.removeItem("token");
    return true;
  }
  // for getting the token
  getToken() {
    return localStorage.getItem("token");
  }
}
