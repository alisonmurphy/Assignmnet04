import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerQuestionComponent } from './answer-question.component';

describe('AnswerQuestionComponent', () => {
  let component: AnswerQuestionComponent;
  let fixture: ComponentFixture<AnswerQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnswerQuestionComponent]
    });
    fixture = TestBed.createComponent(AnswerQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
