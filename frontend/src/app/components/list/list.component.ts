import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material";
import { Issue } from "../../issue.model";
import { IssueService } from "../../issue.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  issue:Issue[];
  displauedColumns=['title','responsible','severity','status','action']
  constructor(private issueService:IssueService,private router:Router) { }

  ngOnInit() {
   

  }
  fetchIssues=()=>{
    this.issueService.getIssues().subscribe((data:Issue[])=>{
      this.issue=data;
      console.log('Data requested...');
      console.log(this.issue);
    })
  }
;
}
