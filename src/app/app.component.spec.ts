import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { SharedModule } from './components/shared.module';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [SharedModule, RouterModule],
    }).compileComponents();л
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
