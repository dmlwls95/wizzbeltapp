import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings'
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { AdminPage } from '../admin/admin';
import { AngularFireAuth } from 'angularfire2/auth';
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
  item1 = [
    '주문목록 배송조회',
    '취소 및 반품 내역'
  ];
  item2 = [
    '배송지 변경',
    '회원 정보 변경'
  ];
  item3 = [
    '공지사항',
    '기타'    
  ];
  item4 = [
    '로그아웃'
  ]
  constructor(private toast: ToastController,public navCtrl: NavController, public navParams: NavParams,private afAuth:AngularFireAuth) {
  

    //****************************인피니티 스크롤************* */
    /*this.mainconArray =[
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
  ]; //밑으로 들어가는 메인 컨텐츠 어레이
    this.infiMain =[
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'},
      {'image':'https://dummyimage.com/400x600/ffffff/0011ff'}
    ]//추가 로딩 어레이
    for(let i =0; i<3; i++){
      this.mainconArray.push(this.mainconArray[this.maincons.length]);
    }
  }
  loadContents(event){
    console.log('loading contents started');

    setTimeout(() => {
      for(let i =0; i<7; i++){
        this.mainconArray.push(this.infiMain[this.maincons.length]);
      }
      console.log('loading contents ended');

      event.complete();

    },3500);
  }*/
//****************************인피니티 스크롤 끝************* */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyinfoPage');

    this.afAuth.auth.onAuthStateChanged(auth =>{
      if(!auth){
        console.log('loggedout');
        this.navCtrl.setRoot(LoginPage);
        this.toast.create({
          message: '로그인해주세요',
          duration: 2000,
          position: 'top'
        }).present();
      }
    })
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
  itemSelected(item: string){
    console.log("Selected Item", item);
  }
  signOut() {
    this.afAuth.auth.signOut();
  }
}
