import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IssueService } from "../../issue.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
createForm:FormGroup;
  constructor(private issueService:IssueService,private fb:FormBuilder,private router:Router) {
    this.createForm=this.fb.group({
      title:['', Validators.required],
      responsibility:'',
      description:'',
      severity:''
      
    }); //creates a new formgroup
   };

  ngOnInit() {
  }

  addIssue(title,responsibility,description,severity){
    this.issueService.addIssue(title,responsibility,description,severity).subscribe(()=>{
      this.router.navigate(['/list']);
    });
  };
};