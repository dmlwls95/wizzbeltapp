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
  cate1topItems: FirebaseListObservable<any[]>;
  cate2topItems: FirebaseListObservable<any[]>;
  newItem = '';
  newMonthItme = '';
  newcate1Itme = '';
  newcate2Itme = '';
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.slideItems = this.firebaseProvider.getslideItems();
    this.MonthtopItems = this.firebaseProvider.getMonthtopItems();
    this.cate1topItems = this.firebaseProvider.getcate1topItems();
    this.cate2topItems = this.firebaseProvider.getcate2topItems();
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
    this.firebaseProvider.addMonthtopItem(this.newMonthItme);
  }

  removeMonthtopItem(id) {
    this.firebaseProvider.removeMonthtopItem(id);
  }
//***************monthtopEnd */

//***************cate1topStart */
addcate1topItem() {
  this.firebaseProvider.addcate1topItem(this.newcate1Itme);
}

removecate1topItem(id) {
  this.firebaseProvider.removecate1topItem(id);
}
//***************cate1topEnd */

//***************cate2topStart */
addcate2topItem() {
  this.firebaseProvider.addcate2topItem(this.newcate2Itme);
}

removecate2topItem(id) {
  this.firebaseProvider.removecate2topItem(id);
}
//***************cate2topEnd */




  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
  

}
