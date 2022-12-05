import { Component, Input, OnInit } from '@angular/core';
import { Operation } from '../problem';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
  @Input() number1: number = 0;
  @Input() number2: number = 0;
  @Input() declare op: Operation;
  constructor() { }

  ngOnInit(): void {
  }

  public getAnswer(): number {
    switch (this.op) {
      case Operation.ADD:
        return this.number1 + this.number2;
      case Operation.SUBTRACT:
        return this.number1 - this.number2;
      case Operation.MULTIPLY:
        return this.number1 * this.number2;
      case Operation.DIVIDE:
        return this.number1 / this.number2;
    }
  }

}
