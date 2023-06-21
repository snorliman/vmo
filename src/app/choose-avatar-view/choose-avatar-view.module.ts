import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChooseAvatarViewComponent } from './choose-avatar-view.component';
import { ChooseAvatarViewRoutingModule } from './choose-avatar-view-routing.module';


@NgModule({
  declarations: [
    ChooseAvatarViewComponent
  ],
  imports: [
    BrowserModule,
    ChooseAvatarViewRoutingModule
  ],
  providers: [],
  bootstrap: [ChooseAvatarViewComponent]
})
export class ChooseAvatarViewModule { }