import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  slideItems: FirebaseListObservable<any[]>;
  MonthtopItems: FirebaseListObservable<any[]>;
  newItem = '';
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.slideItems = this.firebaseProvider.getslideItems();
    this.MonthtopItems = this.firebaseProvider.getMonthtopItems();
  }
  //************slide start */
  addslideItem() {
    this.firebaseProvider.addslideItem(this.newItem);
  }
 
  removeslideItem(id) {
    this.firebaseProvider.removeslideItem(id);
  }
//***************slideEnd */
//***************monthtopStart */
  addMonthtopItem() {
    this.firebaseProvider.addMonthtopItem(this.newItem);
  }

  removeMonthtopItem(id) {
    this.firebaseProvider.removeMonthtopItem(id);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
  

}
