import {Component, Input, OnInit} from '@angular/core';
import {Attraction} from '../model/Attraction';
import {Place} from '../model/Place';

@Component({
  selector: 'app-overview-attractions',
  templateUrl: './overview-attractions.component.html',
  styleUrls: ['./overview-attractions.component.css']
})
export class OverviewAttractionsComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('attractions')
  attractions: Attraction[];

  // tslint:disable-next-line:no-input-rename
  @Input('places')
  places: Place[];

  isVisibleCheck = false;
  isVisible = false;

  constructor() { }

  check() {
    this.isVisibleCheck = true;
  }
  checkOption() {
    if (this.isVisibleCheck) {
      this.isVisible = true;
    }
  }
  onSubmitAttraction() {
    console.log('Atrakcje: ' + this.attractions);
  }

  onSubmitCity() {
    console.log('Miejsca: ' + this.places);
  }

  ngOnInit() {
  }

}
