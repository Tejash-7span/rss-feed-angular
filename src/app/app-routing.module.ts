import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'rss', 
    loadChildren : ()=> import('./rss-data/rss-data.module').then(m => m.RssDataModule)
  },
  {
    path: '', redirectTo: 'rss', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'rss', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
