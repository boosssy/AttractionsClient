import {Component, OnInit} from '@angular/core';
import {MainSevice} from './sevice/MainSevice';
import {Attraction} from './model/Attraction';
import {Place} from './model/Place';
import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Kraina atrakcji';
  attractions: Attraction[];
  places: Place[];
  user: any;

  constructor(private socioAuthServ: AuthService, private mainService: MainSevice) {
  }

// Method to sign in with facebook.
  signIn(platform: string): void {
    platform = FacebookLoginProvider.PROVIDER_ID;
    this.socioAuthServ.signIn(platform).then(
      (response) => {
        console.log(platform + ' logged in user data is= ', response);
        this.user = response;
      }
    );
  }
  ngOnInit(): void {
    this.mainService.findAllAttractions().subscribe( data => {
      this.attractions = data;
    });
    this.mainService.findAllPlaces().subscribe( data => {
      this.places = data;
    });
  }
}
