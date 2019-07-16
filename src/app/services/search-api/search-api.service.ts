import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {

  private apiKey = `6c3a2d45`;
  baseUrl = `http://www.omdbapi.com`;

  constructor(private http: HttpClient) { }

  search(searchQuery: string) {

    let params = new HttpParams();

    params = params.append('s', searchQuery);
    params = params.append('apiKey', this.apiKey);

    return this.http.get(this.baseUrl, { params });
  }

  details(id: string) {

    let params = new HttpParams();

    params = params.append('i', id);
    params = params.append('apiKey', this.apiKey);

    return this.http.get(this.baseUrl, { params });
  }
}
