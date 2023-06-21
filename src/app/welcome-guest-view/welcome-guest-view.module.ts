import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WelcomeGuestViewRoutingModule } from './welcome-guest-view-routnig.-module';
import { WelcomeGuestViewComponent } from './welcome-guest-view.component';



@NgModule({
  declarations: [
    WelcomeGuestViewComponent
  ],
  imports: [
    BrowserModule,
    WelcomeGuestViewRoutingModule
  ],
  providers: [],
  bootstrap: [WelcomeGuestViewComponent]
})
export class WelcomeGuestViewModule { }