import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TherapistChatViewComponent } from './therapist-chat-view.component';
import { TherapistChatViewRoutingModule } from './therapist-chat-view-routing.module';



@NgModule({
  declarations: [
    TherapistChatViewComponent
  ],
  imports: [
    BrowserModule,
    TherapistChatViewRoutingModule
  ],
  providers: [],
  bootstrap: [TherapistChatViewComponent]
})
export class TherapistChatViewModule { }