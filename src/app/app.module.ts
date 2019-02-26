import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ConiferHealthModule} from '../app/conifer-health/conifer-health.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConiferHealthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
