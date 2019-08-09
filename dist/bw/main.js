(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./success/success.component */ "./src/app/success/success.component.ts");
/* harmony import */ var _donate_donate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donate/donate.component */ "./src/app/donate/donate.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");











var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'navbar', component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"] },
    { path: 'successes', component: _success_success_component__WEBPACK_IMPORTED_MODULE_5__["SuccessComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] },
    { path: 'donate', component: _donate_donate_component__WEBPACK_IMPORTED_MODULE_6__["DonateComponent"] },
    { path: 'header', component: _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"] },
    { path: 'footer', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"] },
    { path: 'privacy', component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_9__["PrivacyComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n\n\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Bent Whisker Ranch';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./success/success.component */ "./src/app/success/success.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony import */ var _donate_donate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./donate/donate.component */ "./src/app/donate/donate.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_backend_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/backend.service */ "./src/app/service/backend.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _success_success_component__WEBPACK_IMPORTED_MODULE_10__["SuccessComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
                _donate_donate_component__WEBPACK_IMPORTED_MODULE_13__["DonateComponent"],
                _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_12__["PrivacyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]
            ],
            providers: [_service_backend_service__WEBPACK_IMPORTED_MODULE_15__["BackendService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-row main-container\">\n  <div class=\"flex-md-column mr-auto\">\n    <img src=\"assets/img/bw-block.png \" class=\"img-fluid float-left normal\" alt=\"Bent Whisker Ranch, LLC logo\">\n  </div>\n  <div class=\"flex-md-column mr-auto\">\n    <address>\n       <strong>Bent Whisker Ranch, LLC</strong>\n       <br>7540 Harper Rd.\n       <br>Joelton, TN 37080\n       <br><abbr title=\"Phone\">Ph:</abbr> +1 615 873 0108\n     </address>\n  </div>\n</div>\n       \n   \n     \n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/donate/donate.component.html":
/*!**********************************************!*\
  !*** ./src/app/donate/donate.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <p>Bent Whisker Ranch is a 501(c)3 organization whose mission is to treat and foster older cats and we need your help. We always need cat food and litter, but also other items for the care of those we care. For gifts in kind contact us for information.</p>\n      <p>Donations made here are secure and encrypted.</p>\n      <p>You will receive an acknoledgement to the email address you provide.</p>\n    </div>\n    <div class=\"col-sm\">\n      <div class=\"container-fluid\">\n      <form action=\"\" method=\"POST\" id=\"payment-form\" (submit)=\"getToken()\" >\n      <span class=\"payment-message\">{{message}}</span>\n\n      <div class=\"form-group\">\n        <label for=\"name\">Name on credit card</label>\n          <input [(ngModel)]=\"name\" name=\"name\" type=\"text\" id=\"name\" class=\"form-control form-control-sm\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"address1\">Address (card statements sent)</label>\n          <input [(ngModel)]=\"address1\" name=\"address1\" type=\"text\" class=\"form-control form-control-sm\" id=\"address1\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"zip\">Zip code</label>\n          <input [(ngModel)]=\"zip\" name=\"zip\" type=\"text\" class=\"form-control form-control-sm\" id=\"zip\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n          <input [(ngModel)]=\"email\" name=\"email\" type=\"text\" class=\"form-control form-control-sm\" id=\"email\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"amount\">Donation amount</label>\n          <input [(ngModel)]=\"amount\" name=\"amount\" type=\"text\" class=\"form-control form-control-sm\" id=\"amount\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"card-number\">Card Number</label>\n          <input [(ngModel)]=\"cardNumber\" name=\"card-number\" type=\"text\" class=\"form-control form-control-sm\" id=\"card-number\" data-stripe=\"number\">\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"row no-gutters\">\n          <label for=\"expiry\" class=\"col-8\">Expiration (MM/YY)</label>\n          \n          <label for=\"cvc\" class=\"col-3\">CVC</label>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-3\">\n            \n              <input [(ngModel)]=\"expiryMonth\" name=\"expiry-month\" type=\"text\" class=\"form-control form-control-sm\" id=\"expiry\" data-stripe=\"exp_month\">\n          </div>     \n          <div class=\"col-1\">\n                <span> / </span>\n          </div>\n         \n          <div class=\"col-3\">\n            <input [(ngModel)]=\"expiryYear\" name=\"expiry-year\" type=\"text\"  data-stripe=\"exp_year\" class=\"form-control form-control-sm\">\n          </div>\n          \n        \n          <div class=\"col-3  \">\n            \n              <input [(ngModel)]=\"cvc\" name=\"cvc\" type=\"text\"  id=\"cvc\" class=\"form-control form-control-sm\" data-stripe=\"cvc\">\n          </div>\n        </div>\n      </div>\n      \n\n      \n        <div class=\"form-group\">\n          <input type=\"submit\" value=\"Submit Donation\">\n        </div>\n      </form>\n\n\n\n    </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/donate/donate.component.scss":
/*!**********************************************!*\
  !*** ./src/app/donate/donate.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0ZS9kb25hdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/donate/donate.component.ts":
/*!********************************************!*\
  !*** ./src/app/donate/donate.component.ts ***!
  \********************************************/
/*! exports provided: DonateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateComponent", function() { return DonateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/backend.service */ "./src/app/service/backend.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var DonateComponent = /** @class */ (function () {
    function DonateComponent(_zone, bs) {
        this._zone = _zone;
        this.bs = bs;
        this.myDate = new Date();
    }
    DonateComponent.prototype.getToken = function () {
        var _this = this;
        this.message = 'Loading...';
        window.Stripe.card.createToken({
            number: this.cardNumber,
            exp_month: this.expiryMonth,
            exp_year: this.expiryYear,
            cvc: this.cvc
        }, function (status, response) {
            // Wrapping inside the Angular zone
            _this._zone.run(function () {
                if (status === 200) {
                    var today = new Date();
                    _this.bs.login({
                        email: 'sam@bentwhiskerranch.org',
                        password: 'frist19'
                    }).then(function (user) {
                        _this.bs.transaction({
                            access_token: user.accessToken,
                            stripeToken: response.id,
                            name: _this.name,
                            email: _this.email,
                            address1: _this.address1,
                            zip: _this.zip,
                            reason: 'my reason2',
                            amount: _this.amount,
                            transaction_date: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
                            transaction_code: 'D'
                        }, user).then(function (res) { return console.log('success'); });
                        _this.message = 'Success! Your donation of \$ ${this.amount} dollars was successful.';
                        _this.formValues.resetForm();
                    });
                }
                else {
                    _this.message = response.error.message;
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('#payment-form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DonateComponent.prototype, "formValues", void 0);
    DonateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-donate',
            template: __webpack_require__(/*! ./donate.component.html */ "./src/app/donate/donate.component.html"),
            styles: [__webpack_require__(/*! ./donate.component.scss */ "./src/app/donate/donate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _service_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]])
    ], DonateComponent);
    return DonateComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-3\">\n     <h3>\n       Contact\n     </h3>\n     <address>\n       <strong>Bent Whisker Ranch, LLC</strong>\n       <br>7540 Harper Rd.\n       <br>Joelton, TN 37080\n       <br><abbr title=\"Phone\">Ph:</abbr> +1 615 873 0108\n     </address>\n    </div>\n    <div class=\"col-xs-12 col-sm-8 align-self-center\">\n      <p class=\"small\">Bent Whisker Ranch is organized exclusively for charitable, religious, educational, and scientific purposes, including, for such purposes, the making of distributions to organizations that quality as exempt organizations described under Section 501c(3) of the Internal Revenue Code, or corresponding section of any future federal tax code.\n      </p>\n      <p class=\"small\">\n        See our <a href=\"/privacy\">Privacy policy</a>.\n      </p>\n    </div>\n    <div class=\"col-xs-6 col-sm-1 align-self-center social\">\n      <a href=\"https://www.facebook.com/BentWhiskerRanch/\"><img class=\"social-b\" src=\"assets/flogo_RGB_HEX-114.svg\" style=\" \"></a>   \n    \n      <a href=\"https://www.instagram.com/bentwhiskerranch/\" class=\"social-b\"><svg xmlns=\"http://www.w3.org/2000/svg\" style=\"background-color: rgb(237,19,118); width=100px; fill: #fff;\" viewBox=\"-600 -600 3700 3700\" ><path class=\"social-i\" d=\"M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5\"/></svg></a>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  \n  <div class=\"row\">\n    <div class=\"col-xs-1 col-xs-offset-1 ml-2\">\n      <a href=\"/\"><svg baseProfile=\"tiny\" xmlns=\"http://www.w3.org/2000/svg\" width=\"130\" height=\"100\" viewBox=\"-0.686 -0.989 203 166\"><path fill=\"#231F20\" d=\"M0 0h201.804v164.601H0z\"/><path fill=\"#D5D10E\" d=\"M179.978 14.752s-3.357 17.216-80.207 33.175c-14.772 3.066-26.727 7.396-36.416 12.379 7.001 5.624 17.238 7.367 17.238 7.367 8.954-3.274 14.169-3.139 16.449-2.784 2.279-.355 7.494-.491 16.449 2.784 0 0 16.295-2.768 21.829-12.607 0 0 8.301 13.836-1.229 34.435 0 0 3.073 8.609 10.761 7.994 0 0-5.227 10.453-15.682 9.839 0 0 9.84 2.767 14.45-1.845 0 0-1.536 10.762-13.22 14.143-10.588 3.066-17.389 5.119-20.858 17.381.021 1.268.234 2.217.582 2.928 8.509-2.668 17.178-6.98 25.761-13.484 53.754-40.735 44.093-111.705 44.093-111.705M84.023 136.429h.342c-3.52-11.735-10.268-13.781-20.683-16.797-11.684-3.381-13.221-14.143-13.221-14.143 4.612 4.611 14.451 1.845 14.451 1.845-10.454.614-15.68-9.839-15.68-9.839 7.687.615 10.76-7.994 10.76-7.994-4.756-10.279-5.071-18.872-4.193-24.904-33.23 20.822-33.716 49.26-33.716 49.26s-1.261 4.934 2.938 8.399c0 0 25.138 19.769 57.753 21.188 1.974-.539 2.576-1.758 2.584-3.033a51.952 51.952 0 0 0-.59-2.545c-.358-.845-.745-1.437-.745-1.437\"/><path fill=\"#D5D10E\" d=\"M104.391 97.479s2.099-10.498 18.058-11.548c-.001 0-2.73 18.057-18.058 11.548M89.692 97.479s-2.099-10.498-18.057-11.548c0 0 2.729 18.057 18.057 11.548M90.614 104.968s-19.963-8.991-32.916 7.62c.001 0 10.668-12.8 32.916-7.62M92.002 108.017s-22.775 3.506-24.688 25.594c0 0 2.078-17.415 24.688-25.594\"/><path fill=\"#D5D10E\" d=\"M91.638 106.158s-26.164-5.278-33.859 21.622c0 0 6.701-20.964 33.859-21.622M102.668 104.968s19.962-8.991 32.916 7.62c0 0-10.668-12.8-32.916-7.62M101.279 108.017s7.791 2.01 15.354 7.195c1.627 1.115.793 2.785-5.887 11.969 0 0 5.756-8.963 4.383-10.715-3.409-2.865-8.049-6.349-13.85-8.449\"/><path fill=\"#D5D10E\" d=\"M101.644 106.158s26.165-5.278 33.858 21.622c0 0-6.7-20.964-33.858-21.622M64.076 60.945s-15.958-12.597 6.51-3.359M93.371 102.185c-.221.174-.339.291-.339.291s1.689 3.094 3.376 3.656a.977.977 0 0 0 .33.047.971.971 0 0 0 .329-.047c1.687-.562 3.376-3.656 3.376-3.656s-.119-.117-.34-.291a5.48 5.48 0 0 0-6.732 0\"/></svg></a>\n    </div>\n    <div class=\"col-xs-10 ml-3\">\n      <a href=\"/\"><svg baseProfile=\"tiny\" xmlns=\"http://www.w3.org/2000/svg\" width=\"270\" height=\"100\" viewBox=\"20.169 -0.822 200 80\"><path fill=\"#231F20\" d=\"M0 0h225.043v78.428H0z\"/><g fill=\"#D5D10E\"><path d=\"M14.325 44.953V23.9h3.31c1.921 0 3.325.125 4.213.373 1.262.334 2.265.954 3.01 1.86.745.907 1.117 1.975 1.117 3.206 0 .801-.169 1.529-.508 2.183-.339.653-.89 1.267-1.653 1.839 1.279.601 2.214 1.353 2.806 2.254.592.901.888 1.968.888 3.199a5.96 5.96 0 0 1-.917 3.234c-.612.974-1.399 1.701-2.364 2.183s-2.298.723-3.997.723h-5.905zm4.007-17.232v4.437h.877c.977 0 1.702-.205 2.177-.615.474-.41.711-.969.711-1.675 0-.658-.226-1.181-.676-1.567-.45-.387-1.135-.58-2.054-.58h-1.035zm0 8.015v5.396h1.005c1.665 0 2.787-.21 3.365-.63.579-.419.868-1.03.868-1.832 0-.906-.339-1.622-1.019-2.146s-1.809-.787-3.387-.787h-.832zM31.401 23.9h11.492v3.922h-7.514v3.807h7.514v3.85h-7.514v5.539h7.514v3.936H31.401V23.9zM46.848 23.9h3.844L59.7 37.754V23.9h4.008v21.053h-3.855l-8.997-13.811v13.811h-4.007V23.9zM66.646 23.9h11.636v3.95h-3.835v17.103h-4.065V27.85h-3.735V23.9zM88.045 23.9h3.942l3.042 13.439 3.76-13.439h3.332l3.814 13.439 3.014-13.439h3.942l-4.743 21.053h-3.845l-3.878-13.611-3.808 13.611H92.81L88.045 23.9zM116.032 23.9h4.066v7.943h7.027V23.9h4.049v21.053h-4.049v-9.231h-7.027v9.231h-4.066V23.9zM135.903 23.9h3.979v21.053h-3.979V23.9zM155.643 26.763l-2.968 2.619c-1.042-1.45-2.103-2.176-3.183-2.176-.526 0-.956.141-1.291.422-.334.282-.502.599-.502.952s.12.687.358 1.002c.325.42 1.305 1.322 2.939 2.705 1.529 1.278 2.456 2.085 2.781 2.418.812.821 1.388 1.605 1.728 2.354.339.749.509 1.567.509 2.455 0 1.727-.597 3.153-1.791 4.279-1.193 1.126-2.751 1.688-4.67 1.688-1.5 0-2.807-.367-3.919-1.102-1.113-.734-2.065-1.89-2.858-3.464l3.368-2.032c1.014 1.861 2.179 2.791 3.498 2.791.688 0 1.266-.2 1.734-.602.468-.4.702-.863.702-1.388 0-.477-.177-.954-.53-1.432-.354-.477-1.133-1.207-2.337-2.189-2.294-1.87-3.775-3.313-4.444-4.33-.67-1.016-1.004-2.03-1.004-3.041 0-1.46.557-2.712 1.67-3.757 1.112-1.044 2.485-1.567 4.119-1.567 1.051 0 2.052.243 3.002.73.951.489 1.981 1.377 3.089 2.665zM159.895 23.9h4.051v7.258l5.715-7.258h4.812l-7.353 9.396 8.067 11.657h-4.752l-6.49-9.354v9.354h-4.051V23.9zM178.174 23.9h11.492v3.922h-7.514v3.807h7.514v3.85h-7.514v5.539h7.514v3.936h-11.492V23.9zM193.792 23.9h4.245c2.325 0 3.981.208 4.968.623s1.78 1.104 2.38 2.068c.601.964.901 2.104.901 3.42 0 1.384-.332 2.541-.995 3.471s-1.662 1.634-2.998 2.111l4.987 9.36h-4.381l-4.733-8.917h-.367v8.917h-4.007V23.9zm4.006 8.229h1.256c1.274 0 2.152-.167 2.632-.502.48-.335.721-.89.721-1.666 0-.459-.119-.859-.356-1.199a1.983 1.983 0 0 0-.956-.732c-.399-.148-1.132-.223-2.197-.223h-1.099v4.322z\"/></g><g fill=\"#D5D10E\"><path d=\"M31.681 60.096v-7.991h6.845c1.198 0 1.797.516 1.797 1.549v1.874c0 1.032-.599 1.548-1.797 1.548h-1.053l3.686 3.021h-2.664l-3.222-3.021h-1.765v3.021h-1.827zm6.008-6.629h-4.181v2.246h4.181c.289 0 .491-.031.604-.094.155-.094.232-.275.232-.546v-.967c0-.271-.077-.452-.232-.546-.113-.062-.314-.093-.604-.093zM67.255 60.096l4.522-7.991h1.797l4.584 7.991h-2.091l-.96-1.75h-5.064l-.929 1.75h-1.859zm3.578-3.191h3.5l-1.719-3.252-1.781 3.252zM105.958 60.096v-7.991h1.27l5.622 4.708c.402.341.707.63.914.867a28.972 28.972 0 0 1-.078-1.378v-4.197h1.673v7.991h-1.27l-5.87-4.94a5.63 5.63 0 0 1-.666-.65c.052.517.078.939.078 1.27v4.321h-1.673zM151.367 53.529h-5.018v5.064h5.018v-1.72l1.858.388v.944c0 .743-.139 1.244-.418 1.503-.278.258-.8.387-1.563.387h-4.771c-.765 0-1.285-.129-1.564-.387-.278-.259-.418-.76-.418-1.503v-4.212c0-.744.14-1.244.418-1.503.279-.258.8-.387 1.564-.387h4.771c.764 0 1.285.129 1.563.387.279.259.418.759.418 1.503v.759l-1.858.294v-1.517zM182.31 60.096v-7.991h1.858v3.098h5.809v-3.098h1.874v7.991h-1.874v-3.438h-5.809v3.438h-1.858z\"/></g></svg></a>\n    </div>\n  </div>\n</header>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background-color: #231f20; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0vYXBwcy9idy9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBaUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDMxLCAzMik7XG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"offset-sm-1 col-xs-12 col-sm-8 col-md-7\">\n      <h1>Welcome to Bent Whisker Ranch!</h1>\n      <p>We're happy for your visit and are thrilled to share our mission and success stories with you! We've been animal (especially cat) lovers all our lives, so we finally decided to make it official and launch a non-profit dedicated to animal welfare!</p>\n \n      <p>Be sure to visit our Past Successes section to see examples of how fostering saves lives!</p>\n \n      <p>While you're here, please consider making a donation. All money received goes toward veterinary care expenses, including medications; cat food and litter; humane traps (for Trap/Neuter/Return); and more. Thank you for your support! We couldn't do it without your help.</p>\n\n      <p>Our adoption process consists of a meet and greet, completed adoption application and a small adoption fee. <a href=\"mailto:becky@bentwhiskerranch.org\">-bw</a></p>\n    </div>\n\n    <div class=\"col-sm-2 col-md-3 sidebar-home\">\n     <div class=\"container\">\n     <div class=\"row\">\n       <div class=\"col-sm-12\"><a href=\"/successes\">\n      <img class=\"img-fluid float-right normal\" src=\"assets/img/luca-heidi-wicker.jpeg\" alt=\"Heidi found a home.\" >\n      <a href=\"/successes#luca\"><span>Heidi and Luca found a home!</span></a>\n    </a>\n\n      </div>\n      \n      \n      <div class=\"col-sm-12\"><a href=\"/successes\">\n      <img class=\"img-fluid float-right normal\" src=\"assets/img/jewel-wink.JPG\" alt=\"Jewel found a home\"></a>\n      <a href=\"/successes#jewel\"><span>Jewel found a home!</span></a>\n      </div>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-1\">\n    \n  </div>\n  </div>\n  <div class=\"boiler\">\n    <div class=\"row\">\n      \n    \n    <div class=\"col\">\n      Bent Whisker is named for the older animals, particularly cats \n      who have to fend for themselves and live the \n      rough life, as evidenced by how some of their\n      whiskers end up getting bent for reasons house-bound\n      animals do not.\n    </div>   \n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <h3>\n        Our mission\n      </h3>\n      <p>... is to rescue animals from harmful, negligent, and lonely situations; foster and nurture them into happiness and self-confidence; and place them in loving, responsible permanent homes.</p>\n\n      <p>We are also committed to educating others about animal welfare issues, including the need to spay and neuter companion animals.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-home {\n  background-color: #94b589;\n  padding: 10px 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0vYXBwcy9idy9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF3QztFQUN4QyxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLWhvbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0OCwxODEsMTM3LDEuMDApO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/backend.service */ "./src/app/service/backend.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(bs) {
        this.bs = bs;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.bs.login({
            email: 'sam@bentwhiskerranch.org',
            password: 'frist19'
        }).then(function (res) { return console.log(res); });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(data, header) {
        if (data === void 0) { data = {}; }
        if (!data) {
            data = {};
        }
        this.id = data.id;
        this.email = data.email;
        this.uid = data.uid;
        this.provider = data.provider;
        this.accessToken = header.get('access-token');
        this.tokenType = header.get('token-type');
        this.expiry = header.get('expiry');
        this.client = header.get('client');
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\"\n          data-target=\"#navbarTogglerBW\" aria-controls=\"navbarTogglerBW\"\n          aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#!\">Bent Whisker</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerBW\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/home']\">Home\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/contact']\">Contact</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/successes']\">Past Successes</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/donate']\">How to help</a>\n      </li>\n\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/privacy/privacy.component.html":
/*!************************************************!*\
  !*** ./src/app/privacy/privacy.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article>\n  <h1>Privacy policy</h1>\n\n  <p>This privacy notice discloses the privacy practices for (website address). This privacy notice applies solely to information collected by this website. It will notify you of the following:</p>\n  <ul>\n  <li>What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</li>\n  <li>What choices are available to you regarding the use of your data.\n  <li>The security procedures in place to protect the misuse of your information.</li>\n  <li>How you can correct any inaccuracies in the information.</li>\n  </ul>\n  <h3>Information Collection, Use, and Sharing </h3>\n  <p>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.</p>\n\n  <p>We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.</p>\n\n  <p>Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>\n\n  <h3>Your Access to and Control Over Information </h3>\n  <p>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:</p>\n\n  <ul>\n    <li>See what data we have about you, if any.</li>\n    <li>Change/correct any data we have about you.</li>\n    <li>Have us delete any data we have about you.</li>\n    <li>Express any concern you have about our use of your data.</li>\n  </ul>\n  <h3>Security </h3>\n  <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>\n\n  <p>Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for \"https\" at the beginning of the address of the Web page.</p>\n\n  <p>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</p>\n\n  <p>If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone via <a href=\"mailto:sam@bentwhiskerranch.org\">email</a>.</p>\n</article>\n\n"

/***/ }),

/***/ "./src/app/privacy/privacy.component.scss":
/*!************************************************!*\
  !*** ./src/app/privacy/privacy.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/privacy/privacy.component.ts":
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(/*! ./privacy.component.html */ "./src/app/privacy/privacy.component.html"),
            styles: [__webpack_require__(/*! ./privacy.component.scss */ "./src/app/privacy/privacy.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/service/backend.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/backend.service.ts ***!
  \********************************************/
/*! exports provided: Api, BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");




var Api = {
    login: 'https://work.bentwhiskerranch.org/api/v1/auth/sign_in',
    transactions: 'https://work.bentwhiskerranch.org/api/v1/transactions'
};
// export const Api = {
//     login : 'http://localhost:3000/api/v1/auth/sign_in',
//     transactions : 'http://localhost:3000/api/v1/transactions'
// };
var BackendService = /** @class */ (function () {
    function BackendService(http) {
        this.http = http;
    }
    BackendService.prototype.login = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(Api.login, data, { observe: 'response' }).subscribe(function (res) {
                var userData = res.body.data;
                var headers = res.headers;
                var user = new _model_user__WEBPACK_IMPORTED_MODULE_3__["User"](userData, headers);
                resolve(user);
            });
        });
    };
    BackendService.prototype.transaction = function (data, user) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'access-token': user.accessToken,
            'Content-Type': 'application/json',
            expiry: user.expiry,
            'token-type': user.tokenType,
            uid: user.uid,
            client: user.client
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(Api.transactions, data, { headers: headers }).subscribe(function (res) {
                console.log('transaction add success', res);
                resolve(res);
            });
        });
    };
    BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BackendService);
    return BackendService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sidebar works!\n</p>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/success/success.component.html":
/*!************************************************!*\
  !*** ./src/app/success/success.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n  <article>\n    <div class=\"row\">\n      <a name=\"luca\">\n      <h1>Luca and Heidi's patient wait pays off!</h1></a>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-8\">\n        <p>Heidi and Luca are a bonded pair who were not nurtured in a forever home. After they were rescued from the garage in which they lived for about 4 years, Heidi hid for a week and then tried to escape by climbing up the chimney! She was absolutely terrified. Luca came around much more quickly. He loved to get scritches and to sit by his foster mom when she read or crafted.</p>\n        <p>They waited for almost a year and a half. And we were beginning to think that perhaps they would be \"fosters\" forever.  And then... a wonderful lady reached out, saying she was ready to rescue two adult cats who needed a family. And she wanted Heidi and Luca!!!!\n        </p>\n        <p>She and her boyfriend adopted these lucky cats on the spot on June 29, 2019! The love was mutual, as evidenced by how quickly Heidi adjusted to her new home: she hid for less than 24 hours! Then she came out and wanted loving and scritches! Heidi and Luca are now living their best life and we could not be happier with the happily-ever-after ending!</p>\n      </div>\n\n      <div class=\"col-xs-12 col-md-4\">\n        <div class=\"\">\n         <img src=\"assets/img/luca-heidi-home.jpeg\" class=\"img-fluid float-right normal\" alt=\"Heidi, Luca settle in\">\n        </div>\n      \n\n\n        <div class=\"\">\n         <img src=\"assets/img/luca-home.jpeg\" class=\"img-fluid float-right normal\" alt=\"Luca with his new toy\">\n       </div>\n\n        <div class=\"\">\n         <img src=\"assets/img/heidi-luca-home.jpeg\" class=\"img-fluid float-right normal\" alt=\"Heidi relaxes very soon in her new home\">\n        </div>\n      </div>\n    </div>\n  </article>\n\n  <article>\n  <div class=\"row\">\n    <a name=\"jewel\">\n    <h2 class=\"\">Jewel beats death for forever home!</h2></a>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-8\">\n<p>In November of 2017, we got word that a beautiful but very sick tortie was at a local shelter but was going to be euthanized soon. She'd been seen twice by the vets but her vomiting, diarrhea, and weight loss continued.</p>\n\n<p>Sam and I had 21 years with a little tortie named Francine. She was the light of our lives. We just knew we couldn't let this young tortie be put to sleep.</p>\n\n<p>So, one day during my lunch break, I rushed up to the shelter, pulled her out, and took her straight to the vet down the road. For some reason, the name Jewel popped into my head and that became her name.</p>\n\n<p>She had many vet visits and was put on multiple medications but nothing worked. She just got sicker.</p>\n\n<p>Finally, the vet and I were at our wit's end, and we thought this pretty girl was at her end, too. The vet said: \"I don't know what else to do. We can't find anything wrong. Would you be willing, if I taught you, to take home a bag of fluids and give them to her subQ?  I said yes because I would do anything to see this girl perk up and have hope.</p>\n\n<p>Within 48 hours, she was a different cat! She showed interest in life and food and attention!</p>\n\n<p>A few days later, she was playing ping pong with my nieces!</p>\n\n<h3>Fostering Saves Lives!</h3>\n\n<p>All Jewel needed was some support and time. And that's exactly what fostering does.</p>\n\n<p>In January 2018, Jewel found her forever home. She now has two boys to play with (because she LOVES ping pong balls) and is living the life of a queen!</p>\n\n<p>We are thankful for the awesome family that adopted her and we wish them a very long and happy life together!</p>\n    </div>\n  \n  \n    <div class=\"col-xs-12 col-md-4\">\n     <div class=\"\">\n       <img src=\"assets/img/jewel-forever.JPG\" class=\"img-fluid float-right normal\" alt=\"Jewel going to her forever home!\">\n     </div>\n       <div class=\"\"> \n         <img src=\"assets/img/jewel-sick.JPG\" class=\"img-fluid float-right normal\" alt=\"Jewel wasn't getting better.\">\n       </div>\n       \n       <div class=\"\"> \n         <img src=\"assets/img/jewel-kit.JPG\" class=\"img-fluid float-right normal\" alt=\"Tools to keep Jewel alive.\">\n       </div>\n    </div>\n  </div>\n  </article>\n  \n</div>"

/***/ }),

/***/ "./src/app/success/success.component.scss":
/*!************************************************!*\
  !*** ./src/app/success/success.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Y2Nlc3Mvc3VjY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/success/success.component.ts":
/*!**********************************************!*\
  !*** ./src/app/success/success.component.ts ***!
  \**********************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SuccessComponent = /** @class */ (function () {
    function SuccessComponent() {
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! ./success.component.html */ "./src/app/success/success.component.html"),
            styles: [__webpack_require__(/*! ./success.component.scss */ "./src/app/success/success.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sam/apps/bw/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map