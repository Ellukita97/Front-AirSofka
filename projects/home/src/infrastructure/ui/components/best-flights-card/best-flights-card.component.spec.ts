import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestFlightsCardComponent } from './best-flights-card.component';

describe('BestFlightsCardComponent', () => {
  let component: BestFlightsCardComponent;
  let fixture: ComponentFixture<BestFlightsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestFlightsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestFlightsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
