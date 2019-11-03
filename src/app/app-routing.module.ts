import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from '../app/components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { MoviesComponent } from './components/movies/recent-movies/movies.component';
import { BookmarkedMoviesComponent } from './components/movies/bookmarked-movies/bookmarked-movies.component';
import { UpcomingMoviesComponent } from './components/movies/upcoming-movies/upcoming-movies.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'recent-movies',
    component: MoviesComponent
  },
  {
    path: 'bookmarked-movies',
    component: BookmarkedMoviesComponent
  },
  {
    path: 'upcoming-movies',
    component: UpcomingMoviesComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
