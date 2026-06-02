import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTab } from './completed-tab';

describe('CompletedTab', () => {
  let component: CompletedTab;
  let fixture: ComponentFixture<CompletedTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
