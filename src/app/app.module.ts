import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { tvmazemxcheungModule } from 'tvmazemxcheung';
import { HeadermxcheungModule } from 'headermxcheung';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, tvmazemxcheungModule, HeadermxcheungModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
