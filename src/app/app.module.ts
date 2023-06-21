import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChooseAvatarViewComponent } from './choose-avatar-view/choose-avatar-view.component';
import { GuestChatViewComponent } from './guest-chat-view/guest-chat-view.component';
import { ModeratorViewComponent } from './moderator-view/moderator-view.component';
import { TherapistChatViewComponent } from './therapist-chat-view/therapist-chat-view.component';
import { WellcomeGuestViewComponent } from './wellcome-guest-view/wellcome-guest-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseAvatarViewComponent,
    GuestChatViewComponent,
    ModeratorViewComponent,
    TherapistChatViewComponent,
    WellcomeGuestViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
