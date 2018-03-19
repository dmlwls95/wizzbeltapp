import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
 
@Injectable()
export class FirebaseProvider {
 
  constructor(public afd: AngularFireDatabase) { }
 
  getslideItems() {
    return this.afd.list('/mainItems/slide');
  }
 
  addslideItem(name) {
    this.afd.list('/mainItems/slide').push(name);
  }
 
  removeslideItem(id) {
    this.afd.list('/mainItems/slide').remove(id);
  }
//*************monthtop db입력 메소드 */
  getMonthtopItems() {
    return this.afd.list('/mainItems/Monthtop');
  }
 
  addMonthtopItem(name) {
    this.afd.list('/mainItems/Monthtop').push(name);
  }
 
  removeMonthtopItem(id) {
    this.afd.list('/mainItems/Monthtop').remove(id);
  }
}