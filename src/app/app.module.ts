import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { tvmazemxcheungModule } from 'tvmazemxcheung';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, tvmazemxcheungModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
