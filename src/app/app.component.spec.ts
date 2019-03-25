import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { tvmazemxcheungModule } from 'tvmazemxcheung';
import { HeadermxcheungModule } from 'headermxcheung';
import { FootermxcheungModule } from 'footermxcheung';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [tvmazemxcheungModule,
                HeadermxcheungModule,
                FootermxcheungModule],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
