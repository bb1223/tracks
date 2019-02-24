import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../services/track.model';

@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.component.html',
  styleUrls: ['./track-detail.component.scss']
})
export class TrackDetailComponent implements OnInit {

  @Input() track: Track;

  constructor() { }

  ngOnInit() {
  }

}
