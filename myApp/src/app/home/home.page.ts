import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../Services/project.service';
import { NavController, ModalController, PopoverController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  projectData: any;
  constructor(
    private ProjService:ProjectService,
    private loadCtrl:LoadingController,
    private navCtrl:NavController,
    private storage: Storage,
  ) {
    this.GetProjects()
   }

  ngOnInit(){}

  async GetProjects() {
    const loading = await this.loadCtrl.create({
    });

    loading.present()

    this.ProjService.Projects().then(proj=>{
      console.log('Projects:', proj)
      this.projectData=proj
      loading.dismiss()
    }).catch(err=>{
      console.log('error in projects: ', err)
    })
  }


  async  open(project) {
    await this.storage.set('projectdata', project)
    this.navCtrl.navigateForward(`/ptabs`)

  }
  



}
