import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { tvmazemxcheungModule } from 'tvmazemxcheung';
import { HeadermxcheungModule } from 'headermxcheung';
import { FootermxcheungModule } from 'footermxcheung';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, tvmazemxcheungModule, HeadermxcheungModule, FootermxcheungModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
