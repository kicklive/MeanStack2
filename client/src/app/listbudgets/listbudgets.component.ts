import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../authenticate.service";
import { UserDetails } from "../authentication.model";
import { NavstateService } from "../navstate.service";
import { Budgetdata } from "../budgetdata";
import { BudgetDataService } from '../budget-data.service';
import { Router } from "@angular/router";

interface pageRoute{
  name:string,
  route:string
  };


@Component({
  selector: 'app-listbudgets',
  templateUrl: './listbudgets.component.html',
  styleUrls: ['./listbudgets.component.css']
})
  export class ListbudgetsComponent implements OnInit {

  title = 'client';
  greeting='';
  userDetails:UserDetails;
  userName:string;
  showGrid?:boolean;
  data:BudgetDataService;


  routes:pageRoute[]=[];  
constructor(private auth:AuthenticationService,private n:NavstateService,private ds:BudgetDataService,private route:Router){
  this.n.setNavBarState(false);
  this.n.setUserName('Hello, '+this.auth.getUsername());
  this.n.setNavLinks(false);
}
 

  ngOnInit() {
    this.routes=[
      {name:'Budget List',route:'/budgetlist'},
      {name:'Search Items',route:'/search'},
      {name:'History',route:'/history'},
      {name:'Trends',route:'/trends'},
      {name:'About',route:'/about'},
    ];
    this.ds.getBudgetList().subscribe((res)=>{
      this.data=res;
    });
    if(this.data!=null)
      this.showGrid=false;
    else
      this.showGrid=true;
  }

  newBudget(){
   this.route.navigateByUrl('/newbudget')
  }

}