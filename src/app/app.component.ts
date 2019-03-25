import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Show, tvmazemxcheungService } from 'tvmazemxcheung';
import { HeadermxcheungComponent } from 'headermxcheung';
import { FootermxcheungComponent } from 'footermxcheung';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show$: Observable<Show>;
  showId = 353;

  constructor(private tvmazemxcheung: tvmazemxcheungService) {
    this.show$ = this.tvmazemxcheung.getShow(this.showId);
  }
}
