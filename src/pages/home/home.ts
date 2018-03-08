import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
//import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slideArray: any = []; //첫번째 슬라이드 영역 이미지 어레이
  monthTop: any = [];
  cate1Top: any =[];
  cate2Top: any =[];
  
  
  /*mainconArray: any =[];
  maincons = [];
  infiMain: any =[];*/
  
  /*private limit: number = 10;
  private userId: any;
  private postList: any;
  private lastId: any;
  private finishedLoading: boolean = false;*/

  constructor(public nvCtrl:NavController) {
    this.slideArray = [
      {'image':'https://dummyimage.com/375x280/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/375x280/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/375x280/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/375x280/8c8c8c/000000.png'}
    ]; //최상단 쇼업 슬라이드 어레이
    this.monthTop =[
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'}
    ]
    this.cate1Top =[
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'}
    ]
    this.cate2Top =[
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'},
      {'image':'https://dummyimage.com/100x100/8c8c8c/000000.png'}
    ]





















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
}
