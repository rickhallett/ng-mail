(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{JybH:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),i=function(){return function(){}}(),e=u("pMnS"),o=function(){function l(l){this.el=l,this.dismiss=new t.m}return l.prototype.ngOnInit=function(){document.body.appendChild(this.el.nativeElement)},l.prototype.ngOnDestroy=function(){this.el.nativeElement.remove()},l.prototype.onDismissClick=function(){this.dismiss.emit()},l}(),a=t.nb({encapsulation:0,styles:[[".actions-default[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]:empty{display:none}.actions[_ngcontent-%COMP%]:empty + .actions-default[_ngcontent-%COMP%]{display:block}"]],data:{}});function r(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,11,"div",[["class","ui dimmer visible active"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onDismissClick()&&t),t}),null,null)),(l()(),t.pb(1,0,null,null,10,"div",[["class","ui modal visible active"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==u.stopPropagation()&&t),t}),null,null)),(l()(),t.pb(2,0,null,null,0,"i",[["class","close icon"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onDismissClick()&&t),t}),null,null)),(l()(),t.pb(3,0,null,null,1,"div",[["class","header"]],null,null,null,null,null)),t.zb(null,0),(l()(),t.pb(5,0,null,null,1,"div",[["class","content"]],null,null,null,null,null)),t.zb(null,1),(l()(),t.pb(7,0,null,null,2,"div",[["class","actions actions-default"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,1,"button",[["class","ui button primary"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onDismissClick()&&t),t}),null,null)),(l()(),t.Gb(-1,null,["Ok"])),(l()(),t.pb(10,0,null,null,1,"div",[["class","actions"]],null,null,null,null,null)),t.zb(null,2)],null,null)}var c=u("gIcY"),s=u("KOzq"),b=u("9odQ"),p=function(){function l(){this.emailSubmit=new t.m}return l.prototype.ngOnInit=function(){var l=this.email,n=l.subject,u=l.from,t=l.text;this.emailForm=new c.g({to:new c.e(l.to,[c.n.required,c.n.email]),from:new c.e({value:u,disabled:!0}),subject:new c.e(n,[c.n.required]),text:new c.e(t,[c.n.required])})},l.prototype.onSubmit=function(){this.emailForm.invalid||this.emailSubmit.emit(this.emailForm.value)},l}(),m=t.nb({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,14,"form",[["class","ui form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0,e=l.component;return"submit"===n&&(i=!1!==t.Ab(l,2).onSubmit(u)&&i),"reset"===n&&(i=!1!==t.Ab(l,2).onReset()&&i),"ngSubmit"===n&&(i=!1!==e.onSubmit()&&i),i}),null,null)),t.ob(1,16384,null,0,c.r,[],null,null),t.ob(2,540672,null,0,c.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Db(2048,null,c.b,null,[c.h]),t.ob(4,16384,null,0,c.l,[[4,c.b]],null,null),(l()(),t.pb(5,0,null,null,1,"app-input",[["inputType","email"],["label","To"]],null,null,null,s.b,s.a)),t.ob(6,114688,null,0,b.a,[],{label:[0,"label"],control:[1,"control"],inputType:[2,"inputType"]},null),(l()(),t.pb(7,0,null,null,1,"app-input",[["inputType","email"],["label","From"]],null,null,null,s.b,s.a)),t.ob(8,114688,null,0,b.a,[],{label:[0,"label"],control:[1,"control"],inputType:[2,"inputType"]},null),(l()(),t.pb(9,0,null,null,1,"app-input",[["inputType","text"],["label","Subject"]],null,null,null,s.b,s.a)),t.ob(10,114688,null,0,b.a,[],{label:[0,"label"],control:[1,"control"],inputType:[2,"inputType"]},null),(l()(),t.pb(11,0,null,null,1,"app-input",[["controlType","textarea"],["label","Content"]],null,null,null,s.b,s.a)),t.ob(12,114688,null,0,b.a,[],{label:[0,"label"],control:[1,"control"],controlType:[2,"controlType"]},null),(l()(),t.pb(13,0,null,null,1,"button",[["class","ui button primary"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Send"]))],(function(l,n){var u=n.component;l(n,2,0,u.emailForm),l(n,6,0,"To",u.emailForm.get("to"),"email"),l(n,8,0,"From",u.emailForm.get("from"),"email"),l(n,10,0,"Subject",u.emailForm.get("subject"),"text"),l(n,12,0,"Content",u.emailForm.get("text"),"textarea")}),(function(l,n){l(n,0,0,t.Ab(n,4).ngClassUntouched,t.Ab(n,4).ngClassTouched,t.Ab(n,4).ngClassPristine,t.Ab(n,4).ngClassDirty,t.Ab(n,4).ngClassValid,t.Ab(n,4).ngClassInvalid,t.Ab(n,4).ngClassPending)}))}var d=u("Ip0R"),h=function(){function l(l,n){this.authService=l,this.emailService=n,this.showModal=!1,this.email={id:"",to:"",subject:"",html:"",text:"",from:l.username+"@angular-email.com"}}return l.prototype.ngOnInit=function(){},l.prototype.onSubmit=function(l){var n=this;this.emailService.sendEmail(l).subscribe((function(){n.showModal=!1}))},l}(),v=u("qXBG"),y=u("t/Na"),g=function(){function l(l){this.http=l,this.rootUrl="https://api.angular-email.com"}return l.prototype.getEmails=function(){return this.http.get(this.rootUrl+"/emails")},l.prototype.getEmail=function(l){return this.http.get(this.rootUrl+"/emails/"+l)},l.prototype.sendEmail=function(l){return this.http.post(this.rootUrl+"/emails",l)},l.ngInjectableDef=t.Mb({factory:function(){return new l(t.Nb(y.c))},token:l,providedIn:"root"}),l}(),k=t.nb({encapsulation:0,styles:[[".ui.button.primary[_ngcontent-%COMP%]{margin-bottom:1rem}"]],data:{}});function w(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,5,"app-modal",[],null,[[null,"dismiss"]],(function(l,n,u){var t=!0;return"dismiss"===n&&(t=0!=(l.component.showModal=!1)&&t),t}),r,a)),t.ob(1,245760,null,0,o,[t.k],null,{dismiss:"dismiss"}),(l()(),t.pb(2,0,null,0,1,"div",[["modalTitle",""]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Compose"])),(l()(),t.pb(4,0,null,1,1,"app-email-form",[],null,[[null,"emailSubmit"]],(function(l,n,u){var t=!0;return"emailSubmit"===n&&(t=!1!==l.component.onSubmit(u)&&t),t}),f,m)),t.ob(5,114688,null,0,p,[],{email:[0,"email"]},{emailSubmit:"emailSubmit"})],(function(l,n){var u=n.component;l(n,1,0),l(n,5,0,u.email)}),null)}function I(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"button",[["class","ui button inverted primary fluid"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.component.showModal=!0)&&t),t}),null,null)),(l()(),t.Gb(-1,null,[" Compose\n"])),(l()(),t.eb(16777216,null,null,1,null,w)),t.ob(3,16384,null,0,d.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.component.showModal)}),null)}var S=u("ZYCi"),C=function(){function l(l){this.emailService=l,this.emails=[]}return l.prototype.ngOnInit=function(){var l=this;this.emailService.getEmails().subscribe((function(n){l.emails=n}))},l}(),M=t.nb({encapsulation:0,styles:[[".item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}a.active[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center}a.active[_ngcontent-%COMP%]:before{content:'>';font-size:20px;margin-right:10px}.content[_ngcontent-%COMP%]{width:90%}.trim[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:100%}"]],data:{}});function x(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,10,"div",[["class","item"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,9,"a",[["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Ab(l,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&i),i}),null,null)),t.ob(2,671744,[[2,4]],0,S.n,[S.k,S.a,d.h],{routerLink:[0,"routerLink"]},null),t.ob(3,1720320,null,2,S.m,[S.k,t.k,t.B,[2,S.l],[2,S.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Eb(603979776,1,{links:1}),t.Eb(603979776,2,{linksWithHrefs:1}),(l()(),t.pb(6,0,null,null,4,"div",[["class","content"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,1,"div",[["class","header trim"]],null,null,null,null,null)),(l()(),t.Gb(8,null,[" "," "])),(l()(),t.pb(9,0,null,null,1,"p",[["class","trim"]],null,null,null,null,null)),(l()(),t.Gb(10,null,[" "," "]))],(function(l,n){l(n,2,0,n.context.$implicit.id),l(n,3,0,"active")}),(function(l,n){l(n,1,0,t.Ab(n,2).target,t.Ab(n,2).href),l(n,8,0,n.context.$implicit.subject),l(n,10,0,n.context.$implicit.from)}))}function O(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,2,"div",[["class","ui celled list"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,x)),t.ob(2,278528,null,0,d.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.emails)}),null)}var j=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),G=t.nb({encapsulation:0,styles:[[""]],data:{}});function T(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,8,"div",[["class","ui grid stackable"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,4,"div",[["class","five wide column"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"app-email-create",[],null,null,null,I,k)),t.ob(3,114688,null,0,h,[v.a,g],null,null),(l()(),t.pb(4,0,null,null,1,"app-email-index",[],null,null,null,O,M)),t.ob(5,114688,null,0,C,[g],null,null),(l()(),t.pb(6,0,null,null,2,"div",[["class","eleven wide column"]],null,null,null,null,null)),(l()(),t.pb(7,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.ob(8,212992,null,0,S.p,[S.b,t.M,t.j,[8,null],t.h],null,null)],(function(l,n){l(n,3,0),l(n,5,0),l(n,8,0)}),null)}function P(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"app-home",[],null,null,null,T,G)),t.ob(1,114688,null,0,j,[],null,null)],(function(l,n){l(n,1,0)}),null)}var A=t.lb("app-home",j,P,{},{},[]),F=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),_=t.nb({encapsulation:0,styles:[[""]],data:{}});function E(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,3,"div",[["class","ui placeholder segment"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"div",[["class","ui icon header"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,0,"i",[["class","search icon"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,[" Email not found "]))],null,null)}function D(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"app-not-found",[],null,null,null,E,_)),t.ob(1,114688,null,0,F,[],null,null)],(function(l,n){l(n,1,0)}),null)}var J=t.lb("app-not-found",F,D,{},{},[]),q=u("mrSG"),L=function(){function l(l){this.emailService=l,this.showModal=!1}return l.prototype.ngOnInit=function(){var l=this.email.text.replace(/\n/gi,"\n> ");this.email=q.__assign({},this.email,{from:this.email.to,to:this.email.from,subject:"RE: "+this.email.subject,text:"\n\n\n-------- "+this.email.from+" wrote:\n> "+l})},l.prototype.onSubmit=function(l){var n=this;this.emailService.sendEmail(l).subscribe((function(){n.showModal=!1}))},l}(),N=t.nb({encapsulation:0,styles:[[""]],data:{}});function U(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,5,"app-modal",[],null,[[null,"dismiss"]],(function(l,n,u){var t=!0;return"dismiss"===n&&(t=0!=(l.component.showModal=!1)&&t),t}),r,a)),t.ob(1,245760,null,0,o,[t.k],null,{dismiss:"dismiss"}),(l()(),t.pb(2,0,null,0,1,"div",[["modalTitle",""]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Reply"])),(l()(),t.pb(4,0,null,1,1,"app-email-form",[],null,[[null,"emailSubmit"]],(function(l,n,u){var t=!0;return"emailSubmit"===n&&(t=!1!==l.component.onSubmit(u)&&t),t}),f,m)),t.ob(5,114688,null,0,p,[],{email:[0,"email"]},{emailSubmit:"emailSubmit"})],(function(l,n){var u=n.component;l(n,1,0),l(n,5,0,u.email)}),null)}function z(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"button",[["class","ui button primary"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.component.showModal=!0)&&t),t}),null,null)),(l()(),t.Gb(-1,null,[" Reply\n"])),(l()(),t.eb(16777216,null,null,1,null,U)),t.ob(3,16384,null,0,d.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.component.showModal)}),null)}var R=function(){function l(l){var n=this;this.route=l,this.email=l.snapshot.data.email,this.route.data.subscribe((function(l){n.email=l.email}))}return l.prototype.ngOnInit=function(){},l}(),K=t.nb({encapsulation:0,styles:[[".header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;flex-wrap:wrap}"]],data:{}});function B(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,14,"div",[["class","header"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Gb(3,null,["",""])),(l()(),t.pb(4,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,[" From: "])),(l()(),t.pb(6,0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t.Gb(7,null,["",""])),(l()(),t.pb(8,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,[" To: "])),(l()(),t.pb(10,0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t.Gb(11,null,["",""])),(l()(),t.pb(12,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.pb(13,0,null,null,1,"app-email-reply",[],null,null,null,z,N)),t.ob(14,114688,null,0,L,[g],{email:[0,"email"]},null),(l()(),t.pb(15,0,null,null,0,"div",[["class","ui divider"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],(function(l,n){l(n,14,0,n.component.email)}),(function(l,n){var u=n.component;l(n,3,0,u.email.subject),l(n,7,0,u.email.from),l(n,11,0,u.email.to),l(n,16,0,u.email.html)}))}function H(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"app-email-show",[],null,null,null,B,K)),t.ob(1,114688,null,0,R,[S.a],null,null)],(function(l,n){l(n,1,0)}),null)}var $=t.lb("app-email-show",R,H,{},{},[]),X=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),Y=t.nb({encapsulation:0,styles:[[""]],data:{}});function Z(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,3,"div",[["class","ui placeholder segment"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"div",[["class","ui icon header"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,0,"i",[["class","envelope outline icon"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,[" Select an email to get started "]))],null,null)}function Q(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"app-placeholder",[],null,null,null,Z,Y)),t.ob(1,114688,null,0,X,[],null,null)],(function(l,n){l(n,1,0)}),null)}var V=t.lb("app-placeholder",X,Q,{},{},[]),W=u("G5J1"),ll=u("9Z1F"),nl=function(){function l(l,n){this.emailService=l,this.router=n}return l.prototype.resolve=function(l){var n=this;return this.emailService.getEmail(l.params.id).pipe(Object(ll.a)((function(){return n.router.navigateByUrl("/inbox/not-found"),W.a})))},l.ngInjectableDef=t.Mb({factory:function(){return new l(t.Nb(g),t.Nb(S.k))},token:l,providedIn:"root"}),l}(),ul=function(){return function(){}}(),tl=u("PCNd");u.d(n,"InboxModuleNgFactory",(function(){return il}));var il=t.mb(i,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[e.a,A,J,$,V]],[3,t.j],t.v]),t.yb(4608,d.l,d.k,[t.s,[2,d.r]]),t.yb(4608,c.d,c.d,[]),t.yb(4608,c.p,c.p,[]),t.yb(1073742336,d.c,d.c,[]),t.yb(1073742336,S.o,S.o,[[2,S.t],[2,S.k]]),t.yb(1073742336,ul,ul,[]),t.yb(1073742336,c.o,c.o,[]),t.yb(1073742336,c.m,c.m,[]),t.yb(1073742336,tl.a,tl.a,[]),t.yb(1073742336,i,i,[]),t.yb(1024,S.i,(function(){return[[{path:"",component:j,children:[{path:"not-found",component:F},{path:":id",component:R,resolve:{email:nl}},{path:"",component:X}]}]]}),[])])}))}}]);