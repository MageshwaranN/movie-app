import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent, PageNotFoundComponent, DetailsComponent } from './components';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  { path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
