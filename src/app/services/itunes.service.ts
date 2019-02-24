import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Track, TrackResponse } from './track.model';
import * as moment from 'moment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ITunesService {

  private itunesUrl = 'https://itunes.apple.com/search';

  constructor(private http: HttpClient) { }

  /* GET artists whose name contains search term */
  searchArtists(term: string, fromDate?: Date, toDate?: Date): Observable<Track[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<TrackResponse>(`${this.itunesUrl}/?term=${term}&limit=200&attribute=artistTerm`).pipe(
      map(res => res.results.map(t => ({
        artworkUrl100: t.artworkUrl100,
        artistName: t.artistName,
        trackName: t.trackName,
        releaseDate: t.releaseDate,
        artistId: t.artistId
    })).filter(a => {
      const toDateMatch = toDate ? moment(a.releaseDate).isBefore(toDate) : true;
      const fromDateMatch = fromDate ? moment(a.releaseDate).isAfter(fromDate) : true;
      return toDateMatch && fromDateMatch;
    }).sort(this.dateSort)
    ),
      catchError(this.handleError<Track[]>('Error finding artist', []))
    );
  }

  private dateSort(a: Track, b: Track) {
    if (moment(a.releaseDate).isBefore(b.releaseDate)) return 1;
    if (moment(b.releaseDate).isBefore(a.releaseDate)) return -1;
    return 0;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
