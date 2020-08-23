import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackAlertComponent } from './feedback-alert/feedback-alert.component';
import { ClickCountComponent } from './click-count/click-count.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackAlertComponent,
    ClickCountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
