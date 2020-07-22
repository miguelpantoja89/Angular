import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxMailsComponent } from './inbox-mails.component';

describe('InboxMailsComponent', () => {
  let component: InboxMailsComponent;
  let fixture: ComponentFixture<InboxMailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxMailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxMailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
