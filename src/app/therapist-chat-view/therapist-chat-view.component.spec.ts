import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistChatViewComponent } from './therapist-chat-view.component';

describe('TherapistChatViewComponent', () => {
  let component: TherapistChatViewComponent;
  let fixture: ComponentFixture<TherapistChatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistChatViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistChatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
