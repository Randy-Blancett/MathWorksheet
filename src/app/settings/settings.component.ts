import { Component, OnInit } from '@angular/core';
import { Settings,Operations } from '../services/settings/settings';
import { SettingsService } from '../services/settings/settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    declare settings: Settings;
    constructor(private settingsService: SettingsService) { }

    storeSettings() {
        this.settingsService.setSettings(this.settings);
    }

    ngOnInit(): void {
        let localSettings = this.settingsService.getSettings();
        if (localSettings != null)
            this.settings = localSettings;
    }

}
