import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AboutPage } from '../about/about';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { MyinfoPage } from '../myinfo/myinfo';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = MyinfoPage;
  tab3Root: any = SearchPage;

  constructor() {

  }
}
