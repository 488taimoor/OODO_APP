import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class MytaskService {
  data: any

  constructor(private http: HttpClient) { }

  Mytask(Userid) {
    const userid = Userid
    let promise = new Promise((resolve, reject) => {
      this.http.get('http://10.11.16.167:3301/api/mytask' + `/${userid}`)
        .toPromise()
        .then(
          res => {
            resolve(res);
          }
        ).catch(err => {
          reject(err)
        }

        );
    });
    return promise;

  }

  subtask(Userid) {
    const taskId = Userid
    console.log('in service ', taskId)
    let promise = new Promise((resolve, reject) => {
      this.http.get('http://10.11.16.167:3301/api/subtask' + `/${taskId}`)
        .toPromise()
        .then(
          res => {
            resolve(res);
          }
        ).catch(err => {
          reject(err)
        }

        );
    });
    return promise;

  }


  Alltasks(pid) {
  
    console.log('in service ', pid)
    let promise = new Promise((resolve, reject) => {
      this.http.get('http://10.11.16.167:3301/api/alltasks' + `/${pid}`)
        .toPromise()
        .then(
          res => {
            resolve(res);
          }
        ).catch(err => {
          reject(err)
        }

        );
    });
    return promise;

  }



  timeSheet(taskid) {
  
    console.log('in service ', taskid)
    let promise = new Promise((resolve, reject) => {
      this.http.get('http://10.11.16.167:3301/api/timesheet' + `/${taskid}`)
        .toPromise()
        .then(
          res => {
            resolve(res);
          }
        ).catch(err => {
          reject(err)
        }

        );
    });
    return promise;

  }


  InProgressTask(pid) {
  
    console.log('in service ', pid)
    let promise = new Promise((resolve, reject) => {
      this.http.get('http://10.11.16.167:3301/api/inprogress' + `/${pid}`)
        .toPromise()
        .then(
          res => {
            resolve(res);
          }
        ).catch(err => {
          reject(err)
        }

        );
    });
    return promise;

  }




  DoneTask(pid) {
  
    console.log('in service ', pid)
    let promise = new Promise((resolve, reject) => {
      this.http.get('http://10.11.16.167:3301/api/donetasks' + `/${pid}`)
        .toPromise()
        .then(
          res => {
            resolve(res);
          }
        ).catch(err => {
          reject(err)
        }

        );
    });
    return promise;

  }

}

