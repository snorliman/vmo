import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestChatViewComponent } from './guest-chat-view.component';

describe('GuestChatViewComponent', () => {
  let component: GuestChatViewComponent;
  let fixture: ComponentFixture<GuestChatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestChatViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestChatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
