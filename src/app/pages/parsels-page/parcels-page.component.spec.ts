import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelsPageComponent } from './parsels-page.component';

describe('ParselsListComponent', () => {
  let component: ParcelsPageComponent;
  let fixture: ComponentFixture<ParcelsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParcelsPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
