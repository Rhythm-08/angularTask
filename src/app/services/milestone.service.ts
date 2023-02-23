import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MilestoneService {

  constructor(private httpclient:HttpClient) { }
  url = 'http://localhost:3000/Milestone';

  getMilestone(){
    return this.httpclient.get(this.url);
  }

}
