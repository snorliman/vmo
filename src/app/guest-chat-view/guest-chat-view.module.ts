import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GuestChatViewRoutingModule } from './guest-chat-view-routing.module';
import { GuestChatViewComponent } from './guest-chat-view.component';



@NgModule({
  declarations: [
    GuestChatViewComponent
  ],
  imports: [
    BrowserModule,
    GuestChatViewRoutingModule
  ],
  providers: [],
  bootstrap: [GuestChatViewComponent]
})
export class GuestChatViewViewModule { }