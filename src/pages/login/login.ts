import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, App } from 'ionic-angular';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { SignupPage } from '../signup/signup';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook';
import { TabsPage } from '../tabs/tabs';
import { MyinfoPage } from '../myinfo/myinfo';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('password') password;
  @ViewChild('email') email;
  userData = null;

constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public facebook: Facebook,private toast: ToastController) {
  this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res));
  }
  async signInwithAngular(){
     const result = this.afAuth.auth.signInWithEmailAndPassword(this.email.value,this.password.value)
      .then(ress => {
        this.toast.create({
          message: 'SignIn done',
          duration: 3000,
          position: 'top'
        }).present();
        this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        this.navCtrl.setRoot(MyinfoPage);
      })
      .catch(error =>{
        this.toast.create({
          message: error,
          duration: 3000,
          position: 'top'
        }).present();
      })
    }


  signOut() {
    this.afAuth.auth.signOut();
  }
  
  moveToPage(): void{
    this.navCtrl.push(SignupPage);
  }
  backPage(){
    this.navCtrl.pop();
  }
register(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.email.value ,this.password.value)
    .then(data => {
      console.log('got data',data)
      this.toast.create({
        message: 'Signup done',
        duration: 3000,
        position: 'top'
      }).present();
    })
    .catch(error =>{
      console.log('got an err', error);
      this.toast.create({
        message: error,
        duration: 3000,
        position: 'top'
      }).present();
    });
    console.log('registerrrrr', this.email.value, this.password.value);
  }
  
}
