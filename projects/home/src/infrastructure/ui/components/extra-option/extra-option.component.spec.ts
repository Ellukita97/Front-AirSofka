import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraOptionComponent } from './extra-option.component';

describe('ExtraOptionComponent', () => {
  let component: ExtraOptionComponent;
  let fixture: ComponentFixture<ExtraOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
