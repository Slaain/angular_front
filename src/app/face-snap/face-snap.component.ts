import { Component, OnInit,Input } from '@angular/core';
import {FaceSnap} from '../models/snap-face';
import {DatePipe, DecimalPipe, NgClass, NgStyle, TitleCasePipe,} from '@angular/common';
import {FaceSnapsService} from '../services/face-snaps.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone:true,
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent  {
  @Input() faceSnap!: FaceSnap;

constructor(private router: Router) {}

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }


}
