import { Component, OnInit,Input } from '@angular/core';
import {FaceSnap} from '../models/snap-face';
import {DatePipe, DecimalPipe, NgClass, NgStyle, TitleCasePipe,} from '@angular/common';
import {FaceSnapsService} from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone:true,
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

snapButtonText!:string;
userHasSnapped!: boolean;

constructor(private faceSnapsService: FaceSnapsService) {
}


ngOnInit() {

  this.snapButtonText="Oh snaps!"
  this.userHasSnapped=true;
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

}
