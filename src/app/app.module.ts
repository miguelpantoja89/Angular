import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailComponent } from './components/mail/mail.component';
import { MailListComponent } from './components/mail-list/mail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    MailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
