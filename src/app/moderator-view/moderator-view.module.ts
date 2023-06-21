import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModeratorViewRoutingModule } from './moderator-view-routing.module';
import { ModeratorViewComponent } from './moderator-view.component';



@NgModule({
  declarations: [
    ModeratorViewComponent
  ],
  imports: [
    BrowserModule,
    ModeratorViewRoutingModule
  ],
  providers: [],
  bootstrap: [ModeratorViewComponent]
})
export class TherapistChatViewModule { }