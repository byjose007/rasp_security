import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { CollectionReference } from '@angular/fire/firestore';
import {AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TramaService {
  tramas: Observable<any[]>;
  constructor(private db: AngularFirestore) { }

  get_tramas() {
    this.tramas = this.db.collection('tramas').valueChanges();
    console.log(this.tramas);
    return this.tramas;
  }
  get_trama(idSendor: string) {
    const docTramas = this.db.collection('tramas', ref => ref.where('sendor_id', '==', idSendor)
      .orderBy('date', 'desc').limit(3));
    return docTramas.valueChanges();
  }
  get_trama_zona(zonaTrama: string) {
    const docTramas = this.db.collection('tramas', ref => ref.where('zona', '==', zonaTrama)
      .orderBy('date', 'desc').limit(3));
    return docTramas.valueChanges();
  }
}
