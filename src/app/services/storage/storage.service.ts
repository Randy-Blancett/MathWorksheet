import { Injectable } from '@angular/core';
import { Settings } from '../settings/settings';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getSettings(): Settings {
    let data = localStorage.getItem("MathWorksheet_Settings");
    if (data == null)
      return { ProblemsPerPage: 12, MinAnswer: 1, MaxAnswer: 10 };
    return JSON.parse(data);
  }

  setSettings(settings: Settings) {
    localStorage.setItem("MathWorksheet_Settings", JSON.stringify(settings));
  }
}
