import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { routing } from "./app.routing";

import { AppComponent } from './app.component';

const config = {
  issuer: 'https://heidrick.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '{clientId}'
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    OktaAuthModule.initAuth(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
