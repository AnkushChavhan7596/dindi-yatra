import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionCard } from './institution-card';

describe('InstitutionCard', () => {
  let component: InstitutionCard;
  let fixture: ComponentFixture<InstitutionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
