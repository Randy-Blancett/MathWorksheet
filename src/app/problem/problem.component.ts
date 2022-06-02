import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
  @Input() number1: number | undefined;
  @Input() number2: number | undefined;
  @Input() op: string = "-";
  constructor() { }

  ngOnInit(): void {
  }

}
