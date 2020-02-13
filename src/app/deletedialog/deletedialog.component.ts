import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.less']
})

export class DeletedialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {}

  public onYesClick(photoTitle: String) {
    let elem = document.querySelector("#" + photoTitle);
    elem.parentNode.removeChild(elem);
  }

}
