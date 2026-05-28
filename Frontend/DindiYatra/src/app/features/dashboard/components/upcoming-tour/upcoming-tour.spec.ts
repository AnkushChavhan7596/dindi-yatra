import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTour } from './upcoming-tour';

describe('UpcomingTour', () => {
  let component: UpcomingTour;
  let fixture: ComponentFixture<UpcomingTour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingTour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingTour);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
