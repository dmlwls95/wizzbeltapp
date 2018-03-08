import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { TabsPage } from '../pages/tabs/tabs';

/*export const firebaseConfig ={
    apiKey: "AIzaSyDjM9A7kDog6ieZj-B8QHXiNE9fvMEI8ZY",
    authDomain: "wizzbelt-90d2b.firebaseapp.com",
    databaseURL: "https://wizzbelt-90d2b.firebaseio.com",
    storageBucket: "wizzbelt-90d2b.appspot.com",
    messagingSenderId: "432919344129"
}*/
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    //firebase.initializeApp(firebaseConfig);
    platform.ready()
    .then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    
  }
}
