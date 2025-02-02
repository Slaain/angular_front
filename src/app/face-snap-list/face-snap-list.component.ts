import { Component, OnInit } from '@angular/core';
import {FaceSnap} from '../models/snap-face';
import {FaceSnapComponent} from '../face-snap/face-snap.component';
import {FaceSnapsService} from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap [];
 constructor(private faceSnapService: FaceSnapsService) { }

  ngOnInit() {
    this.faceSnaps = this.faceSnapService.getFaceSnaps();
  }

}
