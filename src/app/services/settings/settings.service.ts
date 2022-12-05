import { Injectable } from '@angular/core';
import { Operation } from 'src/app/problem';
import { Settings } from './settings';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getSettings(): Settings {
    let data = localStorage.getItem("MathWorksheet_Settings");
    if (data == null)
      return {
        ProblemsPerPage: 12, MaxAnswer: 10, MinAnswer: 1,Operations: new Set([Operation.ADD,Operation.SUBTRACT])
      };
    return JSON.parse(data);
  }

  setSettings(settings: Settings) {
    localStorage.setItem("MathWorksheet_Settings", JSON.stringify(settings));
  }
}
