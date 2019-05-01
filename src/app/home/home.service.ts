import { Injectable } from '@angular/core';
import { Member } from '../viewmodel/member';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getMembers():Observable<Member[]>{
    let members = [
      {id:"001", name:"Apple", age:10, title:"CEO" },
      {id:"002", name:"Banana", age:20, title:"Team Leader" },
      {id:"003", name:"Orange", age:30, title:"Sales" },
      {id:"004", name:"Cherry", age:40, title:"Engineer" },
      {id:"005", name:"Lemon", age:50, title:"Engineer" },
      ];
      return of(members);
  }


}
