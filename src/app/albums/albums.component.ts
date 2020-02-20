import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { ToggleStyleService} from '../services/toggle-style.service';
import { Album } from '../interfaces/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.less']
})

export class AlbumsComponent implements OnInit {

	albums: Album;

	constructor(private albumService: AlbumService, public toggle: ToggleStyleService) { }

	ngOnInit(): void {
		this.albumService.get()
			.subscribe(albums => this.albums = albums)
	}

}
