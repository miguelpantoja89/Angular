import { Component, OnInit } from '@angular/core';
import { NoticeService } from "src/app/services/notice.service";
@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  
  constructor(public serviceNotice: NoticeService) { 
   
  }

  ngOnInit(): void {
  }

  
}
