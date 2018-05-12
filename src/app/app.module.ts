import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { routing } from "./app.routing";
import { oidcDefault } from "./oidc.config";

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { MessageListComponent } from './message-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    routing,
    oidcDefault
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
