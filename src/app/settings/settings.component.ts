import { Component, OnInit } from '@angular/core';
import { Operation } from '../problem';
import { Settings } from '../services/settings/settings';
import { SettingsService } from '../services/settings/settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    declare settings: Settings;
    public Operation = Operation;
    declare showAdd: boolean;
    declare showSub: boolean;
    constructor(private settingsService: SettingsService) { }


    storeSettings() {
        this.settings.Operations = new Set<Operation>();
        if (this.showAdd)
            this.settings.Operations.add(Operation.ADD);
        if (this.showSub)
        this.settings.Operations.add(Operation.SUBTRACT);
        this.settingsService.setSettings(this.settings);
        console.log(this.settings);
    }

    updateOperations(op: Operation, $event: boolean) {
        console.log(op);
        console.log($event);
        // this.settingsService.setSettings(this.settings);
        console.log(this.settings);
    }

    ngOnInit(): void {
        let localSettings = this.settingsService.getSettings();
        if (localSettings != null)
            this.settings = localSettings;
        console.log(this.settings.Operations)
        for (const op of this.settings.Operations) {
            console.log(op);
        }
    }

}
