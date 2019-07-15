import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';

import { SearchApiService } from '../../services';
import { SearchResponse } from '../../interfaces/search-response';

@Component({
  selector: 'movie-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results: any[] = [];
  queryField: FormControl = new FormControl();
  constructor(private searchService: SearchApiService) { }

  ngOnInit() {
    this.queryField.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => this.searchService.search(query))
    )
    .subscribe((result: SearchResponse) => {
      console.log(result);
      if (result.Response === 'True') {
        return;
      } else {
        this.results = result.Search;
        console.log(this.results);
      }
    });
  }

}
