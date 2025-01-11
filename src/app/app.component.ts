import {Component, OnInit} from '@angular/core';
import {FaceSnapComponent} from './face-snap/face-snap.component';
import {FaceSnap} from './models/snap-face';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ FaceSnapComponent], //importer les dépendences
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  mySnap!:FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap= new FaceSnap(
    "Slaain",
      "slaain le boss",
      'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg',
      new Date(),
      10


    );
    this.myOtherSnap= new FaceSnap(
      'jennifer',
      'la plus belle',
      'https://gratisography.com/wp-content/uploads/2024/11/gratisography-fashion-tv-1170x780.jpg',
      new Date(),
      15
    );
    this.myLastSnap= new FaceSnap(
      'Minou',
      'le plus beau',
      'https://gratisography.com/wp-content/uploads/2024/10/gratisography-halloween-cat-1036x780.jpg',
      new Date(),
      1651561656544654684656544655461656
    )
  }
}

