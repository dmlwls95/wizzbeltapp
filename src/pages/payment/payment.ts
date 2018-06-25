import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated'
import { FirebaseProvider } from '../../providers/firebase/firebase';


@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  userId ='';
  public brandname : string = '';
  public productname : string = '';
  
  public payinfo : Array<any> =[];
  public pay: Array<any> =[];

  paydata: FirebaseListObservable<any[]>;
  

  constructor(private toast: ToastController, public navParams: NavParams, private view : ViewController, private afAuth: AngularFireAuth, public firebaseProvider: FirebaseProvider) {
    
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

  makePay(){
    let payinfo = this.navParams.get('payinfo')
    let brandname = payinfo[0].brandname;
    let productname = payinfo[0].productname;
    console.log('1',brandname,productname);
    this.userId = this.afAuth.auth.currentUser.uid;
    this.paydata = this.firebaseProvider.getUserprofile(this.userId);
    this.paydata.$ref.once('value', snapshot =>{
      this.pay =[];
      if(snapshot.val()){
        var tempUser = snapshot.val();
        for(var key in tempUser){
          let singleProduct = {
            address: tempUser[key].address,
            callnum: tempUser[key].callnum,
            username: tempUser[key].username
          };
          this.pay.push(singleProduct);
        }
      }
      //console.log(this.pay[0].username);
      console.log('2',brandname,productname);
      this.firebaseProvider.addPayment(this.pay[0].username,this.pay[0].address,this.pay[0].callnum,productname,this.userId,brandname);
    })
    //console.log(this.pay)
    this.toast.create({
      message: '결제완료',
      duration: 2000,
      position: 'top'
    }).present();
    this.view.dismiss();
  }

}
