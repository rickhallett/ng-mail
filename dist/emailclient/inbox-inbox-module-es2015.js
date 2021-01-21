(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inbox-inbox-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/email-create/email-create.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/email-create/email-create.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button (click)=\"showModal = true\" class=\"ui button inverted primary fluid\">\n  Compose\n</button>\n\n<app-modal (dismiss)=\"showModal = false\" *ngIf=\"showModal\">\n  <div modalTitle>Compose</div>\n  <app-email-form (emailSubmit)=\"onSubmit($event)\" [email]=\"email\">\n  </app-email-form>\n</app-modal>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/email-form/email-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/email-form/email-form.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onSubmit()\" class=\"ui form\" [formGroup]=\"emailForm\">\n  <app-input [control]=\"emailForm.get('to')\" inputType=\"email\" label=\"To\">\n  </app-input>\n\n  <app-input [control]=\"emailForm.get('from')\" inputType=\"email\" label=\"From\">\n  </app-input>\n\n  <app-input\n    [control]=\"emailForm.get('subject')\"\n    inputType=\"text\"\n    label=\"Subject\"\n  >\n  </app-input>\n\n  <app-input\n    controlType=\"textarea\"\n    [control]=\"emailForm.get('text')\"\n    label=\"Content\"\n  >\n  </app-input>\n\n  <button class=\"ui button primary\">Send</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/email-index/email-index.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/email-index/email-index.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui celled list\">\n  <div class=\"item\" *ngFor=\"let email of emails\">\n    <a [routerLink]=\"email.id\" routerLinkActive=\"active\">\n      <div class=\"content\">\n        <div class=\"header trim\">\n          {{ email.subject }}\n        </div>\n        <p class=\"trim\">\n          {{ email.from }}\n        </p>\n      </div>\n    </a>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/email-reply/email-reply.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/email-reply/email-reply.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button (click)=\"showModal = true\" class=\"ui button primary\">\n  Reply\n</button>\n\n<app-modal *ngIf=\"showModal\" (dismiss)=\"showModal = false\">\n  <div modalTitle>Reply</div>\n\n  <app-email-form [email]=\"email\" (emailSubmit)=\"onSubmit($event)\">\n  </app-email-form>\n</app-modal>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/email-show/email-show.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/email-show/email-show.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n  <div>\n    <h3>{{ email.subject }}</h3>\n    <div>\n      From: <i>{{ email.from }}</i>\n    </div>\n    <div>\n      To: <i>{{ email.to }}</i>\n    </div>\n  </div>\n  <div>\n    <app-email-reply [email]=\"email\"></app-email-reply>\n  </div>\n</div>\n<div class=\"ui divider\"></div>\n<div [innerHTML]=\"email.html\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui grid stackable\">\n  <div class=\"five wide column\">\n    <app-email-create></app-email-create>\n    <app-email-index></app-email-index>\n  </div>\n  <div class=\"eleven wide column\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/not-found/not-found.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/not-found/not-found.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui placeholder segment\">\n  <div class=\"ui icon header\">\n    <i class=\"search icon\"></i>\n    Email not found\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/placeholder/placeholder.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/placeholder/placeholder.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui placeholder segment\">\n  <div class=\"ui icon header\">\n    <i class=\"envelope outline icon\"></i>\n    Select an email to get started\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/inbox/email-create/email-create.component.css":
/*!***************************************************************!*\
  !*** ./src/app/inbox/email-create/email-create.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ui.button.primary {\n  margin-bottom: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ib3gvZW1haWwtY3JlYXRlL2VtYWlsLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaW5ib3gvZW1haWwtY3JlYXRlL2VtYWlsLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLmJ1dHRvbi5wcmltYXJ5IHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/inbox/email-create/email-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/inbox/email-create/email-create.component.ts ***!
  \**************************************************************/
/*! exports provided: EmailCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailCreateComponent", function() { return EmailCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../email.service */ "./src/app/inbox/email.service.ts");




let EmailCreateComponent = class EmailCreateComponent {
    constructor(authService, emailService) {
        this.authService = authService;
        this.emailService = emailService;
        this.showModal = false;
        this.email = {
            id: '',
            to: '',
            subject: '',
            html: '',
            text: '',
            from: `${authService.username}@angular-email.com`
        };
    }
    ngOnInit() { }
    onSubmit(email) {
        this.emailService.sendEmail(email).subscribe(() => {
            this.showModal = false;
        });
    }
};
EmailCreateComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"] }
];
EmailCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./email-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/email-create/email-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./email-create.component.css */ "./src/app/inbox/email-create/email-create.component.css")).default]
    })
], EmailCreateComponent);



/***/ }),

/***/ "./src/app/inbox/email-form/email-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/inbox/email-form/email-form.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm94L2VtYWlsLWZvcm0vZW1haWwtZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/inbox/email-form/email-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/inbox/email-form/email-form.component.ts ***!
  \**********************************************************/
