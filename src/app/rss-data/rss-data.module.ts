import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RssDataRoutingModule } from './rss-data-routing.module';
import { RssDataComponent } from './rss-data/rss-data.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [RssDataComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RssDataRoutingModule
  ]
})
export class RssDataModule { }
