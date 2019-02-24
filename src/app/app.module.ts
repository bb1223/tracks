import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { TrackDetailComponent } from './components/track-detail/track-detail.component';
import { TrackSearchComponent } from './components/track-search/track-search.component';
import { ITunesService } from './services/itunes.service';
import { DaterangeComponent } from './components/daterange/daterange.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackListComponent,
    TrackDetailComponent,
    TrackSearchComponent,
    DaterangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ ITunesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