/*! exports provided: EmailFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailFormComponent", function() { return EmailFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let EmailFormComponent = class EmailFormComponent {
    constructor() {
        this.emailSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        const { subject, from, to, text } = this.email;
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](to, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: from, disabled: true }),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](subject, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](text, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    onSubmit() {
        if (this.emailForm.invalid) {
            return;
        }
        this.emailSubmit.emit(this.emailForm.value);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EmailFormComponent.prototype, "email", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EmailFormComponent.prototype, "emailSubmit", void 0);
EmailFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./email-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/email-form/email-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./email-form.component.css */ "./src/app/inbox/email-form/email-form.component.css")).default]
    })
], EmailFormComponent);



/***/ }),

/***/ "./src/app/inbox/email-index/email-index.component.css":
/*!*************************************************************!*\
  !*** ./src/app/inbox/email-index/email-index.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item a {\n  color: black;\n}\n\na.active {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\na.active:before {\n  content: '>';\n  font-size: 20px;\n  margin-right: 10px;\n}\n\n.content {\n  width: 90%;\n}\n\n.trim {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ib3gvZW1haWwtaW5kZXgvZW1haWwtaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHVCQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvaW5ib3gvZW1haWwtaW5kZXgvZW1haWwtaW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIGEge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmEuYWN0aXZlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5hLmFjdGl2ZTpiZWZvcmUge1xuICBjb250ZW50OiAnPic7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi50cmltIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/inbox/email-index/email-index.component.ts":
/*!************************************************************!*\
  !*** ./src/app/inbox/email-index/email-index.component.ts ***!
  \************************************************************/
/*! exports provided: EmailIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailIndexComponent", function() { return EmailIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../email.service */ "./src/app/inbox/email.service.ts");



let EmailIndexComponent = class EmailIndexComponent {
    constructor(emailService) {
        this.emailService = emailService;
        this.emails = [];
    }
    ngOnInit() {
        this.emailService.getEmails().subscribe(emails => {
            this.emails = emails;
        });
    }
};
EmailIndexComponent.ctorParameters = () => [
    { type: _email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"] }
];
EmailIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./email-index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/email-index/email-index.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./email-index.component.css */ "./src/app/inbox/email-index/email-index.component.css")).default]
    })
], EmailIndexComponent);



/***/ }),

/***/ "./src/app/inbox/email-reply/email-reply.component.css":
/*!*************************************************************!*\
  !*** ./src/app/inbox/email-reply/email-reply.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm94L2VtYWlsLXJlcGx5L2VtYWlsLXJlcGx5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/inbox/email-reply/email-reply.component.ts":
/*!************************************************************!*\
  !*** ./src/app/inbox/email-reply/email-reply.component.ts ***!
  \************************************************************/
/*! exports provided: EmailReplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailReplyComponent", function() { return EmailReplyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../email.service */ "./src/app/inbox/email.service.ts");



let EmailReplyComponent = class EmailReplyComponent {
    constructor(emailService) {
        this.emailService = emailService;
        this.showModal = false;
    }
    ngOnInit() {
        const text = this.email.text.replace(/\n/gi, '\n> ');
        this.email = Object.assign({}, this.email, { from: this.email.to, to: this.email.from, subject: `RE: ${this.email.subject}`, text: `\n\n\n-------- ${this.email.from} wrote:\n> ${text}` });
    }
    onSubmit(email) {
        this.emailService.sendEmail(email).subscribe(() => {
            this.showModal = false;
        });
    }
};
EmailReplyComponent.ctorParameters = () => [
    { type: _email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EmailReplyComponent.prototype, "email", void 0);
EmailReplyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-reply',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./email-reply.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/email-reply/email-reply.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./email-reply.component.css */ "./src/app/inbox/email-reply/email-reply.component.css")).default]
    })
], EmailReplyComponent);



/***/ }),

/***/ "./src/app/inbox/email-resolver.service.ts":
/*!*************************************************!*\
  !*** ./src/app/inbox/email-resolver.service.ts ***!
  \*************************************************/
/*! exports provided: EmailResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailResolverService", function() { return EmailResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email.service */ "./src/app/inbox/email.service.ts");






let EmailResolverService = class EmailResolverService {
    constructor(emailService, router) {
        this.emailService = emailService;
        this.router = router;
    }
    resolve(route) {
        const { id } = route.params;
        return this.emailService.getEmail(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => {
            this.router.navigateByUrl('/inbox/not-found');
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    }
};
EmailResolverService.ctorParameters = () => [
    { type: _email_service__WEBPACK_IMPORTED_MODULE_5__["EmailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EmailResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmailResolverService);



/***/ }),

/***/ "./src/app/inbox/email-show/email-show.component.css":
/*!***********************************************************!*\
  !*** ./src/app/inbox/email-show/email-show.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ib3gvZW1haWwtc2hvdy9lbWFpbC1zaG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9pbmJveC9lbWFpbC1zaG93L2VtYWlsLXNob3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/inbox/email-show/email-show.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/inbox/email-show/email-show.component.ts ***!
  \**********************************************************/
/*! exports provided: EmailShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailShowComponent", function() { return EmailShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let EmailShowComponent = class EmailShowComponent {
    constructor(route) {
        this.route = route;
        this.email = route.snapshot.data.email;
        this.route.data.subscribe(({ email }) => {
            this.email = email;
        });
    }
    ngOnInit() { }
};
EmailShowComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
EmailShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-show',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./email-show.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/email-show/email-show.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./email-show.component.css */ "./src/app/inbox/email-show/email-show.component.css")).default]
    })
], EmailShowComponent);



