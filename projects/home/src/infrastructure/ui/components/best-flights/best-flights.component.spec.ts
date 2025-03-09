import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestFlightsComponent } from './best-flights.component';

describe('BestFlightsComponent', () => {
  let component: BestFlightsComponent;
  let fixture: ComponentFixture<BestFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestFlightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
