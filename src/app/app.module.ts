import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorksheetComponent } from './worksheet/worksheet.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SettingsComponent } from './settings/settings.component';
import { ProblemComponent } from './problem/problem.component';

@NgModule({
  declarations: [
    AppComponent,
    WorksheetComponent,
    ToolbarComponent,
    SettingsComponent,
    ProblemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
