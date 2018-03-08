import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class Port{
  public id: number;
  public name: string;
}
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  ports: Port[];
  port: Port;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ports = [
      {id: 0,name: 'wizz'},
      {id: 1,name: 'moeto'},
      {id: 2,name: 'belt'},
    ]
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
