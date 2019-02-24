import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DateRange } from 'src/app/services/track.model';

@Component({
  selector: 'app-track-search',
  templateUrl: './track-search.component.html',
  styleUrls: ['./track-search.component.scss']
})
export class TrackSearchComponent implements OnInit {

  @Output() onSearch: EventEmitter<any> = new EventEmitter();

  dateRange: DateRange = {
    fromDate: null,
    toDate: null
  };
  term = '';
  constructor() { }

  search() {
    this.onSearch.emit({query: this.term, dateRange: this.dateRange});
  }
  ngOnInit() {
  }

}
