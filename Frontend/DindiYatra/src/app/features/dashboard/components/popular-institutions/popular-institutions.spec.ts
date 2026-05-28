import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularInstitutions } from './popular-institutions';

describe('PopularInstitutions', () => {
  let component: PopularInstitutions;
  let fixture: ComponentFixture<PopularInstitutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularInstitutions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularInstitutions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
