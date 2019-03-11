import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FcmService } from '../app/Services/fcm.service';
import { ToastController, NavController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';





@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  public appPages = [
    {
      title: 'Projects',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'My Tasks',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out'
    }
  ];
name: any;
userName: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage, 
   private fcm: FcmService, 
   private  toastCtrl: ToastController, 
   private NavCtrl:NavController
  ) {
    
    this.initializeApp();
    
  }



 ngOnInit(){

  this.storage.get('currentUser').then((val) => {
    console.log('data:', val)
    
    if(val!=null){
      this.name= val.name
    this.userName= val.username
      this.NavCtrl.navigateForward('/home')
    }
 }).catch(err=>{
   alert(err)
 })

}
listMenu(title){
  if(title=='Logout'){
    this.storage.clear();
  }
}

async presentToast(msg) {
  const toast = await this.toastCtrl.create({
    message: msg.body,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}

   initializeApp() {
     
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // this.fcm.getToken()

      // // Listen to incoming messages
      // this.fcm.listenToNotifications().pipe(
      //   tap(msg => {
      //     // show a toast
      //     console.log('this is message', msg)
      //     this.presentToast(msg)
      //   })
      // )
      // .subscribe()
      
    
    });
  }

 
}
