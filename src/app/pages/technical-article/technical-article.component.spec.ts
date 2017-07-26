import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalArticleComponent } from './technical-article.component';

describe('TechnicalArticleComponent', () => {
  let component: TechnicalArticleComponent;
  let fixture: ComponentFixture<TechnicalArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
