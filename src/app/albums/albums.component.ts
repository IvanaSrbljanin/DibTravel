import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';

import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.less']
})

export class AlbumsComponent implements OnInit {

faThLarge = faThLarge;
faBars = faBars;

public gridShown: boolean = true;
public listShown: boolean = false;

  albums;
  
  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.get()
      .subscribe(albums => this.albums = albums)
  }

  showGrid() {
  		this.gridShown = true;
  	  	this.listShown = false;
  }
    showList() {
  	  	this.listShown = true;
  	  	this.gridShown = false;
  }

}
