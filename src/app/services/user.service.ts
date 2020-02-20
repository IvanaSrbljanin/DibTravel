import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl = '';

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://my-json-server.typicode.com/IvanaSrbljanin/DibTravel'
  }

  public get() {
    return this.httpClient.get(`${this.baseUrl}/me`) as Observable<User>;
  }

}
