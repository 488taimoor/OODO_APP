import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController, LoadingController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  passedId = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    // private navParams: NavParams
  ) { }

  ngOnInit() {
    this.passedId = this.activatedRoute.snapshot.paramMap.get('id');
    
    // this.passedId= this.navParams.get('task')
    console.log('====================================');
    console.log('tabs data: ', this.passedId);
    console.log('====================================');
  }

}
