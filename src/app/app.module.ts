import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailComponent } from './components/mail/mail.component';
import { MailListComponent } from './components/mail-list/mail-list.component';
import { NewMailComponent } from './components/new-mail/new-mail.component';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    MailListComponent,
    NewMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
