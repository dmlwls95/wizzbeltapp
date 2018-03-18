import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings'
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { AdminPage } from '../admin/admin';
/**
 * Generated class for the MyinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myinfo',
  templateUrl: 'myinfo.html',
})
export class MyinfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyinfoPage');
  }
  menu(){
    this.navCtrl.push(SettingsPage)
  }
  openLogin(){
    this.navCtrl.push(LoginPage)
  }
  openSignup(){
    this.navCtrl.push(SignupPage)
  }
  admin(){
    this.navCtrl.push(AdminPage)
  }
}
