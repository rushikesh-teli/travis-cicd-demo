import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Show, tvmazemxcheungService } from 'tvmazemxcheung';

@Component({
  selector: 'app-root',
  template: `
    <tm-poster [showId]="337"></tm-poster>
    <pre>{{ show$ | async | json }}</pre>
  `
})
export class AppComponent {
  show$: Observable<Show>;

  constructor(private tvmazemxcheung: tvmazemxcheungService) {
    this.show$ = this.tvmazemxcheung.getShow(336);
  }
}
