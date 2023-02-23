import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpclient:HttpClient) { }
  url = 'http://localhost:3000/Project';
  getProject(){
    return this.httpclient.get(this.url);
  }

}
