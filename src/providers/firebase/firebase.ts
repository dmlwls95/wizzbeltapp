import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
 
@Injectable()
export class FirebaseProvider {
 
  constructor(public afd: AngularFireDatabase) { }
 
  getslideItems() {
    return this.afd.list('/mainItems/');
  }
 
  addslideItem(name) {
    this.afd.list('/mainItems/').push(name);
  }
 
  removeslideItem(id) {
    this.afd.list('/mainItems/').remove(id);
  }
}