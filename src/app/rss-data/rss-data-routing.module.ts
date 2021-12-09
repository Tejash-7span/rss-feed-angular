import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RssDataComponent } from './rss-data/rss-data.component';


const routes: Routes = [
  {
    path: '',
    component: RssDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RssDataRoutingModule { }
