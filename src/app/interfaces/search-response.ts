export interface SearchResponse {
    Response: string;
    Search: MovieInfo[];
    totalResults: string;
}

export interface MovieInfo {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}
