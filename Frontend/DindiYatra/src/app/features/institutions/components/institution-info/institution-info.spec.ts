import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionInfo } from './institution-info';

describe('InstitutionInfo', () => {
  let component: InstitutionInfo;
  let fixture: ComponentFixture<InstitutionInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
