import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Round } from '../models/Round';

@Injectable()
export class RoundService {
  roundsCollection: AngularFirestoreCollection<Round>;
  rounds: Observable<Round[]>;
  roundDoc: AngularFirestoreDocument<Round>;

  constructor(public afs: AngularFirestore) {
    // this.rounds = this.afs.collection('items').valueChanges();

    this.roundsCollection = this.afs.collection('items', ref => ref.orderBy('title', 'asc'));

    this.rounds = this.afs.collection('items').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Round;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getRounds() {
    return this.rounds;
  }

  addRound(round: Round) {
    this.roundsCollection.add(round);
  }

  deleteRound(round: Round) {
    this.roundDoc = this.afs.doc(`items/${round.id}`);
    this.roundDoc.delete();
  }

  updateRound(round: Round) {
    this.roundDoc = this.afs.doc(`items/${round.id}`);
    this.roundDoc.update(round);
  }

}
