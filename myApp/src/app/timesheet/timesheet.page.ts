import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MytaskService } from './../Services/mytask.service';
import { NavController, ModalController, LoadingController, Nav } from '@ionic/angular';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.page.html',
  styleUrls: ['./timesheet.page.scss'],
})
export class TimesheetPage implements OnInit {
  taskDescription: any;
  taskName: any;
  assignedName:any;
  plannedHours: any;
  deadLine: any;
  sprint: any;
  priority:any;
  progress: any;
  tName:any;
  timesheetdata: any
  constructor(private storage: Storage, private taskServ: MytaskService, private loadCtrl: LoadingController ) { }

  ngOnInit() {


    this.storage.get('item').then((val) => {
      console.log('task data in description', val);
      this.Timesheet(val.id)
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
      
      
    });


  }



  async Timesheet(taskid) {
    const loading = await this.loadCtrl.create({
    });
    loading.present()

   this.taskServ.timeSheet(taskid).then(timedata=>{
    console.log('here is timesheet: ', timedata)
    this.timesheetdata= timedata
    loading.dismiss()
   }).catch(err=>{
     console.log('here is timesheet Error: ', err)
   })

  }



}
