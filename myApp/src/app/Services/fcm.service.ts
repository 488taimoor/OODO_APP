import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(
    public firebaseNative: Firebase,
    public afs: AngularFirestore,
    private platform: Platform,
    private http: HttpClient
  ) { }


  async getToken(uid) { 
    let token;

  if (this.platform.is('android')) {
    token = await this.firebaseNative.getToken()
    console.log('here is firebase Token', token)
  } 
  if (this.platform.is('ios')) {
    token = await this.firebaseNative.getToken();
    await this.firebaseNative.grantPermission();
  } 
  
  return this.saveTokenToDB(token, uid)
  }

  // Save the token to firestore
  private saveTokenToDB(token, uid) {
    if (!token) return;
    var token

    let promise = new Promise((resolve, reject) => {
      this.http.get('http://10.11.16.167:3301/api/registertoken' + `/${uid}`+ `/${token}`)
        .toPromise()
        .then(
          res => {
            resolve(res);
          }
        ).catch(err => {
          reject(err)
        }

        );
    });
    return promise;




  // const devicesRef = this.afs.collection('devices')

  // const docData = { 
  //   token,
  //   userId: 'testUser',
  // }

  // return devicesRef.doc(token).set(docData)
  }

  // Listen to incoming FCM messages
  listenToNotifications() {
    return this.firebaseNative.onNotificationOpen()
  }
}
