import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptionsCardComponent } from './promptions-card.component';

describe('PromptionsCardComponent', () => {
  let component: PromptionsCardComponent;
  let fixture: ComponentFixture<PromptionsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptionsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
