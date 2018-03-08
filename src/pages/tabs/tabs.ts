import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LoginPage;
  tab3Root = SearchPage;

  constructor() {

  }
}
