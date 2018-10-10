import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParselsListComponent } from './parsels-list.component';

describe('ParselsListComponent', () => {
  let component: ParselsListComponent;
  let fixture: ComponentFixture<ParselsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParselsListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParselsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
