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
    })//구분선~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    this.facebook.login(['email'])
    .then((loginResponse:FacebookLoginResponse) =>{
      //let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
      let facebookCredential = firebase.auth.FacebookAuthProvider
      .credential(loginResponse.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
      .then(succese =>{
        alert("Firebase success: "+JSON.stringify(succese));
      }).catch(ferr=>{
        alert("firebase errc")
      })
    }).catch(error=> {JSON.stringify(error)})*/
    var provider = new firebase.auth.FacebookAuthProvider();

    provider.addScope('email');

    firebase.auth().signInWithRedirect(provider);

    firebase.auth().getRedirectResult().then(function(authData) {
      console.log(authData);
    }).catch(function(error) {
      console.log(error);
    });
  }
  
  moveToPage(): void{
    this.navCtrl.push(SignupPage);
  }
}
