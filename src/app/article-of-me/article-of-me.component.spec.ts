import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleOfMeComponent } from './article-of-me.component';

describe('ArticleOfMeComponent', () => {
  let component: ArticleOfMeComponent;
  let fixture: ComponentFixture<ArticleOfMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleOfMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleOfMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
