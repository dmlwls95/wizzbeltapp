import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(private toast: ToastController, public navParams: NavParams, private view : ViewController, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    this.afAuth.auth.onAuthStateChanged(auth =>{
      if(!auth){
        console.log('로그인해야함');
        this.toast.create({
          message: '로그인해주세요',
          duration: 2000,
          position: 'top'
        }).present();
        this.view.dismiss();
      }
    })
  }
  closePay(){
    this.view.dismiss();
  }

}
