import { Component, OnInit } from '@angular/core';
import { Problem,Operation } from '../problem'
import { Settings } from '../services/settings/settings';
import { SettingsService } from '../services/settings/settings.service';

@Component({
  selector: 'app-worksheet',
  templateUrl: './worksheet.component.html',
  styleUrls: ['./worksheet.component.css']
})
export class WorksheetComponent implements OnInit {
  title = "Worksheet Page"
  declare private settings: Settings;

  rows: Problem[] = [];
  constructor(private settingsService: SettingsService) {
    this.settings = this.settingsService.getSettings();
  }

  ngOnInit(): void {
    let possibleAnswers: Map<number, boolean> = this.getAnswerQueue();
    let exists: string[] = [];
    for (let index = 0; index < this.settings.ProblemsPerPage; index++) {
      if (possibleAnswers.size < 1)
        possibleAnswers = this.getAnswerQueue();
      let prob = new Problem(possibleAnswers, exists, Operation.SUBTRACT,this.settings.MinAnswer, this.settings.MaxAnswer);
      this.rows.push(prob);
      exists.push(prob.getKey());
    }
  }

  getAnswerQueue(): Map<number, boolean> {
    let possibleAnswers = new Map<number, boolean>();
    for (let i = this.settings.MinAnswer; i <= this.settings.MaxAnswer; i++) {
      possibleAnswers.set(i, true);
    }
    return possibleAnswers;
  }

}
