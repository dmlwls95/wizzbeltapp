import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
 


@Injectable()
export class FirebaseProvider {
  constructor(public afd: AngularFireDatabase) { 

  }
 
  getslideItems() {
    return this.afd.list('/mainItems/slide');
  }
  addslideItem(name) {
    this.afd.list('/mainItems/slide').push(name);
  }


  gettestitem(name){
    return this.afd.list('/SCM_Item_Reg_Request_List/'+ name + '/D05_info_file1/');
  }
  getTop(){
    return this.afd.list('/Slidelist/');
  }

  removeslideItem(id) {
    this.afd.list('/mainItems/slide').remove(id);
  }
//*************monthtop db입력 메소드 */
  getMonthtopItems() {
    return this.afd.list('/mainItems/Monthtop');
  }
 
  addMonthtopItem(name) {
    this.afd.list('/mainItems/Monthtop').push(name);
  }
 
  removeMonthtopItem(id) {
    this.afd.list('/mainItems/Monthtop').remove(id);
  }
//*************cate1top db입력 메소드 */
  getcate1topItems() {
    return this.afd.list('/mainItems/cate1');
  }

  addcate1topItem(name) {
    this.afd.list('/mainItems/cate1').push(name);
  }

  removecate1topItem(id) {
    this.afd.list('/mainItems/cate1').remove(id);
  }
//*************cate2top db입력 메소드 */
  getcate2topItems() {
    return this.afd.list('/mainItems/cate2');
  }

  addcate2topItem(name) {
    this.afd.list('/mainItems/cate2').push(name);
  }

  removecate2topItem(id) {
    this.afd.list('/mainItems/cate2').remove(id);
  }
//*************회원정보 입력 메소드 */
  addUserprofile(username:string,address:string,callnum:string,uid){
    this.afd.database.ref('/UserProfile/Normal/'+ uid +'/').push({
      username: username,
      address: address,
      callnum: callnum
    })
  }

}