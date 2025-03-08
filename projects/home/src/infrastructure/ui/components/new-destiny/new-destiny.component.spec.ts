import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDestinyComponent } from './new-destiny.component';

describe('NewDestinyComponent', () => {
  let component: NewDestinyComponent;
  let fixture: ComponentFixture<NewDestinyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDestinyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDestinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
