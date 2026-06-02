import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTab } from './upcoming-tab';

describe('UpcomingTab', () => {
  let component: UpcomingTab;
  let fixture: ComponentFixture<UpcomingTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
