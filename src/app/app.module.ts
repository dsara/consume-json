import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JsonDisplayComponent } from './json-display/json-display.component';
import { JsonFetcherService } from './json-fetcher.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    JsonDisplayComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [JsonFetcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
