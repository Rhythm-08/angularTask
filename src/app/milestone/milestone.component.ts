import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MilestoneService} from '../services/milestone.service';
@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent implements OnInit {
   constructor(private milestone:MilestoneService) { }
  milestoneArray:any=[]
  ngOnInit(): void {
    this.milestone.getMilestone().subscribe((data)=>{
      console.log(data);
      this.milestoneArray=data;
    })
}
}
