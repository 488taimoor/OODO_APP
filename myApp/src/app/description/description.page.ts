import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
// import * as angular from "angular";

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {
  taskDescription: any;
  taskName: any;
  assignedName:any;
  plannedHours: any;
  deadLine: any;
  sprint: any;
  priority:any;
  progress: any;
  tName:any;
  constructor(private storage: Storage, ) { }

  ngOnInit() {

//     angular.module('bindHtmlExample', ['ngSanitize'])
// .controller('ExampleController', ['$scope', function($scope) {
//   $scope.myHTML =
//      'I am an <code>HTML</code>string with ' +
//      '<a href="#">links!</a> and other <em>stuff</em>';
// }]);




    this.storage.get('item').then((val) => {
      console.log('task data in description', val);
      // this.taskName = val.name
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

}
