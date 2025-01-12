import { Component, OnInit,Input } from '@angular/core';
import {FaceSnap} from '../models/snap-face';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone:true,
  imports: [NgStyle, NgClass ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

snapButtonText!:string;
userHasSnapped!: boolean;

ngOnInit() {

  this.snapButtonText="Oh snaps!"
  this.userHasSnapped=true;
  }

  //methode d'incrementation
  onAddSnap(): void {
    console.log('Avant clic:', this.userHasSnapped);
    if (this.userHasSnapped) {
      this.faceSnap.addSnap();
      this.snapButtonText = "Oh Snap";
      this.userHasSnapped = false;
    } else {
      this.faceSnap.removeSnap();
      this.snapButtonText = "Supprimer";
      this.userHasSnapped = true;
    }
    console.log('Après clic:', this.userHasSnapped);
  }

}
