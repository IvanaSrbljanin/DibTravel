import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  static USER_ID = 'user_id';
  static USER_USERNAME = 'user_username';

  constructor() { }

  isAuthenticated(): boolean {
    return this.getSessionUserId() !== null;
  }

  setUserId(userId: Number, username: string) {
    localStorage.setItem(SessionService.USER_ID, userId.toString());
    localStorage.setItem(SessionService.USER_USERNAME, username);
  }

  getSessionUserId() {
    const userString = localStorage.getItem(SessionService.USER_ID);
    if (userString) {
      return parseInt(userString, 10);
    }
    return null;
  }
}
