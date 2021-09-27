import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl = 'http://localhost:8081'
  constructor(private http:HttpClient) { }
  getUsers()
  {
    return this.http.get(`${this.baseUrl}/getUser`)
  }
}
