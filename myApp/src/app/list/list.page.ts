import { MytaskService } from './../Services/mytask.service';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController, Nav } from '@ionic/angular';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  taskdata: any;
  params: Object;
  pushPage: any;

  constructor(
    private loadCtrl: LoadingController,
    private mytask: MytaskService,
    private navCtrl: NavController,
    private MOdalCtrl: ModalController,
    private storage: Storage

  ) {

    // this.pushPage = TabsPage;
  }

  ngOnInit() {
    this.task()
  }



  async task() {
    const loading = await this.loadCtrl.create({
    });
    loading.present()

    this.storage.get('currentUser').then((val) => {
      console.log('user data in login', val.uid);
      this.mytask.Mytask(val.uid).then(data => {
        console.log(data)
        this.taskdata = data
        loading.dismiss()
      }).catch(
        err => {
          alert('here is error')
        }
      )

    }).catch(err => {
      this.navCtrl.navigateForward('/Home')
    });

  }





  async  open(task) {
    const loading = await this.loadCtrl.create({
    });
    loading.present()

    //for local storage.   
    await this.storage.set('item', task)
    loading.dismiss()
    this.navCtrl.navigateForward(`/tabs`)




  }

}
