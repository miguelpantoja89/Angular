import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit {

  mails : any[];
  constructor() { 
    const mail1 = {
      title: "Title 1",
      body: `Body 1,Body 1,Body 1,Body 1,Body 1,Body 1,Body 1,Body 1,Body 1,Body 1,Body 1`,
      from: 'mail1@gmail.com',
      to: 'receiver@gmail.com',
      read: true,
    };
    const mail2 = {
      title: "Title 2",
      body: `Body 2,Body 2,Body 2,Body 1,Body 1,Body 1,Body 1,Body 1,Body 1,Body 1,Body 1`,
      from: 'mail2@gmail.com',
      to: 'receiver2@gmail.com',
      read: false,
    };
    this.mails = [];
    this.mails.push(mail1);
    this.mails.push(mail2);
  }

  ngOnInit(): void {
  }

}
