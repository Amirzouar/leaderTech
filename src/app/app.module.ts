import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SponsorListModule } from './sponsor-list/sponsor-list.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SponsorListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
