// génère une instance du component pour chaque FaceSnap, et injecte ce FaceSnap à cette instance.

import {SnapType} from './snap-type.type';

export class FaceSnap {
id: string;

  location?: string;
  //? marque un objet optionnel
  constructor(public title: string,
              public description:string,
              public imageUrl:string,
              public createdAt:Date,
              public snaps: number,
              ) {
    this.id = crypto.randomUUID().substring(0, 8);
  }

  addSnap(): void {
    this.snaps++
  }
  removeSnap(): void {
    this.snaps--;
  }
  snap(snapType: SnapType){
    if (snapType === 'snap') {
      this.addSnap();
    } else if (snapType === 'unsnap') {
      this.removeSnap();
    }
  }
  setLocation(location: string): void {
    this.location = location;
  }

  withlocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }
}
