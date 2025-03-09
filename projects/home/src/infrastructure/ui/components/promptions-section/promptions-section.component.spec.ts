import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptionsSectionComponent } from './promptions-section.component';

describe('PromptionsSectionComponent', () => {
  let component: PromptionsSectionComponent;
  let fixture: ComponentFixture<PromptionsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptionsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptionsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
