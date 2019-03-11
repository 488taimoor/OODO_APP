import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {TestPageModule} from '../app/test/test.module';
import {TabsPageModule} from '../app/tabs/tabs.module';
import {PtabsPageModule} from '../app/ptabs/ptabs.module';
import { IonicStorageModule } from '@ionic/storage';
import {ProgressBarModule} from "angular-progress-bar"

import { Firebase } from '@ionic-native/firebase/ngx';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FcmService } from '../app/Services/fcm.service';

export const firebase = {
  apiKey: "AIzaSyBNRANAyv-Ov1bryS1KxoPe43t-37DrcVI",
  authDomain: "odoo-61432.firebaseapp.com",
  databaseURL: "https://odoo-61432.firebaseio.com",
  projectId: "odoo-61432",
  storageBucket: "odoo-61432.appspot.com",
  messagingSenderId: "1033025446927"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    TestPageModule,
    TabsPageModule,
    PtabsPageModule,
    RouterModule.forRoot([]),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebase), 
    AngularFirestoreModule,
    ProgressBarModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    FcmService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
