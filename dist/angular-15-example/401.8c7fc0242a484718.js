"use strict";(self.webpackChunkangular_15_example=self.webpackChunkangular_15_example||[]).push([[401],{6401:(tt,f,s)=>{s.r(f),s.d(f,{ProductsModule:()=>W});var n=s(433),l=s(6895),a=s(7859),u=s(590),t=s(8256),p=s(4786);function v(i,o){1&i&&(t.TgZ(0,"div",24)(1,"a",25),t._uU(2,"Create Product"),t.qZA()())}function b(i,o){if(1&i&&(t.TgZ(0,"div",35)(1,"p")(2,"strong"),t._uU(3,"Available:"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"p")(6,"strong"),t._uU(7,"Quantity:"),t.qZA(),t._uU(8),t.qZA()()),2&i){const e=t.oxw(3);t.xp6(4),t.hij(" ",e.availabilityInfo.available?"Yes":"No",""),t.xp6(4),t.hij(" ",e.availabilityInfo.quantity,"")}}function Z(i,o){1&i&&(t.TgZ(0,"div",17)(1,"a",36),t._uU(2,"Order"),t.qZA()())}function h(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",27)(1,"div",28)(2,"div",29)(3,"h5",30),t._uU(4),t.qZA(),t.TgZ(5,"p",31),t._uU(6),t.qZA(),t.TgZ(7,"p",31),t._uU(8),t.qZA(),t.TgZ(9,"button",32),t.NdJ("click",function(){const c=t.CHM(e).$implicit,m=t.oxw(2);return t.KtG(m.getAvailabilityInfo(c.id))}),t._uU(10," Check Availability "),t.qZA(),t.YNc(11,b,9,2,"div",33),t.YNc(12,Z,3,0,"div",34),t.qZA()()()}if(2&i){const e=o.$implicit,r=t.oxw(2);t.xp6(4),t.hij("Product Name: ",e.name,""),t.xp6(2),t.hij("Price: \u20b1",e.price,""),t.xp6(2),t.hij("Status: ",e.productStatus,""),t.xp6(3),t.Q6J("ngIf",r.availabilityInfo&&r.availabilityInfo.product===e.id),t.xp6(1),t.Q6J("ngIf",r.isUser)}}function x(i,o){if(1&i&&(t.TgZ(0,"div",2),t.YNc(1,h,13,5,"div",26),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.products)}}function P(i,o){if(1&i&&(t.TgZ(0,"div",35)(1,"p")(2,"strong"),t._uU(3,"Available:"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"p")(6,"strong"),t._uU(7,"Quantity:"),t.qZA(),t._uU(8),t.qZA()()),2&i){const e=t.oxw(4);t.xp6(4),t.hij(" ",e.availabilityInfo.available?"Yes":"No",""),t.xp6(4),t.hij(" ",e.availabilityInfo.quantity,"")}}function A(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"td")(1,"button",44),t.NdJ("click",function(){t.CHM(e);const d=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.getAvailabilityInfo(d.id))}),t._uU(2," Check Availability "),t.qZA(),t.YNc(3,P,9,2,"div",33),t.qZA()}if(2&i){const e=t.oxw().$implicit,r=t.oxw(2);t.xp6(3),t.Q6J("ngIf",r.availabilityInfo&&r.availabilityInfo.product===e.id)}}function T(i,o){1&i&&t._UZ(0,"span",49)}const q=function(i,o){return{"btn-success":i,"btn-danger":o}};function I(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"td",45)(1,"a",46),t._uU(2,"Edit"),t.qZA(),t.TgZ(3,"button",47),t.NdJ("click",function(){t.CHM(e);const d=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.toggleDeactivateReactivateProduct(d.id))}),t.YNc(4,T,1,0,"span",48),t._uU(5),t.qZA()()}if(2&i){const e=t.oxw().$implicit,r=t.oxw(2);t.xp6(1),t.MGl("routerLink","edit/",e.id,""),t.xp6(2),t.Q6J("ngClass",t.WLB(5,q,"deactivated"===e.productStatus,"deactivated"!==e.productStatus))("disabled",r.deactivatingProductId===e.id||r.reactivatingProductId===e.id),t.xp6(1),t.Q6J("ngIf",r.deactivatingProductId===e.id||r.reactivatingProductId===e.id),t.xp6(1),t.hij(" ","deactivated"===e.productStatus?"Reactivate":"Deactivate"," ")}}function C(i,o){if(1&i&&(t.TgZ(0,"tr")(1,"td",42),t._uU(2),t.qZA(),t.TgZ(3,"td",42),t._uU(4),t.qZA(),t.TgZ(5,"td",42),t._uU(6),t.qZA(),t.YNc(7,A,4,1,"td",41),t.YNc(8,I,6,8,"td",43),t.qZA()),2&i){const e=o.$implicit,r=t.oxw(2);t.xp6(2),t.Oqu(e.name),t.xp6(2),t.hij("\u20b1",e.price,""),t.xp6(2),t.Oqu(e.productStatus),t.xp6(1),t.Q6J("ngIf",r.isUser),t.xp6(1),t.Q6J("ngIf",r.isAdminManager)}}function U(i,o){1&i&&(t.TgZ(0,"tr")(1,"td",50),t._UZ(2,"span",51),t.qZA()())}function y(i,o){if(1&i&&(t.TgZ(0,"table",37)(1,"thead")(2,"tr")(3,"th",38),t._uU(4,"Product Name"),t.qZA(),t.TgZ(5,"th",39),t._uU(6,"Price"),t.qZA(),t.TgZ(7,"th",39),t._uU(8,"Status"),t.qZA(),t._UZ(9,"th",38)(10,"th",38),t.qZA()(),t.TgZ(11,"tbody"),t.YNc(12,C,9,5,"tr",40),t.YNc(13,U,3,0,"tr",41),t.qZA()()),2&i){const e=t.oxw();t.xp6(12),t.Q6J("ngForOf",e.products),t.xp6(1),t.Q6J("ngIf",!e.products||0===e.products.length)}}function J(i,o){if(1&i&&(t.TgZ(0,"option",52),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function S(i,o){if(1&i&&(t.TgZ(0,"div",53)(1,"strong"),t._uU(2,"Error:"),t.qZA(),t._uU(3),t.qZA()),2&i){const e=t.oxw();t.xp6(3),t.hij(" ",e.errorMessage," ")}}function Q(i,o){if(1&i&&(t.TgZ(0,"div",54)(1,"h4"),t._uU(2,"Product Information"),t.qZA(),t.TgZ(3,"p")(4,"strong"),t._uU(5,"Name:"),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"p")(8,"strong"),t._uU(9,"Price:"),t.qZA(),t._uU(10),t.qZA(),t.TgZ(11,"p")(12,"strong"),t._uU(13,"Status:"),t.qZA(),t._uU(14),t.qZA(),t.TgZ(15,"h5"),t._uU(16,"Description"),t.qZA(),t.TgZ(17,"p"),t._uU(18),t.qZA()()),2&i){const e=t.oxw();t.xp6(6),t.hij(" ",e.productDetails.name,""),t.xp6(4),t.hij(" \u20b1",e.productDetails.price,""),t.xp6(4),t.hij(" ",e.productDetails.productStatus,""),t.xp6(4),t.Oqu(e.productDetails.description)}}let N=(()=>{class i{constructor(e,r,d){this.productService=e,this.accountService=r,this.alertService=d,this.products=[],this.deactivatingProductId=null,this.reactivatingProductId=null,this.deletingProductId=null,this.selectedProductId="",this.errorMessage="",this.isAdminManager=!1,this.isUser=!1}ngOnInit(){const e=this.accountService.accountValue;this.isAdminManager="Admin"===e?.role||"Staff"===e?.role,this.isUser="User"===e?.role,this.productService.getProduct().pipe((0,u.P)()).subscribe(c=>this.products=c)}toggleDeactivateReactivateProduct(e){const r=this.products.find(d=>d.id===e);r?"deactivated"===r.productStatus?this.reactivateProduct(e,r):this.deactivateProduct(e,r):this.alertService.error("Product not found")}deactivateProduct(e,r){this.deactivatingProductId=e,this.productService.deactivateProduct(e).pipe((0,u.P)()).subscribe({next:()=>{r.productStatus="deactivated",this.deactivatingProductId=null,this.alertService.success("Product deactivated successfully")},error:d=>{this.deactivatingProductId=null,console.error("Error deactivating product:",d),this.alertService.error(d)}})}reactivateProduct(e,r){this.reactivatingProductId=e,this.productService.reactivateProduct(e).pipe((0,u.P)()).subscribe({next:()=>{r.productStatus="active",this.reactivatingProductId=null,this.alertService.success("Product reactivated successfully")},error:()=>{this.reactivatingProductId=null,this.alertService.error("Error reactivating product")}})}openProductDetailsModal(){const e=document.getElementById("productDetailsModal");e&&new bootstrap.Modal(e).show()}getProductDetails(){this.errorMessage="",this.selectedProductId?this.productService.getProductById(this.selectedProductId).pipe((0,u.P)()).subscribe({next:e=>{this.productDetails=e,this.errorMessage=""},error:()=>{this.alertService.error("Error fetching product details")}}):this.alertService.error("Please select a product")}getAvailabilityInfo(e){this.productService.checkAvailability(e).pipe((0,u.P)()).subscribe({next:r=>{this.availabilityInfo={product:e,available:r.available,quantity:r.quantity}},error:()=>{this.alertService.error("Error fetching availability information")}})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.M5),t.Y36(p.BR),t.Y36(p.c9))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],decls:34,vars:8,consts:[[1,"p-4"],[1,"container"],[1,"row"],["class","col",4,"ngIf"],[1,"col-auto"],["type","button",1,"btn","btn-info","mb-2",3,"click"],["class","row",4,"ngIf"],["class","table table-striped",4,"ngIf"],["id","productDetailsModal","tabindex","-1","aria-labelledby","productDetailsModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","productDetailsModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[3,"ngSubmit"],["productDetailsForm","ngForm"],[1,"mb-3"],["for","productSelect",1,"form-label"],["name","productSelect","required","",1,"form-select",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-primary",3,"disabled"],["class","alert alert-danger mt-4",4,"ngIf"],["class","mt-4",4,"ngIf"],[1,"col"],["routerLink","add","data-bs-toggle","modal",1,"btn","btn-sm","btn-success","mb-2"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"card","mb-4"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-info","mb-3",3,"click"],["class","text-success",4,"ngIf"],["class","mb-3",4,"ngIf"],[1,"text-success"],["routerLink","/order/management/add",1,"btn","btn-success"],[1,"table","table-striped"],[2,"width","30%"],[2,"width","20%"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"align-middle"],["style","white-space: nowrap",4,"ngIf"],[1,"btn","btn-info","me-2",3,"click"],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-primary","me-1",3,"routerLink"],[1,"btn","btn-sm",3,"ngClass","disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"],[3,"value"],[1,"alert","alert-danger","mt-4"],[1,"mt-4"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.TgZ(3,"h1"),t._uU(4,"Products"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"All products from secure (admin only) API endpoint:"),t.qZA(),t.TgZ(7,"div",1)(8,"div",2),t.YNc(9,v,3,0,"div",3),t.TgZ(10,"div",4)(11,"button",5),t.NdJ("click",function(){return r.openProductDetailsModal()}),t._uU(12,"Get Product Details"),t.qZA()()()(),t.YNc(13,x,2,1,"div",6),t.YNc(14,y,14,2,"table",7),t.qZA()(),t.TgZ(15,"div",8)(16,"div",9)(17,"div",10)(18,"div",11)(19,"h5",12),t._uU(20,"Product Details"),t.qZA(),t._UZ(21,"button",13),t.qZA(),t.TgZ(22,"div",14)(23,"form",15,16),t.NdJ("ngSubmit",function(){return r.getProductDetails()}),t.TgZ(25,"div",17)(26,"label",18),t._uU(27,"Select Product"),t.qZA(),t.TgZ(28,"select",19),t.NdJ("ngModelChange",function(c){return r.selectedProductId=c}),t.YNc(29,J,2,2,"option",20),t.qZA()(),t.TgZ(30,"button",21),t._uU(31,"Get Details"),t.qZA()(),t.YNc(32,S,4,1,"div",22),t.YNc(33,Q,19,4,"div",23),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("ngIf",r.isAdminManager),t.xp6(4),t.Q6J("ngIf",r.isUser),t.xp6(1),t.Q6J("ngIf",r.isAdminManager),t.xp6(14),t.Q6J("ngModel",r.selectedProductId),t.xp6(1),t.Q6J("ngForOf",r.products),t.xp6(1),t.Q6J("disabled",!r.selectedProductId),t.xp6(2),t.Q6J("ngIf",r.errorMessage),t.xp6(1),t.Q6J("ngIf",r.productDetails&&!r.errorMessage))},dependencies:[l.mk,l.sg,l.O5,n._Y,n.YN,n.Kr,n.EJ,n.JJ,n.JL,n.Q7,a.lC,a.rH,n.On,n.F],encapsulation:2}),i})();function Y(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"Product Name is required"),t.qZA())}function k(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"Name must be at least 3 characters"),t.qZA())}function L(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"Name cannot exceed 100 characters"),t.qZA())}function M(i,o){if(1&i&&(t.TgZ(0,"div",17),t.YNc(1,Y,2,0,"div",18),t.YNc(2,k,2,0,"div",18),t.YNc(3,L,2,0,"div",18),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.name.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.name.errors.minlength),t.xp6(1),t.Q6J("ngIf",e.f.name.errors.maxlength)}}function E(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"Description is required"),t.qZA())}function w(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"Description must be at least 3 characters"),t.qZA())}function D(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"Description cannot exceed 100 characters"),t.qZA())}function F(i,o){if(1&i&&(t.TgZ(0,"div",17),t.YNc(1,E,2,0,"div",18),t.YNc(2,w,2,0,"div",18),t.YNc(3,D,2,0,"div",18),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.description.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.description.errors.minlength),t.xp6(1),t.Q6J("ngIf",e.f.description.errors.maxlength)}}function O(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"bulkQuantity is required"),t.qZA())}function j(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"bulkQuantity must be a non-negative number"),t.qZA())}function B(i,o){if(1&i&&(t.TgZ(0,"div",17),t.YNc(1,O,2,0,"div",18),t.YNc(2,j,2,0,"div",18),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.bulkQuantity.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.bulkQuantity.errors.min)}}function G(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"Price is required"),t.qZA())}function K(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"Price must be a non-negative number"),t.qZA())}function R(i,o){if(1&i&&(t.TgZ(0,"div",17),t.YNc(1,G,2,0,"div",18),t.YNc(2,K,2,0,"div",18),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.price.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.price.errors.min)}}function $(i,o){1&i&&t._UZ(0,"span",19)}const _=function(i){return{"is-invalid":i}};function V(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"form",4),t.NdJ("ngSubmit",function(){t.CHM(e);const d=t.oxw();return t.KtG(d.onSubmit())}),t.TgZ(1,"div",5)(2,"div",6)(3,"label",7),t._uU(4,"Product Name"),t.qZA(),t._UZ(5,"input",8),t.YNc(6,M,4,3,"div",9),t.qZA(),t.TgZ(7,"div",6)(8,"label",7),t._uU(9,"Description"),t.qZA(),t._UZ(10,"input",10),t.YNc(11,F,4,3,"div",9),t.qZA()(),t.TgZ(12,"div",5)(13,"div",6)(14,"label",7),t._uU(15,"Quantity"),t.qZA(),t._UZ(16,"input",11),t.YNc(17,B,3,2,"div",9),t.TgZ(18,"div",6)(19,"label",7),t._uU(20,"Price"),t.qZA(),t._UZ(21,"input",12),t.YNc(22,R,3,2,"div",9),t.qZA()()(),t.TgZ(23,"div",13)(24,"button",14),t.YNc(25,$,1,0,"span",15),t._uU(26," Save "),t.qZA(),t.TgZ(27,"a",16),t._uU(28,"Cancel"),t.qZA()()()}if(2&i){const e=t.oxw();t.Q6J("formGroup",e.form),t.xp6(5),t.Q6J("ngClass",t.VKq(11,_,e.submitted&&e.f.name.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.name.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(13,_,e.submitted&&e.f.description.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.description.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(15,_,e.submitted&&e.f.bulkQuantity.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.bulkQuantity.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(17,_,e.submitted&&e.f.price.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.price.errors),t.xp6(2),t.Q6J("disabled",e.submitting),t.xp6(1),t.Q6J("ngIf",e.submitting)}}function H(i,o){1&i&&(t.TgZ(0,"div",20),t._UZ(1,"span",21),t.qZA())}let g=(()=>{class i{constructor(e,r,d,c,m){this.formBuilder=e,this.route=r,this.router=d,this.productService=c,this.alertService=m,this.loading=!1,this.submitting=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.form=this.formBuilder.group({name:["",[n.kI.required,n.kI.minLength(3),n.kI.maxLength(100)]],description:["",[n.kI.required,n.kI.minLength(3),n.kI.maxLength(100)]],price:[1,[n.kI.required,n.kI.min(0)]],bulkQuantity:[1,[n.kI.required,n.kI.min(0)]],productStatus:["active",n.kI.required]}),this.title="Create Product",this.id&&(this.title="Edit Product",this.loading=!0,this.productService.getProductById(this.id).pipe((0,u.P)()).subscribe({next:e=>{this.form.patchValue(e),this.loading=!1},error:()=>this.loading=!1}))}get f(){return this.form.controls}onSubmit(){if(this.submitted=!0,this.alertService.clear(),this.form.invalid)return;let e,r;this.submitting=!0,this.id?(e=()=>this.productService.updateProduct(this.id,this.form.value),r="Product updated successfully"):(e=()=>this.productService.createProduct(this.form.value),r="Product created successfully"),e().pipe((0,u.P)()).subscribe({next:()=>{this.alertService.success(r,{keepAfterRouteChange:!0}),this.router.navigateByUrl("/product")},error:d=>{this.alertService.error(d),this.submitting=!1}})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(n.qu),t.Y36(a.gz),t.Y36(a.F0),t.Y36(p.M5),t.Y36(p.c9))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],decls:7,vars:3,consts:[[1,"p-4"],[1,"container"],[3,"formGroup","ngSubmit",4,"ngIf"],["class","text-center m-5",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"mb-3","col-6"],[1,"form-label"],["type","text","formControlName","name",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","description",1,"form-control",3,"ngClass"],["type","number","formControlName","bulkQuantity",1,"form-control",3,"ngClass"],["type","number","formControlName","price",1,"form-control",3,"ngClass"],[1,"mb-3"],[1,"btn","btn-primary","me-2",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","/product",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"text-center","m-5"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"router-outlet")(3,"h1"),t._uU(4),t.qZA(),t.YNc(5,V,29,19,"form",2),t.YNc(6,H,2,0,"div",3),t.qZA()()()),2&e&&(t.xp6(4),t.Oqu(r.title),t.xp6(1),t.Q6J("ngIf",!r.loading),t.xp6(1),t.Q6J("ngIf",r.loading))},dependencies:[l.mk,l.O5,n._Y,n.Fj,n.wV,n.JJ,n.JL,n.sg,n.u,a.lC,a.rH],encapsulation:2}),i})();const z=[{path:"",component:N},{path:"add",component:g},{path:"edit/:id",component:g}];let X=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[a.Bz.forChild(z),a.Bz]}),i})(),W=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[l.ez,n.UX,X,n.u5]}),i})()}}]);