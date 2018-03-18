import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
 
@Injectable()
export class FirebaseProvider {
 
  constructor(public afd: AngularFireDatabase) { }
 
  getShoppingItems() {
    return this.afd.list('/mainItems/');
  }
 
  addItem(name) {
    this.afd.list('/mainItems/').push(name);
  }
 
  removeItem(id) {
    this.afd.list('/mainItems/').remove(id);
  }
}