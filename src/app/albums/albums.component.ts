import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';

import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { ToggleStyleService} from '../services/toggle-style.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.less']
})

export class AlbumsComponent implements OnInit {

	faThLarge = faThLarge;
	faBars = faBars;

	albums;

	constructor(private albumService: AlbumService, public toggle: ToggleStyleService) { }

	ngOnInit(): void {
		this.albumService.get()
			.subscribe(albums => this.albums = albums)
	}

}
