import { Component, OnInit } from '@angular/core';
import { Problem } from '../problem'

@Component({
  selector: 'app-worksheet',
  templateUrl: './worksheet.component.html',
  styleUrls: ['./worksheet.component.css']
})
export class WorksheetComponent implements OnInit {
  title = "Worksheet Page"
  private problemCount = 12;
  private maxAnswer = 10;
  private minAnswer = 1;

  rows: Problem[] = [];
  constructor() {
    let possibleAnswers: Map<number, boolean> = this.getAnswerQueue();
    let exists:string[]=[];
    for (let index = 0; index < this.problemCount; index++) {
      if (possibleAnswers.size < 1)
        possibleAnswers = this.getAnswerQueue();
      let prob = new Problem(possibleAnswers,exists, this.minAnswer, this.maxAnswer);
      this.rows.push(prob);
      exists.push(prob.getKey());
    }
  }

  ngOnInit(): void {
  }

  getAnswerQueue(): Map<number, boolean> {
    let possibleAnswers = new Map<number, boolean>();
    for (let i = this.minAnswer; i <= this.maxAnswer; i++) {
      possibleAnswers.set(i, true);
    }
    return possibleAnswers;
  }

}
