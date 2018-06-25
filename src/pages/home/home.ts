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


  tops: FirebaseListObservable<any[]>;
  newItem = '';

  public items: Array<any> = [];
  
  constructor(public nvCtrl:NavController, public firebaseProvider: FirebaseProvider,private afAuth: AngularFireAuth) {
 

    this.slideItems = this.firebaseProvider.getslideItems();
    this.MonthtopItems = this.firebaseProvider.getMonthtopItems();
    this.cate1topItems = this.firebaseProvider.getcate1topItems();
    this.cate2topItems = this.firebaseProvider.getcate2topItems();
    
    this.tabBarElement =document.querySelector('.tabbar');

    this.testItems = this.firebaseProvider.gettestitem('PixxaDev'); 
    
    

    this.testItems.$ref.once('value', snapshot =>{
      this.items =[];
      if(snapshot.val()){
        var tempProducts = snapshot.val();
        for(var key in tempProducts){
          let singleProduct = {
            productname:key,
            agreement : tempProducts[key].D00_agreement,
            requestdate : tempProducts[key].D00_request_date,
            brandname : tempProducts[key].D01_brand_name,
            itemname : tempProducts[key].D02_item_name,
            maincontents : tempProducts[key].D03_main_contents,
            notice : tempProducts[key].D04_notice_order,
            infofile1 : tempProducts[key].D05_info_file1,
            infofile2 : tempProducts[key].D06_info_file2,
            infofile3 : tempProducts[key].D07_info_file3,
            supplyprice : tempProducts[key].D08_supply_price,
            customerprice : tempProducts[key].D09_customer_price,
            itemorigin : tempProducts[key].D10_item_origin,
            weight : tempProducts[key].D11_weight,
            youtubeurl : tempProducts[key].D12_youtube_url
          };
          this.items.push(singleProduct);
        }
      }
      console.log(this.items);
    })
    
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
    this.nvCtrl.push(ItemdetailPage, {slide : id});
  }
  itemSelected(item: string){
    console.log("Selected Item", item);
  }
  testDetail(id){
    this.nvCtrl.push(ItemdetailPage, {slide : id});
    //console.log("Selected Item", item);
  }

}
