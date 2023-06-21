import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAvatarViewComponent } from './choose-avatar-view.component';

describe('ChooseAvatarViewComponent', () => {
  let component: ChooseAvatarViewComponent;
  let fixture: ComponentFixture<ChooseAvatarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseAvatarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseAvatarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
