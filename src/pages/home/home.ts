import { Component, ViewChild } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Content } from 'ionic-angular';
//import firebase from 'firebase';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated'
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseAuth } from '@firebase/auth-types';
import * as firebase from 'firebase/app';
import { ItemdetailPage } from '../itemdetail/itemdetail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FirebaseProvider]
})
export class HomePage {
  @ViewChild("contentRef") contentHandle: Content;
  monthTop: any = [];
  cate1Top: any =[];
  cate2Top: any =[];
  tabBarElement: any;
  splash =true;
  private tabBarHeight;
  private topOrBottom:string;
  private contentBox;

  slideItems: FirebaseListObservable<any[]>;
  MonthtopItems: FirebaseListObservable<any[]>;
  cate1topItems: FirebaseListObservable<any[]>;
  cate2topItems: FirebaseListObservable<any[]>;
  testItems: FirebaseListObservable<any[]>;
  newItem = '';

  constructor(public nvCtrl:NavController, public firebaseProvider: FirebaseProvider,private afAuth: AngularFireAuth) {
 

    this.slideItems = this.firebaseProvider.getslideItems();
    this.MonthtopItems = this.firebaseProvider.getMonthtopItems();
    this.cate1topItems = this.firebaseProvider.getcate1topItems();
    this.cate2topItems = this.firebaseProvider.getcate2topItems();
    
    this.tabBarElement =document.querySelector('.tabbar');

    this.testItems = this.firebaseProvider.gettestitem('PixxaDev');

  }
  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
    //###############################################//
    
  }
  ionViewDidEnter() {
    this.topOrBottom=this.contentHandle._tabsPlacement;
    this.contentBox=document.querySelector(".scroll-content")['style'];
  
    if (this.topOrBottom == "top") {
      this.tabBarHeight = this.contentBox.marginTop;
    } else if (this.topOrBottom == "bottom") {
      this.tabBarHeight = this.contentBox.marginBottom;
    }
  }
 
  scrollingFun(e) {
    if (e.scrollTop > this.contentHandle.getContentDimensions().contentHeight) {
      document.querySelector(".tabbar")['style'].display = 'none';
      if (this.topOrBottom == "top") {
        this.contentBox.marginTop = 0;
      } else if (this.topOrBottom == "bottom") {
        this.contentBox.marginBottom = 0;
      }
 
    } else {
      document.querySelector(".tabbar")['style'].display = 'flex';
      if (this.topOrBottom == "top") {
        this.contentBox.marginTop = this.tabBarHeight;
      } else if (this.topOrBottom == "bottom") {
        this.contentBox.marginBottom = this.tabBarHeight;
      }
 
    }//if else
  }//scrollingFun
  addslideItem() {
    this.firebaseProvider.addslideItem(this.newItem);
  }
 
  removeslideItem(id) {
    this.firebaseProvider.removeslideItem(id);
  }

  moveToDetail(id){
    this.nvCtrl.push(ItemdetailPage, {
      slide : id
    });
  }
}
