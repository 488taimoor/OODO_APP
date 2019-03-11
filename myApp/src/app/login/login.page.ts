import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { NavController, ModalController, PopoverController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { async } from '../../../node_modules/rxjs/internal/scheduler/async';
import { FcmService } from '../Services/fcm.service';
import { ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data: any
  errormessage: any;
  constructor(
    private frmBuilder: FormBuilder,
    private loginSrvc: LoginService,
    private loadCtrl: LoadingController,
    private NavCtrl: NavController,
    private storage: Storage,
    private fcm: FcmService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  email = new FormControl("", [
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);


  myform: FormGroup = this.frmBuilder.group({
    email: this.email,
    password: this.password
  });



  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg.body,
      duration: 3000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'View',
      
    });

    toast.present();
    // toast.onDidDismiss().then(data=>{
    //   this.NavCtrl.navigateForward('/list')
    // })
   
  }



  async login() {
    const loading = await this.loadCtrl.create({
    });

    loading.present()

    var credentials = this.myform.value
    this.loginSrvc.userLogin(credentials).subscribe(
      async data => {
        console.log('here is user data', data)
        this.data = data;
        await this.storage.set('currentUser', data)

        this.fcm.getToken(this.data.uid).then(data => {
          console.log('here is token data:', data)
        }).catch(err => {
          console.log('here is error token', err)
        })

        // Listen to incoming messages
        this.fcm.listenToNotifications().subscribe(msg => {
          console.log('this is message', msg)

          this.presentToast(msg)
        })
        // this.fcm.listenToNotifications().pipe(
        //   tap(msg => {
        //     // show a toast
        //     console.log('this is message', msg)

        //     this.presentToast(msg)
        //   })
        // )
        // .subscribe()




        loading.dismiss()
        this.NavCtrl.navigateForward('/home')
      },
      error => {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        this.errormessage = 'Invalid Email or Password';
        loading.dismiss()
      })



  }





}
