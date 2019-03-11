import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MytaskService } from './../Services/mytask.service';
import { NavController, ModalController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-sub-task',
  templateUrl: './sub-task.page.html',
  styleUrls: ['./sub-task.page.scss'],
})
export class SubTaskPage implements OnInit {
  taskdata: any;
  taskDescription: any;
  taskName: any;
  assignedName:any;
  plannedHours: any;
  deadLine: any;
  sprint: any;
  priority:any;
  progress: any;
  tName:any;
  constructor(
    private storage: Storage,
    private mytaskServ: MytaskService,
    private loadCtrl: LoadingController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {


    this.SubTask()




  }

  async SubTask() {
    const loading = await this.loadCtrl.create({
    });
    loading.present()

      this.storage.get('item').then((val) => {
        console.log('user data in subtask', val.id);


        if(val.name.length>20){
          console.log('greater')
          this.taskName= val.name.slice(0,19)
          this.taskName+= "..."
        }else{
          console.log('less')
          this.taskName=val.name
        }
        this.tName=val.name
        this.taskDescription= val.description
        this.assignedName= val.assigned
        this.plannedHours=val.planned_hours
        this.deadLine=val.date_deadline
        this.sprint=val.display_name
        this.priority=val.priority
        this.progress=val.progress

        this.mytaskServ.subtask(val.id).then(data => {
          console.log(data)
          this.taskdata = data
          loading.dismiss()
        }).catch(
          err => {
            loading.dismiss()
            alert('here is error')
          }
        )



      }).catch(err => {
        this.navCtrl.navigateForward('/Home')
      });

   
  }


}
