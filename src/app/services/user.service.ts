import { Injectable } from '@angular/core';
import { Rate } from '../Model/Rates';
import { HttpsService } from './https.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  controllerName = "User";
    ;
  constructor(private httpsService :HttpsService) { }
  getAll() {
    return this.httpsService.get(this.controllerName,"getAll");
  }
  insertAll(){
   var a :Rate=new Rate("a",1);
   
    return this.httpsService.post(this.controllerName,"insertAll",a)
  } 
}
