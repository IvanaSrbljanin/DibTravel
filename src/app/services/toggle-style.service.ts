import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleStyleService {

	public gridShown: boolean = true;
  public listShown: boolean = false;

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
