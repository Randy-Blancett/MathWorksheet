import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
  @Input() number1: number =0;
  @Input() number2: number =0;
  @Input() op: string = "-";
  constructor() { }

  ngOnInit(): void {
  }

  public getAnswer():number{
    return this.number1+this.number2;
  }

}
