import { Component, OnInit } from '@angular/core';
import { MytaskService } from './../Services/mytask.service';
import { NavController, ModalController, PopoverController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-atasks',
  templateUrl: './atasks.page.html',
  styleUrls: ['./atasks.page.scss'],
})
export class AtasksPage implements OnInit {
  taskData: any;
  name:any;
  constructor(
    private taskServ: MytaskService,
    private NavCtrl: NavController,
    private LoadCtrl: LoadingController,
    private storage: Storage,
  ) { 
this.GetAllTasks()
    
  }

  ngOnInit() {
  }


  async GetAllTasks() {
    const loading = await this.LoadCtrl.create({
    });

    loading.present()


    this.storage.get('projectdata').then((val) => {
      console.log('data:', val)
      
      if(val!=null){
        this.name= val.name
      
      this.taskServ.Alltasks(val.id).then(async tasks=>{
        console.log('Project tasks:', tasks)
        this.taskData=tasks
        await this.storage.set('projecttasks', tasks)
        loading.dismiss()
      }).catch(err=>{
        console.log('error in projects: ', err)
      })
      }
   }).catch(err=>{
     alert(err)
   })


    
  }


}
