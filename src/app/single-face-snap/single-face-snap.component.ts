import { Component, OnInit } from '@angular/core';
import {FaceSnap} from '../models/snap-face';
import {DatePipe, DecimalPipe, NgClass, NgStyle, TitleCasePipe,} from '@angular/common';
import {FaceSnapsService} from '../services/face-snaps.service';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone:true,
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe, RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
 faceSnap!: FaceSnap;

snapButtonText!:string;
userHasSnapped!: boolean;

constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {
}


ngOnInit() {
  this.prepareInterface();
  this.getFaceSnap();

  }

  //methode d'incrementation
 onSnap(){
  if(this.userHasSnapped){
    this.unSnap();
  }else{
    this.snap();
  }
 }
 unSnap(){
   this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
   this.snapButtonText="Snap!"
   this.userHasSnapped=false;
 }
 snap(){
  this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
  this.snapButtonText="Oh snaps!"
   this.userHasSnapped=true;
 }
  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);

  }
  private prepareInterface() {
    this.snapButtonText="Oh snaps!"
    this.userHasSnapped=true;
  }
}
