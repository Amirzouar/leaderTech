import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';


import { SponsorListComponent } from './sponsor-list.component';
import { SponsorListService } from './sponsor-list.service';


@NgModule({
  declarations: [
    SponsorListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  exports: [SponsorListComponent],
  providers: [SponsorListService]
})
export class SponsorListModule { }
