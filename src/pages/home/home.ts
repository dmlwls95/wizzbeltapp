import { Component, ViewChild } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Content } from 'ionic-angular';
//import firebase from 'firebase';
import { FirebaseListObservable } from 'angularfire2/database-deprecated'
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseAuth } from '@firebase/auth-types';

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
  newItem = '';
  /*mainconArray: any =[];
  maincons = [];
  infiMain: any =[];*/
  
  /*private limit: number = 10;
  private userId: any;
  private postList: any;
  private lastId: any;
  private finishedLoading: boolean = false;*/

  constructor(public nvCtrl:NavController, public firebaseProvider: FirebaseProvider,private afAuth: AngularFireAuth) {
    this.slideItems = this.firebaseProvider.getslideItems();
    this.MonthtopItems = this.firebaseProvider.getMonthtopItems();
    this.cate1topItems = this.firebaseProvider.getcate1topItems();
    this.cate2topItems = this.firebaseProvider.getcate2topItems();

    this.tabBarElement =document.querySelector('.tabbar');



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
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
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
}
