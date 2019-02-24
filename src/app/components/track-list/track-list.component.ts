import { Component, OnInit } from '@angular/core';
import { ITunesService } from '../../services/itunes.service';
import { Track } from '../../services/track.model';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  tracks: Track[] = [];
  dataLoaded = false;
  isLoading = false;

  constructor(private _itunesService: ITunesService) { }

  ngOnInit() {
  }

  searchArtist(query) {
    this.reset();
    this._itunesService.searchArtists(query.query, query.dateRange.fromDate, query.dateRange.toDate).subscribe(
      res => {
        this.tracks = res;
        this.dataLoaded = true;
        this.isLoading = false;
      }
    );
  }

  reset() {
    this.tracks = [];
    this.dataLoaded = false;
    this.isLoading = true;
  }

}
