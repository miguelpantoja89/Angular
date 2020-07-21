import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  mail:any;
  constructor() { 
    this.mail = {
      title:"Simple Title",
      body: 'Sample body',
      from: 'sample@gmail.com',
      to: 'other@gmail.com'
    }
  }

  ngOnInit(): void {
  }

}
