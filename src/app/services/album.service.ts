import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})

export class AlbumService {
  
  private baseUrl = '';

  constructor(private httpClient: HttpClient, private sessionService: SessionService) {
    this.baseUrl = 'https://my-json-server.typicode.com/IvanaSrbljanin/DibTravel'
  }

  public get() {
    const userId = this.sessionService.getSessionUserId();
    return this.httpClient.get(`${this.baseUrl}/albums?userId=${userId}`);
  }

  public getById(id: Number){
    return this.httpClient.get(`${this.baseUrl}/albums/${id}`);
  }

  public getPhotos(albumId: Number, filters = {}) {
    return this.httpClient.get(`${this.baseUrl}/albums/${albumId}/photos`, { params: filters });
  }
}
