import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  message: string;
  visible: boolean;
  constructor() { 
    this.message = '';
    this.visible = false;
  }

  showMessage(message: string){
    this.message = message;
    this.visible = true;
    this.waitToHide();

  }
  waitToHide() {
    setTimeout(() => { this.hideMessage();},2000);
  }
  hideMessage(){
    this.message = '';
    this.visible = false;
  }
}
