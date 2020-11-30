import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LegumeComponent } from './legume/legume.component';
import { ListlegumesComponent } from './listlegumes/listlegumes.component';

@NgModule({
  declarations: [
    AppComponent,
    LegumeComponent,
    ListlegumesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
