import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackListComponent } from './components/track-list/track-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/tracks', pathMatch: 'full' },
  { path: 'tracks', component: TrackListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

