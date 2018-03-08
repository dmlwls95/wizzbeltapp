import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { SignupPage } from '../signup/signup';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook'
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
constructor(public navCtrl: NavController, public navParams: NavParams,public facebook: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 /* fbLogin(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res:FacebookLoginResponse) => {
      this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)',[]).then(profile => {
        this.userData = {email :profile['email'], first_name : profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      })
    })
  }*/

  login(){
    /*let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(()=>{
      firebase.auth().getRedirectResult().then((result)=>{
        alert(JSON.stringify(result));
      }).catch(function(error){
        alert(JSON.stringify(error))
      });
    })*/
    this.facebook.login(['email'])
    .then((loginResponse) =>{
      //let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
      const facebookCredential = firebase.auth.FacebookAuthProvider
      .credential(loginResponse.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
      .then(info =>{
        alert("Firebase success: ")
      }).catch(ferr=>{
        alert("firebase errc")
      })
    }).catch(error=> {JSON.stringify(error)})
  }
  moveToPage(): void{
    this.navCtrl.push(SignupPage);
  }
}
