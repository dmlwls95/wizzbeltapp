import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
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


  video: any = {
    url: 'https://www.youtube.com/embed/GWw8D81L85M',
    title: 'J-In'
  };
  trustedVideoUrl: SafeResourceUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams,private domSanitizer: DomSanitizer) {
  this.slideItems = navParams.get("slide");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemdetailPage');
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
  }

}
