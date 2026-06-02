import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstUpcomingTours } from './inst-upcoming-tours';

describe('InstUpcomingTours', () => {
  let component: InstUpcomingTours;
  let fixture: ComponentFixture<InstUpcomingTours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstUpcomingTours]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstUpcomingTours);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
