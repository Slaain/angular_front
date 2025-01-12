// génère une instance du component pour chaque FaceSnap, et injecte ce FaceSnap à cette instance.

export class FaceSnap {

  location?: string;
  //? marque un objet optionnel
  constructor(public title: string,
              public description:string,
              public imageUrl:string,
              public createdAt:Date,
              public snaps: number,
              ) {}

  addSnap(): void {
    this.snaps++
  }
  removeSnap(): void {
    this.snaps--;
  }
  setLocation(location: string): void {
    this.location = location;
  }
}
