import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorksheetComponent } from './worksheet/worksheet.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'worksheet', component: WorksheetComponent },
  { path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