/***/ }),

/***/ "./src/app/inbox/email.service.ts":
/*!****************************************!*\
  !*** ./src/app/inbox/email.service.ts ***!
  \****************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EmailService = class EmailService {
    constructor(http) {
        this.http = http;
        this.rootUrl = 'https://api.angular-email.com';
    }
    getEmails() {
        return this.http.get(`${this.rootUrl}/emails`);
    }
    getEmail(id) {
        return this.http.get(`${this.rootUrl}/emails/${id}`);
    }
    sendEmail(email) {
        return this.http.post(`${this.rootUrl}/emails`, email);
    }
};
EmailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmailService);



/***/ }),

/***/ "./src/app/inbox/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/inbox/home/home.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm94L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/inbox/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/inbox/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/inbox/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/inbox/inbox-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/inbox/inbox-routing.module.ts ***!
  \***********************************************/
/*! exports provided: InboxRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxRoutingModule", function() { return InboxRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/inbox/home/home.component.ts");
/* harmony import */ var _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeholder/placeholder.component */ "./src/app/inbox/placeholder/placeholder.component.ts");
/* harmony import */ var _email_show_email_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-show/email-show.component */ "./src/app/inbox/email-show/email-show.component.ts");
/* harmony import */ var _email_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-resolver.service */ "./src/app/inbox/email-resolver.service.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/inbox/not-found/not-found.component.ts");








const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            {
                path: 'not-found',
                component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]
            },
            {
                path: ':id',
                component: _email_show_email_show_component__WEBPACK_IMPORTED_MODULE_5__["EmailShowComponent"],
                resolve: {
                    email: _email_resolver_service__WEBPACK_IMPORTED_MODULE_6__["EmailResolverService"]
                }
            },
            { path: '', component: _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_4__["PlaceholderComponent"] }
        ]
    }
];
let InboxRoutingModule = class InboxRoutingModule {
};
InboxRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], InboxRoutingModule);



/***/ }),

/***/ "./src/app/inbox/inbox.module.ts":
/*!***************************************!*\
  !*** ./src/app/inbox/inbox.module.ts ***!
  \***************************************/
/*! exports provided: InboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxModule", function() { return InboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inbox-routing.module */ "./src/app/inbox/inbox-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/inbox/home/home.component.ts");
/* harmony import */ var _email_create_email_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-create/email-create.component */ "./src/app/inbox/email-create/email-create.component.ts");
/* harmony import */ var _email_reply_email_reply_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email-reply/email-reply.component */ "./src/app/inbox/email-reply/email-reply.component.ts");
/* harmony import */ var _email_index_email_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./email-index/email-index.component */ "./src/app/inbox/email-index/email-index.component.ts");
/* harmony import */ var _email_show_email_show_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./email-show/email-show.component */ "./src/app/inbox/email-show/email-show.component.ts");
/* harmony import */ var _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./placeholder/placeholder.component */ "./src/app/inbox/placeholder/placeholder.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/inbox/not-found/not-found.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./email-form/email-form.component */ "./src/app/inbox/email-form/email-form.component.ts");














let InboxModule = class InboxModule {
};
InboxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _email_create_email_create_component__WEBPACK_IMPORTED_MODULE_6__["EmailCreateComponent"],
            _email_reply_email_reply_component__WEBPACK_IMPORTED_MODULE_7__["EmailReplyComponent"],
            _email_index_email_index_component__WEBPACK_IMPORTED_MODULE_8__["EmailIndexComponent"],
            _email_show_email_show_component__WEBPACK_IMPORTED_MODULE_9__["EmailShowComponent"],
            _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_10__["PlaceholderComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
            _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_13__["EmailFormComponent"]
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _inbox_routing_module__WEBPACK_IMPORTED_MODULE_4__["InboxRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
    })
], InboxModule);



/***/ }),

/***/ "./src/app/inbox/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/inbox/not-found/not-found.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm94L25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/inbox/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/inbox/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/inbox/not-found/not-found.component.css")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/inbox/placeholder/placeholder.component.css":
/*!*************************************************************!*\
  !*** ./src/app/inbox/placeholder/placeholder.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm94L3BsYWNlaG9sZGVyL3BsYWNlaG9sZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/inbox/placeholder/placeholder.component.ts":
/*!************************************************************!*\
  !*** ./src/app/inbox/placeholder/placeholder.component.ts ***!
  \************************************************************/
/*! exports provided: PlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderComponent", function() { return PlaceholderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PlaceholderComponent = class PlaceholderComponent {
    constructor() { }
    ngOnInit() {
    }
};
PlaceholderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-placeholder',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./placeholder.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/placeholder/placeholder.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./placeholder.component.css */ "./src/app/inbox/placeholder/placeholder.component.css")).default]
    })
], PlaceholderComponent);



/***/ })

}]);
//# sourceMappingURL=inbox-inbox-module-es2015.js.map