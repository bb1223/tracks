export class Track {
    artworkUrl100: string;
    artistName: string;
    trackName: string;
    releaseDate: Date;
    artistId: number;
}

export class TrackResponse {
    resultCount: number;
    results: Array<Track>;
}

export class DateRange {
    fromDate: Date;
    toDate: Date;
}