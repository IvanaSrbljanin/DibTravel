import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ToggleStyleService} from '../services/toggle-style.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.less']
})

export class AlbumComponent implements OnInit {

  faTrash = faTrash;
  faSearch = faSearch;
  faArrowLeft = faArrowLeft;
  faThLarge = faThLarge;
  faBars = faBars;

  photos;
  album;

  albumId: Number;
  dialogRef: MatDialogRef<DeletedialogComponent>;
  
  constructor(private route: ActivatedRoute, private albumService: AlbumService, public dialog: MatDialog, public router: Router, public toggle: ToggleStyleService ) { }

  ngOnInit(): void {
    
    this.albumId = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.albumService.getById(this.albumId)
      .subscribe(album => {
        this.album = album;
      })

    this.albumService.getPhotos(this.albumId)
      .subscribe(photos => {
        this.photos = photos;
      })
  }

  openDialog(photoId: Number, photoTitle: String) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {photoId: photoId, photoTitle: photoTitle};

    this.dialogRef = this.dialog.open(DeletedialogComponent, dialogConfig);

  }

  backPage() {
    this.router.navigate(['albums']);
  }

  filterPhotos(event: any) {
    this.albumService.getPhotos(this.albumId, { title_like: event.target.value })
      .subscribe(photos => {
        this.photos = photos;
      })
  }


}
