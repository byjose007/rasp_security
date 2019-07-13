import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Observable<any[]>;
  constructor(private db: AngularFirestore) { }

  get_users() {
    console.log('hey');
  }

  get_user_uid(uid) {
    const docTramas = this.db.collection('users', ref => ref.where('uid', '==', uid));
    return docTramas.valueChanges();
  }

  update_user(uid, dataUser) {
    const userDoc = this.db.doc('users/' + uid);
    userDoc.update(dataUser);
    return userDoc.valueChanges();
  }
}
