import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxMailsComponent } from './views/inbox-mails/inbox-mails.component';
import { HomeComponent } from './views/home/home.component';
import { SenderComponent } from './views/sender/sender.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'mails', component: InboxMailsComponent },
{path: 'new-mail',component: SenderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
