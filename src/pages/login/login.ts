import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { SignupPage } from '../signup/signup';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  fbLogin(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res:FacebookLoginResponse) => {
      this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)',[]).then(profile => {
        this.userData = {email :profile['email'], first_name : profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      })
    })
  }
  moveToPage(): void{
    this.navCtrl.push(SignupPage);
  }
}
