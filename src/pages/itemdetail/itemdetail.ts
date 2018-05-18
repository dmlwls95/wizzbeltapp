import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

/**
 * Generated class for the ItemdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itemdetail',
  templateUrl: 'itemdetail.html',
})
export class ItemdetailPage {
  slideItems: FirebaseListObservable<any[]>;
  MonthtopItems: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.slideItems = navParams.get("slide");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemdetailPage');
  }

}
