import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
 
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS;
  }

  getLeader(id: number): Leader {
    return this.getLeaders().filter((leader, inddex) => {
      return leader.id == id;
    })[0];
  }

  getFeaturedLeader(): Leader {
    return this.getLeaders().filter((leader, index) => {
      return leader.featured;
    })[0]
  }

}
