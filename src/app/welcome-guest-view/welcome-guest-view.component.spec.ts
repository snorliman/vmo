import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeGuestViewComponent } from './welcome-guest-view.component';


describe('WelcomeGuestViewComponent', () => {
  let component: WelcomeGuestViewComponent;
  let fixture: ComponentFixture<WelcomeGuestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeGuestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeGuestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
