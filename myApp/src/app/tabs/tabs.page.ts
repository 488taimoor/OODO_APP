import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController, LoadingController, NavParams} from '@ionic/angular';
import { Storage } from '@ionic/storage'; 

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage implements OnInit {
  passedId = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private storage: Storage,
    // private navParams: NavParams,
    private navCtrl: NavController
  ) { 


   

  }

  ngOnInit() {
   
   


    // this.passedId = this.activatedRoute.snapshot.paramMap.get('id');
    
    // this.passedId= this.navParams.get('custom_id')
    // console.log('====================================');
    // console.log('tabs data: ', this.passedId);
    // console.log('====================================');


    // this.navCtrl.navigateForward('/tabs/(description:description)')
  }
  
    
  

}