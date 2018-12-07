import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IssueService {
uri='http://localhost:4000';
  constructor(private http:HttpClient) { }

  getIssueById(id){
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  getIssues(){
    return this.http.get(`${this.uri}/issues/`);
  }

  addIssue(title,responsible,descripton,severity){
    const issue={
      title:title,
      responsible:responsible,
      descripton:descripton,
      severity:severity
    };
    return this.http.post(`${this.uri}/issues/add`,issue);
  }

  updateIssue(id,title,responsible,descripton,severity,status){
    const issue={
      title:title,
      responsible:responsible,
      descripton:descripton,
      severity:severity,
      status:status
    };
    return this.http.post(`${this.uri}/issues/update/${id}`,issue);
  }

  deletIssue(id){
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }

}
