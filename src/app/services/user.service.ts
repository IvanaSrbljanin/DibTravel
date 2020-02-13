import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl = '';

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://my-json-server.typicode.com/IvanaSrbljanin/DibTravel'
  }

  public get() {
    return this.httpClient.get(`${this.baseUrl}/me`);
  }

  public getUsers() {
    return this.httpClient.get(`${this.baseUrl}/users/`);
  }

  public getUserById(userid) {
    return this.httpClient.get(`${this.baseUrl}/users?userId=${userid}`);
  }
}
