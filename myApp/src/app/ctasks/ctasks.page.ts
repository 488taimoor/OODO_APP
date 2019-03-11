import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, PopoverController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MytaskService } from './../Services/mytask.service';

@Component({
  selector: 'app-ctasks',
  templateUrl: './ctasks.page.html',
  styleUrls: ['./ctasks.page.scss'],
})
export class CtasksPage implements OnInit {
  DonetaskData: any;
  name:any;
  constructor(
    private LoadCtrl: LoadingController,
    private storage: Storage,
    private taskServ: MytaskService,
  ) { 
    this.GetInProgressTasks()
  }

  ngOnInit() {}

  async GetInProgressTasks() {
    const loading = await this.LoadCtrl.create({
    });

    loading.present()
    this.storage.get('projectdata').then(val=>{
      console.log('Done page data:', val.id)
      this.name= val.name
      this.DoneTasks(val.id)
      loading.dismiss()
    }).catch(err=>{
      console.log('Done page error', err)
    })


  }


DoneTasks(pid){
  this.taskServ.DoneTask(pid).then(data=>{
    console.log('Done Data:', data)
    this.DonetaskData=data
  }).catch(err=>{
    console.log('here is error', err)
  })
}


  
}
