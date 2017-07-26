import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopSummaryComponent } from './develop-summary.component';

describe('DevelopSummaryComponent', () => {
  let component: DevelopSummaryComponent;
  let fixture: ComponentFixture<DevelopSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
