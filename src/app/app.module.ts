import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailComponent } from './components/mail/mail.component';
import { MailListComponent } from './components/mail-list/mail-list.component';
import { NewMailComponent } from './components/new-mail/new-mail.component';
import { NoticeComponent } from './components/notice/notice.component';
import { InboxMailsComponent } from './views/inbox-mails/inbox-mails.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from './modules/material/material.module';

import {
  GoogleApiModule, 
  GoogleApiService, 
  GoogleAuthService, 
  NgGapiClientConfig, 
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from "ng-gapi";
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './menu/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SenderComponent } from './views/sender/sender.component';
import { MatSelect, MatSelectModule } from '@angular/material/select';


let gapiClientConfig: NgGapiClientConfig = {
  client_id: "345067761945-795frj5n6lums1e25bqr4pplhvejjnh4.apps.googleusercontent.com",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  ux_mode: "popup",
  fetch_basic_profile:true,
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/gmail.labels",
    "https://www.googleapis.com/auth/gmail.send",
    "https://www.googleapis.com/auth/gmail.readonly"
  ].join(" ")
};

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    MailListComponent,
    NewMailComponent,
    NoticeComponent,
    InboxMailsComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    SenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
