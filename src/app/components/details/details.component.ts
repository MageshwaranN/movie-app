import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { SearchApiService } from '../../services';
import { DetailsResponse } from '../../interfaces';

@Component({
  selector: 'movie-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  result: DetailsResponse;
  routeParamsSubscription: Subscription;

  constructor(private searchService: SearchApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe(details => {

      if (!details.id) {
        this.router.navigate(['/search']);
      } else {
        this.getDetailsOfId(details.id);
      }
    });
  }

  getDetailsOfId(id) {
    this.searchService.details(id).subscribe((data: DetailsResponse) => {
      if (data.Response !== 'True') {
        this.router.navigate(['/search']);
      } else {
        this.result = data;
      }
    });
  }

  ngOnDestroy() {
    if (this.routeParamsSubscription) {
      this.routeParamsSubscription.unsubscribe();
    }
  }

}
