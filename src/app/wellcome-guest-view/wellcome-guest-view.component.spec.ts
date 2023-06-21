import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomeGuestViewComponent } from './wellcome-guest-view.component';

describe('WellcomeGuestViewComponent', () => {
  let component: WellcomeGuestViewComponent;
  let fixture: ComponentFixture<WellcomeGuestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellcomeGuestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellcomeGuestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
