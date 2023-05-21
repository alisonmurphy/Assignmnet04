import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.css']
})
export class PostQuestionComponent {
  question: Question = {
    title: '',
    description: ''
  };

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.question.title && this.question.description) {
      this.questionService.addQuestion(this.question).subscribe(() => {
        this.router.navigate(['/questions']);
      });
    }
  }
}
