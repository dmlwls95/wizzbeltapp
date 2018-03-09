import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  @ViewChild('password') password;
  @ViewChild('email') email;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  
  }

  register(){
    this.fire.auth.createUserWithEmailAndPassword(this.email.value ,this.password.value)
    .then(data => {
      console.log('got data',data)
    })
    .catch(error =>{
      console.log('got an err', error);
    });
    console.log('registerrrrr', this.email.value, this.password.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  movetoPage(){
    this.navCtrl.pop();
  }
}
