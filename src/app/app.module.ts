import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { StartingViewComponent } from './starting-view/starting-view.component';
import { OverviewAttractionsComponent } from './overview-attractions/overview-attractions.component';
import {FormsModule} from '@angular/forms';
import { OfferComponent } from './offer/offer.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';

const facebookoauthclientid = '797209834027503';
const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(facebookoauthclientid)
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    StartingViewComponent,
    OverviewAttractionsComponent,
    OfferComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule.initialize(config)
  ],

  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
