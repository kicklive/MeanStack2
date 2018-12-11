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
  issues:Issue[];
  displayedColumns=['title','responsibility','description','severity','status','actions']
  constructor(private issueService:IssueService,private router:Router) { }

  ngOnInit() {
    // this.issueService.getIssues().subscribe((issues)=>{
    //   console.log("here1===>"+issues[0].title);
    // });
    this.fetchIssues();
  }

  
  fetchIssues=()=>{
    this.issueService.getIssues().subscribe((data:Issue[])=>{
      this.issues=data;
      console.log('Data requested...');
      console.log(this.issues);
    })
  };

  
  editIssue(id){
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id){
    this.issueService.deletIssue(id).subscribe(()=>{
      this.fetchIssues();
    });
  }
};