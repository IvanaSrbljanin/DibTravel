import { Injectable } from '@angular/core';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class ToggleStyleService {

	public gridShown: boolean = true;
  public listShown: boolean = false;
  faThLarge = faThLarge;
  faBars = faBars;

  constructor() { }


  showGrid() {
      this.gridShown = true;
      this.listShown = false;
  }
    showList() {
        this.listShown = true;
        this.gridShown = false;
  }


}
