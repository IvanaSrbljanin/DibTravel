import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';
import { Album } from '../interfaces/album';
import { Photo } from '../interfaces/photo';

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
    return this.httpClient.get(`${this.baseUrl}/albums?userId=${userId}`) as Observable<Album>;
  }

  public getById(id: Number){
    return this.httpClient.get(`${this.baseUrl}/albums/${id}`) as Observable<Album>;
  }

  public getPhotos(albumId: Number, filters = {}) {
    return this.httpClient.get(`${this.baseUrl}/albums/${albumId}/photos`, { params: filters }) as Observable<Photo>;
  }
}
