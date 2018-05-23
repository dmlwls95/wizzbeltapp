import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

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
  //@ViewChild('username') username;
  //@ViewChild('address') address;
  //@ViewChild('callnum') callnum;
  userId ='';
  username = '';
  address = '';
  callnum ='';


  constructor(public firebaseProvider: FirebaseProvider,private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,private toast: ToastController) {
    
    
  }

  register(){
    this.fire.auth.createUserWithEmailAndPassword(this.email.value ,this.password.value)
    .then(data => {
      console.log('got data',data)
      this.toast.create({
        message: '회원가입 완료',
        duration: 2000,
        position: 'top'
      }).present();
      
      this.userId = this.fire.auth.currentUser.uid;
      this.firebaseProvider.addUserprofile(this.username,this.address,this.callnum,this.userId);
      this.navCtrl.push(LoginPage)
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
