import { Component, OnInit } from '@angular/core';
import {Problem} from '../problem'

@Component({
  selector: 'app-worksheet',
  templateUrl: './worksheet.component.html',
  styleUrls: ['./worksheet.component.css']
})
export class WorksheetComponent implements OnInit {
  title = "Worksheet Page"
  rows = [
    [
      new Problem(),
      new Problem(),
      new Problem()
    ], [
      new Problem(),
      new Problem(),
      new Problem()
    ]
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
