import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import{ AngularFirestoreModule } from 'angularfire2/firestore';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { NewsPage } from '../pages/news/news';
import { ItemdetailPage } from '../pages/itemdetail/itemdetail';
import { SettingsPage } from '../pages/settings/settings'
import { SearchPage } from '../pages/search/search';
import { SignupPage } from '../pages/signup/signup';
import { MyinfoPage } from '../pages/myinfo/myinfo';
import { PaymentPage } from '../pages/payment/payment';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';
import { environment } from '../environments/environment';
import { ElasticHeaderModule } from "ionic2-elastic-header/dist";
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AdminPage } from '../pages/admin/admin';
import { AngularFireDatabase } from 'angularfire2/database'
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    SearchPage,
    MyinfoPage,
    SettingsPage,
    AdminPage,
    NewsPage,
    ItemdetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ElasticHeaderModule,
    HttpClientModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    SearchPage,
    MyinfoPage,
    SettingsPage,
    AdminPage,
    NewsPage,
    ItemdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
  ]
})
export class AppModule {}
