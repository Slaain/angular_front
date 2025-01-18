import { Routes } from '@angular/router';
import {FaceSnapComponent} from './face-snap/face-snap.component';
import {FaceSnapListComponent} from './face-snap-list/face-snap-list.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {SingleFaceSnapComponent} from './single-face-snap/single-face-snap.component';

export const routes: Routes = [
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
  { path: 'facesnaps', component:FaceSnapListComponent },
  { path: '', component: LandingPageComponent },

];
