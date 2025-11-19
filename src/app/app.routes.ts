import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '' }
];
