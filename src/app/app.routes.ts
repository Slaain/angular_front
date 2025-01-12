import { Routes } from '@angular/router';
import {FaceSnapComponent} from './face-snap/face-snap.component';
import {FaceSnapListComponent} from './face-snap-list/face-snap-list.component';
import {LandingPageComponent} from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: 'facesnaps', component:FaceSnapListComponent },
  { path: '', component: LandingPageComponent },
];
