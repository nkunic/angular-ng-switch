import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SwitchContentComponent } from './switch-content/switch-content.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SwitchContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
