import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelCardComponent } from './parcel-card.component';

describe('ParcelCardComponent', () => {
  let component: ParcelCardComponent;
  let fixture: ComponentFixture<ParcelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParcelCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
