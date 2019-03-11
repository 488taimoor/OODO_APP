import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, PopoverController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MytaskService } from './../Services/mytask.service';

@Component({
  selector: 'app-ptasks',
  templateUrl: './ptasks.page.html',
  styleUrls: ['./ptasks.page.scss'],
})
export class PtasksPage implements OnInit {
  inProgData: any;
  name:any;
  constructor(
    private LoadCtrl: LoadingController,
    private storage: Storage,
    private taskServ: MytaskService,
  ) {
    this.GetInProgressTasks()
   }

  ngOnInit() {
  }


  async GetInProgressTasks() {
    const loading = await this.LoadCtrl.create({
    });

    loading.present()
    this.storage.get('projectdata').then(val=>{
      console.log('progress page data:', val.id)
      this.name= val.name
      this.InProgressTasks(val.id)
      loading.dismiss()
    }).catch(err=>{
      console.log('progress page error', err)
    })


  }


InProgressTasks(pid){
  this.taskServ.InProgressTask(pid).then(data=>{
    console.log('inProgress Data:', data)
    this.inProgData=data
  }).catch(err=>{
    console.log('here is error', err)
  })
}


}
