import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstTourCard } from './inst-tour-card';

describe('InstTourCard', () => {
  let component: InstTourCard;
  let fixture: ComponentFixture<InstTourCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstTourCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstTourCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
