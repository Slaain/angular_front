import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/snap-face';
import {SnapType} from '../models/snap-type.type';


@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
 private faceSnaps: FaceSnap[] = [

  new FaceSnap(
  'Slaain le boss',
  'slaain le boss',
  'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg',
  new Date(),
  10
),
  new FaceSnap(
  'jennifer la plus belle ',
  'la plus belle',
  'https://gratisography.com/wp-content/uploads/2024/11/gratisography-fashion-tv-1170x780.jpg',
  new Date(),
  15,
).withlocation('Vitrolles city gang'),
  new FaceSnap(
  'Minou ? ou anakin minion ?',
  'le plus beau',
  'https://gratisography.com/wp-content/uploads/2024/10/gratisography-halloween-cat-1036x780.jpg',
  new Date(),
  1651561656544654684656544655461656
),]
  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps] ;
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }
}
