import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.less']
})

export class AlbumsComponent implements OnInit {

  albums;
  
  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.get()
      .subscribe(albums => this.albums = albums)
  }

}
