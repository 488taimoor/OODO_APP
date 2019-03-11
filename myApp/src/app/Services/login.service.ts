import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from '../../../node_modules/protractor';
import { Observable } from '../../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  userLogin(credentials) {
    
      console.log('====================================');
      console.log(credentials);
      console.log('====================================');
    // console.log("CREDENCIAIS ======>>>>", JSON.stringify(credentials));
     return this.http.get('http://10.11.16.167:3301/api/userlogin'+`/${credentials.email}`+`/${credentials.password}`)
    //   .subscribe(data=>{
    //    console.log('====================================');
    //    console.log(data);
    //    console.log('====================================');
    //    return data
    //  })


}
}