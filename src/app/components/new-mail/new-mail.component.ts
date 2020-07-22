import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-mail',
  templateUrl: './new-mail.component.html',
  styleUrls: ['./new-mail.component.scss']
})
export class NewMailComponent implements OnInit {
  newMail: FormGroup;
  submitted = false;
  @Input() mail: any;

  constructor(private formBuilder: FormBuilder) { }

  
  ngOnInit(): void {
    this.newMail = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required, Validators.minLength(10)]],
      to: ['', [Validators.required, Validators.email]],
    });
    
    if(this.mail != undefined){
      console.log("A",this.mail);
      this.newMail.patchValue({
        title: 'Re: '+ this.mail.title, 
        to: this.mail.from
      });
    }
  }

  get form() { return this.newMail.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.newMail.invalid) {
        return;
    }

    let mail = this.newMail.value;
    mail.read= false;
    mail.from= 'sender1@gmail.com';

    alert("Email Sent \nRemoving form");
    this.onReset();
}

onReset() {
    this.submitted = false;
    this.newMail.reset();
}
}
