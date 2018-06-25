import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { PaymentPage } from '../payment/payment';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-itemdetail',
  templateUrl: 'itemdetail.html',
})
export class ItemdetailPage {
  //slideItems: FirebaseListObservable<any[]>;
  public slideItems : Array<any> =[];
  MonthtopItems: FirebaseListObservable<any[]>;


  video: any = {
    url: 'https://www.youtube.com/embed/GWw8D81L85M',
    title: 'J-In'
  };
  trustedVideoUrl: SafeResourceUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams,private domSanitizer: DomSanitizer, private modal: ModalController) {
  this.slideItems.push(navParams.get("slide"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemdetailPage');
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.slideItems[0].youtubeurl);
  }
  
  goPayment(){
    const myModal = this.modal.create('PaymentPage', {payinfo : this.slideItems})

    myModal.present();
  }

}
