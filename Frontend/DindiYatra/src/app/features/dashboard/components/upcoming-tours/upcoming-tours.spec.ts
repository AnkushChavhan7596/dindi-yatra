import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTours } from './upcoming-tours';

describe('UpcomingTours', () => {
  let component: UpcomingTours;
  let fixture: ComponentFixture<UpcomingTours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingTours]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingTours);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
