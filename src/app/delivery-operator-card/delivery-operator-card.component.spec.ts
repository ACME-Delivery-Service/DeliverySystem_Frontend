import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryOperatorCardComponent } from './delivery-operator-card.component';

describe('DeliveryOperatorCardComponent', () => {
  let component: DeliveryOperatorCardComponent;
  let fixture: ComponentFixture<DeliveryOperatorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryOperatorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryOperatorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
