import { Component, OnInit } from '@angular/core';
import { IssueService } from "../../issue.service";
import { FormGroup,FormBuilder,Validator, Validators } from "@angular/forms";
import { Router,ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { Issue } from "../../issue.model";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id:String;
  issue:any={};
  updateForm:FormGroup;

  constructor(private issueService:IssueService,private router:Router,private route:ActivatedRoute,private snackBar:MatSnackBar,private fb:FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params.id;
      this.issueService.getIssueById(this.id).subscribe(res=>{
        this.issue=res;
        this.updateForm.get('title').setValue(this.issue.title);
        this.updateForm.get('responsibility').setValue(this.issue.responsibility);
        this.updateForm.get('description').setValue(this.issue.description);
        this.updateForm.get('severity').setValue(this.issue.severity);
        this.updateForm.get('status').setValue(this.issue.status);
      })
    })
  }

  createForm(){
    this.updateForm=this.fb.group({
      title:['', Validators.required],
      responsibility:'',
      description:'',
      severity:'',
      status:''
      
    }); //creates a new formgroup
  }

  updateIssue(title,responsibility,description,severity,status){
    this.issueService.updateIssue(this.id,title,responsibility,description,severity,status).subscribe(res=>{
      this.snackBar.open('Issue updated successfull','OK',{duration:3000})
    })

  }

}
