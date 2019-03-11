import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http:HttpClient,
  ) { }


  Projects() {
    
    let promise = new Promise((resolve, reject) => {
      this.http.get('http://10.11.16.167:3301/api/projects')
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
