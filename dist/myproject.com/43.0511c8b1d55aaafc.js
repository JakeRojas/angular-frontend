"use strict";(self.webpackChunkangular_15_example=self.webpackChunkangular_15_example||[]).push([[43],{6043:(W,g,c)=>{c.r(g),c.d(g,{ProfileModule:()=>$});var a=c(433),l=c(6895),d=c(7859),t=c(8256);let v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA()())},dependencies:[d.lC],encapsulation:2}),n})();var p=c(4786);function Z(n,o){if(1&n&&(t.TgZ(0,"div",7)(1,"div",8)(2,"strong"),t._uU(3,"Name: "),t.qZA(),t._uU(4),t._UZ(5,"br"),t.TgZ(6,"strong"),t._uU(7,"Email: "),t.qZA(),t._uU(8),t._UZ(9,"br"),t.TgZ(10,"strong"),t._uU(11,"Phone Number: "),t.qZA(),t._uU(12),t._UZ(13,"br"),t.TgZ(14,"strong"),t._uU(15,"Role: "),t.qZA(),t._uU(16),t._UZ(17,"br"),t.qZA(),t.TgZ(18,"div",9)(19,"p")(20,"a",10),t._uU(21,"Update Profile"),t.qZA()()()()),2&n){const e=t.oxw();t.xp6(4),t.AsE(" ",e.account.firstName," ",e.account.lastName,""),t.xp6(4),t.hij(" ",e.account.email,""),t.xp6(4),t.hij(" ",e.account.phoneNumber,""),t.xp6(4),t.hij(" ",e.account.role,"")}}function A(n,o){if(1&n&&(t.TgZ(0,"div",12)(1,"div",13)(2,"strong"),t._uU(3,"Branch: "),t.qZA(),t._uU(4),t._UZ(5,"br"),t.TgZ(6,"strong"),t._uU(7,"Location: "),t.qZA(),t._uU(8),t._UZ(9,"br"),t.TgZ(10,"strong"),t._uU(11,"Status: "),t.qZA(),t._uU(12),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(4),t.hij(" ",(null==e.branch?null:e.branch.name)||"No Branch Assigned",""),t.xp6(4),t.hij(" ",(null==e.branch?null:e.branch.location)||"N/A",""),t.xp6(4),t.hij(" ",(null==e.branch?null:e.branch.branchStatus)||"N/A"," ")}}function T(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"h3"),t._uU(3,"Branch Information"),t.qZA(),t.TgZ(4,"button",5),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.toggleBranchInfo())}),t._uU(5),t.qZA()(),t.YNc(6,A,13,3,"div",11),t.qZA()}if(2&n){const e=t.oxw();t.xp6(5),t.hij(" ",e.showBranchInfo?"Hide Branch Information":"Show Branch Information"," "),t.xp6(1),t.Q6J("ngIf",e.showBranchInfo)}}function b(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"lowercase"),t.ALo(8,"date"),t.qZA()()),2&n){const e=o.$implicit;t.xp6(2),t.Oqu(e.actionType),t.xp6(2),t.Oqu(e.actionDetails),t.xp6(2),t.Oqu(t.lcZ(7,3,t.xi3(8,5,e.timestamp,"dd/MM/yy, hh:mm a")))}}function C(n,o){1&n&&(t.TgZ(0,"tr")(1,"td",26),t._uU(2,"No activity logs found"),t.qZA()())}function U(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div",14)(2,"div",15)(3,"label",16),t._uU(4,"Action Type Search:"),t.qZA(),t.TgZ(5,"input",17),t.NdJ("ngModelChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.searchTerm=r)})("input",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.handleSearch())}),t.qZA()(),t.TgZ(6,"div",15)(7,"label",18),t._uU(8,"Start Date:"),t.qZA(),t.TgZ(9,"input",19),t.NdJ("ngModelChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.startDate=r)})("change",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.handleSearch())}),t.qZA()(),t.TgZ(10,"div",15)(11,"label",20),t._uU(12,"End Date:"),t.qZA(),t.TgZ(13,"input",21),t.NdJ("ngModelChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.endDate=r)})("change",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.handleSearch())}),t.qZA()()(),t.TgZ(14,"div",22)(15,"table",23)(16,"thead")(17,"tr")(18,"th"),t._uU(19,"Action Type"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Details"),t.qZA(),t._UZ(22,"th")(23,"th")(24,"th")(25,"th")(26,"th")(27,"th")(28,"th")(29,"th")(30,"th")(31,"th")(32,"th")(33,"th")(34,"th")(35,"th")(36,"th")(37,"th")(38,"th")(39,"th")(40,"th")(41,"th")(42,"th")(43,"th")(44,"th")(45,"th")(46,"th")(47,"th")(48,"th")(49,"th")(50,"th"),t.TgZ(51,"th"),t._uU(52,"Timestamp"),t.qZA()()()(),t.TgZ(53,"div",24)(54,"tbody"),t.YNc(55,b,9,8,"tr",25),t.YNc(56,C,3,0,"tr",6),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(5),t.Q6J("ngModel",e.searchTerm),t.xp6(4),t.Q6J("ngModel",e.startDate),t.xp6(4),t.Q6J("ngModel",e.endDate),t.xp6(42),t.Q6J("ngForOf",e.filteredLogs),t.xp6(1),t.Q6J("ngIf",0===e.filteredLogs.length)}}function x(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA()()),2&n){const e=o.$implicit;t.xp6(2),t.Oqu(e.actionType),t.xp6(2),t.AsE("",e.userEmail," ",e.userRole,""),t.xp6(2),t.Oqu(e.actionDetails),t.xp6(2),t.Oqu(t.xi3(9,5,e.timestamp,"MM/dd/yy, hh:mm a"))}}function q(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div",27)(2,"label",16),t._uU(3,"Action type:"),t.qZA(),t.TgZ(4,"input",28),t.NdJ("ngModelChange",function(r){t.CHM(e);const s=t.oxw(2);return t.KtG(s.adminSearchTerm=r)})("change",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.handleAdminSearch())}),t.qZA(),t.TgZ(5,"label",18),t._uU(6,"Start Date:"),t.qZA(),t.TgZ(7,"input",29),t.NdJ("ngModelChange",function(r){t.CHM(e);const s=t.oxw(2);return t.KtG(s.adminStartDate=r)})("change",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.handleAdminSearch())}),t.qZA(),t.TgZ(8,"label",20),t._uU(9,"End Date:"),t.qZA(),t.TgZ(10,"input",29),t.NdJ("ngModelChange",function(r){t.CHM(e);const s=t.oxw(2);return t.KtG(s.adminEndDate=r)})("change",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.handleAdminSearch())}),t.qZA()(),t.TgZ(11,"div",30)(12,"table",23)(13,"thead")(14,"tr")(15,"th"),t._uU(16,"Action Type"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"User"),t.qZA(),t._UZ(19,"th")(20,"th")(21,"th")(22,"th")(23,"th")(24,"th")(25,"th")(26,"th")(27,"th")(28,"th")(29,"th")(30,"th")(31,"th")(32,"th"),t.TgZ(33,"th"),t._uU(34,"Details"),t.qZA(),t._UZ(35,"th")(36,"th")(37,"th")(38,"th")(39,"th")(40,"th")(41,"th")(42,"th")(43,"th")(44,"th")(45,"th")(46,"th")(47,"th")(48,"th"),t.TgZ(49,"th"),t._uU(50,"Timestamp"),t.qZA()()()(),t.TgZ(51,"div",24)(52,"table",23)(53,"tbody"),t.YNc(54,x,10,8,"tr",25),t.qZA()()()()()}if(2&n){const e=t.oxw(2);t.xp6(4),t.Q6J("ngModel",e.adminSearchTerm),t.xp6(3),t.Q6J("ngModel",e.adminStartDate),t.xp6(3),t.Q6J("ngModel",e.adminEndDate),t.xp6(44),t.Q6J("ngForOf",e.filteredAllLogs)}}function y(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"h3"),t._uU(3,"All Activity Logs (Admin Only)"),t.qZA(),t.TgZ(4,"button",5),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.toggleAllActivityLogs())}),t._uU(5),t.qZA()(),t.YNc(6,q,55,4,"div",6),t.qZA()}if(2&n){const e=t.oxw();t.xp6(5),t.hij(" ",e.showAllActivityLogs?"Hide All Logs":"Show All Logs"," "),t.xp6(1),t.Q6J("ngIf",e.showAllActivityLogs)}}let w=(()=>{class n{constructor(e,i){this.accountService=e,this.branchService=i,this.account=this.accountService.accountValue,this.activityLogs=[],this.filteredLogs=[],this.allActivityLogs=[],this.filteredAllLogs=[],this.branch=null,this.showActivityLogs=!1,this.showAllActivityLogs=!1,this.showBranchInfo=!1,this.searchTerm="",this.startDate="",this.endDate="",this.adminSearchTerm="",this.adminStartDate="",this.adminEndDate=""}ngOnInit(){this.account?.id&&(this.getActivityLogs(this.account.id),this.account.BranchId&&this.getBranchById(this.account.BranchId))}getActivityLogs(e){this.accountService.getActivityLogs(e).subscribe(i=>{this.activityLogs=i,this.filteredLogs=i},i=>{console.error("Error fetching activity logs:",i)})}handleSearch(){const e=this.startDate?new Date(this.startDate).getTime():null,i=this.endDate?new Date(this.endDate).getTime():null;this.filteredLogs=this.activityLogs.filter(r=>{const s=new Date(r.timestamp).getTime();return r.actionType.toLowerCase().includes(this.searchTerm.toLowerCase())&&(!e||s>=e)&&(!i||s<=i)})}getAllActivityLogs(){this.accountService.getAllActivityLogs().subscribe({next:e=>{this.allActivityLogs=e,this.filteredAllLogs=e},error:e=>{console.error("Error fetching activity logs:",e)}})}handleAdminSearch(){const e=this.adminStartDate?new Date(this.adminStartDate).getTime():null,i=this.adminEndDate?new Date(this.adminEndDate).getTime():null;this.filteredAllLogs=this.allActivityLogs.filter(r=>{const s=new Date(r.timestamp).getTime();return r.actionType.toLowerCase().includes(this.adminSearchTerm.toLowerCase())&&(!e||s>=e)&&(!i||s<=i)})}getBranchById(e){this.branchService.getBranchById(e).subscribe(i=>{this.branch=i},i=>{console.error("Error fetching branch:",i)})}toggleAllActivityLogs(){this.showAllActivityLogs||this.getAllActivityLogs(),this.showAllActivityLogs=!this.showAllActivityLogs}toggleActivityLogs(){this.showActivityLogs=!this.showActivityLogs}toggleBranchInfo(){this.showBranchInfo=!this.showBranchInfo}isManager(){return"Staff"===this.account?.role}isAdmin(){return"Admin"===this.account?.role}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.BR),t.Y36(p.bm))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:14,vars:5,consts:[[1,"text-center","mb-4"],["class","card p-3 mb-4",4,"ngIf"],["class","card p-3 mb-4 position-relative",4,"ngIf"],[1,"card","p-3","mb-4","position-relative"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"btn","btn-primary",3,"click"],[4,"ngIf"],[1,"card","p-3","mb-4"],[1,"mb-3"],[1,"text-left"],["routerLink","update",1,"btn","btn-success"],["class","mt-3",4,"ngIf"],[1,"mt-3"],[1,"card","p-3","bg-light"],[1,"row","g-3","mb-3"],[1,"col-md-4"],["for","actionType"],["type","text","id","actionType","placeholder","Search by action type...",1,"form-control",3,"ngModel","ngModelChange","input"],["for","startDate"],["type","datetime-local","id","startDate",1,"form-control",3,"ngModel","ngModelChange","change"],["for","endDate"],["type","datetime-local","id","endDate",1,"form-control",3,"ngModel","ngModelChange","change"],[1,"table-responsive"],[1,"table"],[1,"scroll-container",2,"max-height","500px","overflow-y","auto","padding","10px","border","1px solid #ddd"],[4,"ngFor","ngForOf"],["colspan","3",1,"text-center"],[1,"row","g-3"],["placeholder","Search all logs Actions",1,"form-control","mb-3",3,"ngModel","ngModelChange","change"],["type","datetime",1,"form-control","mb-3",3,"ngModel","ngModelChange","change"],[1,"table-container"]],template:function(e,i){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"My Profile"),t.qZA(),t.TgZ(2,"h2"),t._uU(3,"Account Details"),t.qZA(),t.YNc(4,Z,22,5,"div",1),t.YNc(5,T,7,2,"div",2),t.TgZ(6,"div",3)(7,"div",4)(8,"h3"),t._uU(9,"Activity Logs"),t.qZA(),t.TgZ(10,"button",5),t.NdJ("click",function(){return i.toggleActivityLogs()}),t._uU(11),t.qZA()(),t.YNc(12,U,57,5,"div",6),t.qZA(),t.YNc(13,y,7,2,"div",2)),2&e&&(t.xp6(4),t.Q6J("ngIf",i.account),t.xp6(1),t.Q6J("ngIf",i.isManager()),t.xp6(6),t.hij(" ",i.showActivityLogs?"Hide Activity Logs":"Show Activity Logs"," "),t.xp6(1),t.Q6J("ngIf",i.showActivityLogs),t.xp6(1),t.Q6J("ngIf",i.isAdmin()))},dependencies:[l.sg,l.O5,a.Fj,a.JJ,d.rH,a.On,l.i8,l.uU],encapsulation:2}),n})();var f=c(590),N=c(5843);function D(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Title is required"),t.qZA())}function M(n,o){if(1&n&&(t.TgZ(0,"div",25),t.YNc(1,D,2,0,"div",26),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.title.errors.required)}}function J(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"First Name is required"),t.qZA())}function L(n,o){if(1&n&&(t.TgZ(0,"div",25),t.YNc(1,J,2,0,"div",26),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.firstName.errors.required)}}function I(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Last Name is required"),t.qZA())}function S(n,o){if(1&n&&(t.TgZ(0,"div",25),t.YNc(1,I,2,0,"div",26),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.lastName.errors.required)}}function Q(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Email is required"),t.qZA())}function Y(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Email must be a valid email address"),t.qZA())}function P(n,o){if(1&n&&(t.TgZ(0,"div",25),t.YNc(1,Q,2,0,"div",26),t.YNc(2,Y,2,0,"div",26),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.email.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.email.errors.email)}}function B(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"phoneNumber is required"),t.qZA())}function k(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Phone Number must be a valid Philippine mobile number (e.g., 09123456789)"),t.qZA())}function E(n,o){if(1&n&&(t.TgZ(0,"div",25),t.YNc(1,B,2,0,"div",26),t.YNc(2,k,2,0,"div",26),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.phoneNumber.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.phoneNumber.errors.pattern)}}function K(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function H(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Password must be at least 6 characters"),t.qZA())}function F(n,o){if(1&n&&(t.TgZ(0,"div",25),t.YNc(1,K,2,0,"div",26),t.YNc(2,H,2,0,"div",26),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.password.errors.minlength)}}function G(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Confirm Password is required"),t.qZA())}function O(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Passwords must match"),t.qZA())}function j(n,o){if(1&n&&(t.TgZ(0,"div",25),t.YNc(1,G,2,0,"div",26),t.YNc(2,O,2,0,"div",26),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.confirmPassword.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.confirmPassword.errors.mustMatch)}}function R(n,o){1&n&&t._UZ(0,"span",27)}function V(n,o){1&n&&t._UZ(0,"span",27)}const u=function(n){return{"is-invalid":n}},z=[{path:"",component:v,children:[{path:"",component:w},{path:"update",component:(()=>{class n{constructor(e,i,r,s,m){this.formBuilder=e,this.route=i,this.router=r,this.accountService=s,this.alertService=m,this.account=this.accountService.accountValue,this.submitting=!1,this.submitted=!1,this.deleting=!1}ngOnInit(){this.form=this.formBuilder.group({title:[this.account.title,a.kI.required],firstName:[this.account.firstName,a.kI.required],lastName:[this.account.lastName,a.kI.required],email:[this.account.email,[a.kI.required,a.kI.email]],phoneNumber:[this.account.phoneNumber,[a.kI.required,a.kI.pattern(/^(09|\+639)\d{9}$/)]],password:["",[a.kI.minLength(6)]],confirmPassword:[""]},{validator:(0,N.Yf)("password","confirmPassword")})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.accountService.update(this.account.id,this.form.value).pipe((0,f.P)()).subscribe({next:()=>{this.alertService.success("Update successful",{keepAfterRouteChange:!0}),this.router.navigate(["../"],{relativeTo:this.route})},error:e=>{this.alertService.error(e),this.submitting=!1}}))}onDelete(){confirm("Are you sure?")&&(this.deleting=!0,this.accountService.delete(this.account.id).pipe((0,f.P)()).subscribe(()=>{this.alertService.success("Account deleted successfully",{keepAfterRouteChange:!0})}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.qu),t.Y36(d.gz),t.Y36(d.F0),t.Y36(p.BR),t.Y36(p.c9))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:62,vars:33,consts:[[3,"formGroup","ngSubmit"],[1,"row"],[1,"mb-3","col-2"],[1,"form-label"],["formControlName","title",1,"form-select",3,"ngClass"],["value",""],["value","Mr"],["value","Mrs"],["value","Miss"],["value","Ms"],["class","invalid-feedback",4,"ngIf"],[1,"mb-3","col-5"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],[1,"mb-3"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["type","text","formControlName","phoneNumber",1,"form-control",3,"ngClass"],[1,"pt-3"],[1,"mb-3","col"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-primary","me-2",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["type","button",1,"btn","btn-danger",3,"disabled","click"],["routerLink","../","href","",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(e,i){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Update Profile"),t.qZA(),t.TgZ(2,"form",0),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(3,"div",1)(4,"div",2)(5,"label",3),t._uU(6,"Title"),t.qZA(),t.TgZ(7,"select",4),t._UZ(8,"option",5),t.TgZ(9,"option",6),t._uU(10,"Mr"),t.qZA(),t.TgZ(11,"option",7),t._uU(12,"Mrs"),t.qZA(),t.TgZ(13,"option",8),t._uU(14,"Miss"),t.qZA(),t.TgZ(15,"option",9),t._uU(16,"Ms"),t.qZA()(),t.YNc(17,M,2,1,"div",10),t.qZA(),t.TgZ(18,"div",11)(19,"label",3),t._uU(20,"First Name"),t.qZA(),t._UZ(21,"input",12),t.YNc(22,L,2,1,"div",10),t.qZA(),t.TgZ(23,"div",11)(24,"label",3),t._uU(25,"Last Name"),t.qZA(),t._UZ(26,"input",13),t.YNc(27,S,2,1,"div",10),t.qZA()(),t.TgZ(28,"div",14)(29,"label",3),t._uU(30,"Email"),t.qZA(),t._UZ(31,"input",15),t.YNc(32,P,3,2,"div",10),t.qZA(),t.TgZ(33,"div",14)(34,"label",3),t._uU(35,"phoneNumber"),t.qZA(),t._UZ(36,"input",16),t.YNc(37,E,3,2,"div",10),t.qZA(),t.TgZ(38,"h3",17),t._uU(39,"Change Password"),t.qZA(),t.TgZ(40,"p"),t._uU(41,"Leave blank to keep the same password"),t.qZA(),t.TgZ(42,"div",1)(43,"div",18)(44,"label",3),t._uU(45,"Password"),t.qZA(),t._UZ(46,"input",19),t.YNc(47,F,3,2,"div",10),t.qZA(),t.TgZ(48,"div",18)(49,"label",3),t._uU(50,"Confirm Password"),t.qZA(),t._UZ(51,"input",20),t.YNc(52,j,3,2,"div",10),t.qZA()(),t.TgZ(53,"div",14)(54,"button",21),t.YNc(55,R,1,0,"span",22),t._uU(56," Update "),t.qZA(),t.TgZ(57,"button",23),t.NdJ("click",function(){return i.onDelete()}),t.YNc(58,V,1,0,"span",22),t._uU(59," Delete "),t.qZA(),t.TgZ(60,"a",24),t._uU(61,"Cancel"),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("formGroup",i.form),t.xp6(5),t.Q6J("ngClass",t.VKq(19,u,i.submitted&&i.f.title.errors)),t.xp6(10),t.Q6J("ngIf",i.submitted&&i.f.title.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(21,u,i.submitted&&i.f.firstName.errors)),t.xp6(1),t.Q6J("ngIf",i.submitted&&i.f.firstName.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(23,u,i.submitted&&i.f.lastName.errors)),t.xp6(1),t.Q6J("ngIf",i.submitted&&i.f.lastName.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(25,u,i.submitted&&i.f.email.errors)),t.xp6(1),t.Q6J("ngIf",i.submitted&&i.f.email.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(27,u,i.submitted&&i.f.phoneNumber.errors)),t.xp6(1),t.Q6J("ngIf",i.submitted&&i.f.phoneNumber.errors),t.xp6(9),t.Q6J("ngClass",t.VKq(29,u,i.submitted&&i.f.password.errors)),t.xp6(1),t.Q6J("ngIf",i.submitted&&i.f.password.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(31,u,i.submitted&&i.f.confirmPassword.errors)),t.xp6(1),t.Q6J("ngIf",i.submitted&&i.f.confirmPassword.errors),t.xp6(2),t.Q6J("disabled",i.submitting),t.xp6(1),t.Q6J("ngIf",i.submitting),t.xp6(2),t.Q6J("disabled",i.deleting),t.xp6(1),t.Q6J("ngIf",i.deleting))},dependencies:[l.mk,l.O5,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.sg,a.u,d.rH],encapsulation:2}),n})()}]}];let X=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(z),d.Bz]}),n})(),$=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,a.UX,X,a.u5]}),n})()}}]);