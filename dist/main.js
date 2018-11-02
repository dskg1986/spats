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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account-profile/account-profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/account-profile/account-profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n    font-weight: bolder;\r\n  }\r\n.red {\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/account-profile/account-profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/account-profile/account-profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"text-center\">\n        <h1>Account Profile</h1>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 offset-sm-1\">\n      <div class=\"jumbotron\">\n        <form (submit)=\"updateProfile()\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-3 offset-sm-8\">\n              <button type=\"button\" class=\"btn btn-block btn-primary\" [hidden]=\"!viewOnly\" (click)=\"edit()\">Edit</button>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-3 offset-sm-1\">\n              <div class=\"form-group\">\n                <label for=\"userType\">User Type</label>\n                <input type=\"text\" class=\"form-control\" name=\"userType\" disabled  [(ngModel)]=\"details.userType\" #userType=\"ngModel\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-4 offset-sm-1\">\n              <div class=\"form-group\">\n                <label for=\"firstName\">First Name <span class=\"red\">*</span></label>\n                <input type=\"text\" class=\"form-control\" name=\"firstName\" [disabled]=\"viewOnly\" [(ngModel)]=\"details.firstName\" required>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-2\">\n              <div class=\"form-group\">\n                <label for=\"middleInitial\">Middle Initial</label>\n                <input type=\"text\" class=\"form-control\" name=\"middleInitial\" [disabled]=\"viewOnly\" [(ngModel)]=\"details.middleInitial\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-4\">\n              <div class=\"form-group\">\n                <label for=\"lastName\">Last Name <span class=\"red\">*</span></label>\n                <input type=\"text\" class=\"form-control\" name=\"lastName\" [disabled]=\"viewOnly\" [(ngModel)]=\"details.lastName\" required>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-5 offset-sm-1\">\n              <div class=\"form-group\">\n                <label for=\"email\">Username / Email <span class=\"red\">*</span></label>\n                <input type=\"text\" class=\"form-control\" name=\"email\" [disabled]=\"viewOnly\" [(ngModel)]=\"details.email\" required>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-5\">\n              <div class=\"form-group\">\n                <label for=\"phoneNumber\">Phone Number <span class=\"red\">*</span></label>\n                <input type=\"tel\" class=\"form-control\" name=\"phoneNumber\" [disabled]=\"viewOnly\" [(ngModel)]=\"details.primePhone\" required>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" [hidden]=\"viewOnly\">\n            <div class=\"col-xs-12 col-sm-3 offset-sm-2\">\n              <button type=\"submit\" class=\"btn btn-block btn-success\">Save</button>\n            </div>\n            <div class=\"col-xs-12 col-sm-3 offset-sm-2\">\n              <button type=\"button\" class=\"btn btn-block btn-danger\" (click)=\"edit()\">Cancel</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/account-profile/account-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/account-profile/account-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: AccountProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountProfileComponent", function() { return AccountProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountProfileComponent = /** @class */ (function () {
    function AccountProfileComponent(auth, profile) {
        this.auth = auth;
        this.profile = profile;
        this.details = {};
        this.response = null;
        this.viewOnly = true;
    }
    AccountProfileComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    AccountProfileComponent.prototype.getProfile = function () {
        var _this = this;
        this.profile.getProfile().subscribe(function (user) {
            _this.details = user;
        }, function (err) {
            console.error(err);
        });
    };
    AccountProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        console.log(this.details);
        this.profile.updateProfile(this.details).subscribe(function (data) {
            // refresh the list
            alert('Account Updated.');
            _this.edit();
            _this.profile.getProfile();
            return true;
        }, function (error) {
            console.error('Error saving Profile!');
            return console.log(error);
        });
    };
    AccountProfileComponent.prototype.edit = function () {
        // tslint:disable-next-line:no-unused-expression
        this.viewOnly = !this.viewOnly;
    };
    AccountProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-profile',
            template: __webpack_require__(/*! ./account-profile.component.html */ "./src/app/account-profile/account-profile.component.html"),
            styles: [__webpack_require__(/*! ./account-profile.component.css */ "./src/app/account-profile/account-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], AccountProfileComponent);
    return AccountProfileComponent;
}());



/***/ }),

/***/ "./src/app/account-tc/account-tc.component.css":
/*!*****************************************************!*\
  !*** ./src/app/account-tc/account-tc.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n  font-size: 16px;\r\n}"

/***/ }),

/***/ "./src/app/account-tc/account-tc.component.html":
/*!******************************************************!*\
  !*** ./src/app/account-tc/account-tc.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 offset-sm-1\">\n      <p>\n      THIS IS A NOTICE OF MONITORING OF THE DEPARTMENT OF THE INTERIOR (DOI) INFORMATION SYSTEMS. \n      This computer system, including all related equipment, networks, and  network devices \n      (including Internet access),is provided by the Department of the Interior (DOI) in accordance \n      with the agency policy for official use and limited personal use.\n      </p>\n      <p>\n      All agency computer systems may be monitored for all lawful purposes,including but not limited to, \n      ensuring that use is authorized, for management of the system,to facilitate protection against \n      unauthorized access, and to verify security procedures,  survivability and operational security. \n      Any information on this computer system may be examined, recorded,copied and used for authorized \n      purposes at any time. All information,including personal information, placed or sent over this\n      system may be monitored, and users of this system are reminded that such monitoring does occur. \n      Therefore, there should be no expectation of privacy with respect to use of this system.\n      </p>\n      <p>\n      By logging into this agency computer system, you acknowledge and consent to the monitoring of \n      this system. Evidence of your use, authorized or unauthorized, collected during monitoring may \n      be used for civil, criminal, administrative, or other adverse action. Unauthorized or illegal\n      use may subject you to prosecution.\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/account-tc/account-tc.component.ts":
/*!****************************************************!*\
  !*** ./src/app/account-tc/account-tc.component.ts ***!
  \****************************************************/
/*! exports provided: AccountTcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountTcComponent", function() { return AccountTcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountTcComponent = /** @class */ (function () {
    function AccountTcComponent() {
    }
    AccountTcComponent.prototype.ngOnInit = function () {
    };
    AccountTcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-tc',
            template: __webpack_require__(/*! ./account-tc.component.html */ "./src/app/account-tc/account-tc.component.html"),
            styles: [__webpack_require__(/*! ./account-tc.component.css */ "./src/app/account-tc/account-tc.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountTcComponent);
    return AccountTcComponent;
}());



/***/ }),

/***/ "./src/app/admin-doc-lib/admin-doc-lib.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin-doc-lib/admin-doc-lib.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-doc-lib/admin-doc-lib.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin-doc-lib/admin-doc-lib.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-doc-lib works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin-doc-lib/admin-doc-lib.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin-doc-lib/admin-doc-lib.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminDocLibComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDocLibComponent", function() { return AdminDocLibComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminDocLibComponent = /** @class */ (function () {
    function AdminDocLibComponent() {
    }
    AdminDocLibComponent.prototype.ngOnInit = function () {
    };
    AdminDocLibComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-doc-lib',
            template: __webpack_require__(/*! ./admin-doc-lib.component.html */ "./src/app/admin-doc-lib/admin-doc-lib.component.html"),
            styles: [__webpack_require__(/*! ./admin-doc-lib.component.css */ "./src/app/admin-doc-lib/admin-doc-lib.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDocLibComponent);
    return AdminDocLibComponent;
}());



/***/ }),

/***/ "./src/app/admin-domains/admin-domains.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin-domains/admin-domains.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-domains/admin-domains.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin-domains/admin-domains.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"text-center\">\n    <h1>Admin Console</h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"text-center\">\n        <h2>Domain Lists</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-10 offset-1\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <th scope=\"col\">Domain</th>\n          <th scope=\"col\">Values</th>\n          <th scope=\"col\"></th>\n        </thead>\n        <tbody>\n          <tr>\n            <td>BLM Offices</td>\n            <td>\n              <select class=\"form-control\">\n                <option>Some Office 1</option>\n                <option>Some Office 2</option>\n              </select>\n            </td>\n            <td><button class=\"btn btn-primary\">Edit</button></td>\n          </tr>\n          <tr>\n            <td>Employee Positions</td>\n            <td>\n              <select class=\"form-control\">\n                <option>Outdoor Recreation Planner</option>\n                <option>Recreation Technician</option>\n              </select>\n            </td>\n            <td><button class=\"btn btn-primary\">Edit</button></td>\n          </tr>\n          <tr>\n            <td>NEPA Document Types</td>\n            <td>\n              <select class=\"form-control\">\n                <option>Environmental Impact Statements (EIS)</option>\n                <option>Environmental Assessments  (EA)</option>\n                <option>Categorical Exclusion (CX)</option>\n                <option>Determination of NEPA Adequacy (DNA)</option>\n              </select>\n            </td>\n            <td><button class=\"btn btn-primary\">Edit</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-domains/admin-domains.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin-domains/admin-domains.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminDomainsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDomainsComponent", function() { return AdminDomainsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminDomainsComponent = /** @class */ (function () {
    function AdminDomainsComponent() {
    }
    AdminDomainsComponent.prototype.ngOnInit = function () {
    };
    AdminDomainsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-domains',
            template: __webpack_require__(/*! ./admin-domains.component.html */ "./src/app/admin-domains/admin-domains.component.html"),
            styles: [__webpack_require__(/*! ./admin-domains.component.css */ "./src/app/admin-domains/admin-domains.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDomainsComponent);
    return AdminDomainsComponent;
}());



/***/ }),

/***/ "./src/app/admin-search-app/admin-search-app.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin-search-app/admin-search-app.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-search-app/admin-search-app.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin-search-app/admin-search-app.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-search-app works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin-search-app/admin-search-app.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin-search-app/admin-search-app.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminSearchAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSearchAppComponent", function() { return AdminSearchAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminSearchAppComponent = /** @class */ (function () {
    function AdminSearchAppComponent() {
    }
    AdminSearchAppComponent.prototype.ngOnInit = function () {
    };
    AdminSearchAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-search-app',
            template: __webpack_require__(/*! ./admin-search-app.component.html */ "./src/app/admin-search-app/admin-search-app.component.html"),
            styles: [__webpack_require__(/*! ./admin-search-app.component.css */ "./src/app/admin-search-app/admin-search-app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminSearchAppComponent);
    return AdminSearchAppComponent;
}());



/***/ }),

/***/ "./src/app/admin-search-blm/admin-search-blm.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin-search-blm/admin-search-blm.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-search-blm/admin-search-blm.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin-search-blm/admin-search-blm.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-search-blm works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin-search-blm/admin-search-blm.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin-search-blm/admin-search-blm.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminSearchBlmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSearchBlmComponent", function() { return AdminSearchBlmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminSearchBlmComponent = /** @class */ (function () {
    function AdminSearchBlmComponent() {
    }
    AdminSearchBlmComponent.prototype.ngOnInit = function () {
    };
    AdminSearchBlmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-search-blm',
            template: __webpack_require__(/*! ./admin-search-blm.component.html */ "./src/app/admin-search-blm/admin-search-blm.component.html"),
            styles: [__webpack_require__(/*! ./admin-search-blm.component.css */ "./src/app/admin-search-blm/admin-search-blm.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminSearchBlmComponent);
    return AdminSearchBlmComponent;
}());



/***/ }),

/***/ "./src/app/admin-terms/admin-terms.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-terms/admin-terms.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-terms/admin-terms.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-terms/admin-terms.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"text-center\">\n    <h1>Admin Console</h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"text-center\">\n        <h2>Terms and Conditions</h2>\n      </div>\n    </div>\n  </div>\n  <form>\n    <div class=\"row\">\n      <div class=\"col-10 offset-1\">\n        <div class=\"form-group\">\n          <label for=\"TandC\">Terms and Conditions</label>\n          <textarea class=\"form-control\" rows=\"10\"></textarea>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-3 offset-3\">\n        <button class=\"btn btn-success btn-block\">Save</button>\n      </div>\n      <div class=\"col-3\">\n        <button class=\"btn btn-warning btn-block\">Cancel</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/admin-terms/admin-terms.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-terms/admin-terms.component.ts ***!
  \******************************************************/
/*! exports provided: AdminTermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTermsComponent", function() { return AdminTermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminTermsComponent = /** @class */ (function () {
    function AdminTermsComponent() {
    }
    AdminTermsComponent.prototype.ngOnInit = function () {
    };
    AdminTermsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-terms',
            template: __webpack_require__(/*! ./admin-terms.component.html */ "./src/app/admin-terms/admin-terms.component.html"),
            styles: [__webpack_require__(/*! ./admin-terms.component.css */ "./src/app/admin-terms/admin-terms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminTermsComponent);
    return AdminTermsComponent;
}());



/***/ }),

/***/ "./src/app/app-srpdash/app-srpdash.component.css":
/*!*******************************************************!*\
  !*** ./src/app/app-srpdash/app-srpdash.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-srpdash/app-srpdash.component.html":
/*!********************************************************!*\
  !*** ./src/app/app-srpdash/app-srpdash.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"text-center\">\n    <h1>Appication Dashboard</h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-10 offset-1\">\n      <table class=\"table table-bordered\">\n        <thead class=\"bg-success\">\n          <th scope=\"col\">Applicant Name</th>\n          <th scope=\"col\">Application Name</th>\n          <th scope=\"col\">Lead Office</th>\n          <th scope=\"col\">Submit Date</th>\n          <th scope=\"col\">Beginning Date</th>\n          <th scope=\"col\">Ending Date</th>\n          <th scope=\"col\">Application Status</th>\n          <th scope=\"col\"></th>\n        </thead>\n        <tbody>\n          <tr>\n            <td>Jane Doe</td>\n            <td>Battle Mountain App.</td>\n            <td>Tres Rios</td>\n            <td>05/04/2018</td>\n            <td>01/01/2019</td>\n            <td>12/31/2019</td>\n            <td>Accepted</td>\n            <td>\n              <button class=\"btn btn-danger btn-small\"><small>Cancel</small></button>\n              <!--<button class=\"btn btn-warning btn-small\"><small>Delete</small></button>-->\n              <button class=\"btn btn-primary btn-small\"><small>View</small></button>\n              <button class=\"btn btn-info btn-small\"><small>Log</small></button>\n            </td>\n          </tr>\n          <tr>\n            <td>Jane Doe</td>\n            <td>Round Table Meeting</td>\n            <td>Tres Rios</td>\n            <td>05/20/2018</td>\n            <td>02/10/2019</td>\n            <td>02/24/2019</td>\n            <td>In Review</td>\n            <td>\n              <button class=\"btn btn-danger btn-small\"><small>Cancel</small></button>\n              <!--<button class=\"btn btn-warning btn-small\"><small>Delete</small></button>-->\n              <button class=\"btn btn-primary btn-small\"><small>View</small></button>\n              <button class=\"btn btn-info btn-small\"><small>Log</small></button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-srpdash/app-srpdash.component.ts":
/*!******************************************************!*\
  !*** ./src/app/app-srpdash/app-srpdash.component.ts ***!
  \******************************************************/
/*! exports provided: AppSrpdashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSrpdashComponent", function() { return AppSrpdashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSrpdashComponent = /** @class */ (function () {
    function AppSrpdashComponent() {
    }
    AppSrpdashComponent.prototype.ngOnInit = function () {
    };
    AppSrpdashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-srpdash',
            template: __webpack_require__(/*! ./app-srpdash.component.html */ "./src/app/app-srpdash/app-srpdash.component.html"),
            styles: [__webpack_require__(/*! ./app-srpdash.component.css */ "./src/app/app-srpdash/app-srpdash.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppSrpdashComponent);
    return AppSrpdashComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _review_two_review_two_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./review-two/review-two.component */ "./src/app/review-two/review-two.component.ts");
/* harmony import */ var _review_three_review_three_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./review-three/review-three.component */ "./src/app/review-three/review-three.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _app_srpdash_app_srpdash_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-srpdash/app-srpdash.component */ "./src/app/app-srpdash/app-srpdash.component.ts");
/* harmony import */ var _lead_srpdash_lead_srpdash_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lead-srpdash/lead-srpdash.component */ "./src/app/lead-srpdash/lead-srpdash.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _srp_application_srp_application_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./srp-application/srp-application.component */ "./src/app/srp-application/srp-application.component.ts");
/* harmony import */ var _create_account_create_account_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./create-account/create-account.component */ "./src/app/create-account/create-account.component.ts");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/log-in/log-in.component.ts");
/* harmony import */ var _rec_home_rec_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rec-home/rec-home.component */ "./src/app/rec-home/rec-home.component.ts");
/* harmony import */ var _paleo_home_paleo_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./paleo-home/paleo-home.component */ "./src/app/paleo-home/paleo-home.component.ts");
/* harmony import */ var _account_tc_account_tc_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./account-tc/account-tc.component */ "./src/app/account-tc/account-tc.component.ts");
/* harmony import */ var _account_profile_account_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./account-profile/account-profile.component */ "./src/app/account-profile/account-profile.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _admin_terms_admin_terms_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin-terms/admin-terms.component */ "./src/app/admin-terms/admin-terms.component.ts");
/* harmony import */ var _admin_search_blm_admin_search_blm_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin-search-blm/admin-search-blm.component */ "./src/app/admin-search-blm/admin-search-blm.component.ts");
/* harmony import */ var _admin_search_app_admin_search_app_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin-search-app/admin-search-app.component */ "./src/app/admin-search-app/admin-search-app.component.ts");
/* harmony import */ var _admin_domains_admin_domains_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin-domains/admin-domains.component */ "./src/app/admin-domains/admin-domains.component.ts");
/* harmony import */ var _admin_doc_lib_admin_doc_lib_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin-doc-lib/admin-doc-lib.component */ "./src/app/admin-doc-lib/admin-doc-lib.component.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/authentication/auth-guard.service */ "./src/app/services/authentication/auth-guard.service.ts");
/* harmony import */ var _services_application_srp_application_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/application/srp-application.service */ "./src/app/services/application/srp-application.service.ts");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");
/* harmony import */ var _services_states_states_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/states/states.service */ "./src/app/services/states/states.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// components






















// services





var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'reviewTwo', component: _review_two_review_two_component__WEBPACK_IMPORTED_MODULE_8__["ReviewTwoComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"]] },
    { path: 'reviewThree', component: _review_three_review_three_component__WEBPACK_IMPORTED_MODULE_9__["ReviewThreeComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"]] },
    { path: 'blmDash', component: _lead_srpdash_lead_srpdash_component__WEBPACK_IMPORTED_MODULE_12__["LeadSrpdashComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"]] },
    { path: 'appDash', component: _app_srpdash_app_srpdash_component__WEBPACK_IMPORTED_MODULE_11__["AppSrpdashComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"]] },
    { path: 'paleoHome', component: _paleo_home_paleo_home_component__WEBPACK_IMPORTED_MODULE_19__["PaleoHomeComponent"] },
    { path: 'recHome', component: _rec_home_rec_home_component__WEBPACK_IMPORTED_MODULE_18__["RecHomeComponent"] },
    { path: 'srpApp', component: _srp_application_srp_application_component__WEBPACK_IMPORTED_MODULE_15__["SrpApplicationComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"]] },
    { path: 'terms', component: _admin_terms_admin_terms_component__WEBPACK_IMPORTED_MODULE_23__["AdminTermsComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"]] },
    { path: 'domains', component: _admin_domains_admin_domains_component__WEBPACK_IMPORTED_MODULE_26__["AdminDomainsComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"]] },
    { path: 'BLMSearch', component: _admin_search_blm_admin_search_blm_component__WEBPACK_IMPORTED_MODULE_24__["AdminSearchBlmComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"]] },
    { path: 'applicantSearch', component: _admin_search_app_admin_search_app_component__WEBPACK_IMPORTED_MODULE_25__["AdminSearchAppComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"]] },
    { path: 'docLib', component: _admin_doc_lib_admin_doc_lib_component__WEBPACK_IMPORTED_MODULE_27__["AdminDocLibComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"]] },
    { path: 'createAccount', component: _create_account_create_account_component__WEBPACK_IMPORTED_MODULE_16__["CreateAccountComponent"] },
    { path: 'logIn', component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_17__["LogInComponent"] },
    { path: 'accountTC', component: _account_tc_account_tc_component__WEBPACK_IMPORTED_MODULE_20__["AccountTcComponent"] },
    { path: 'profile', component: _account_profile_account_profile_component__WEBPACK_IMPORTED_MODULE_21__["AccountProfileComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"]] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _review_two_review_two_component__WEBPACK_IMPORTED_MODULE_8__["ReviewTwoComponent"],
                _review_three_review_three_component__WEBPACK_IMPORTED_MODULE_9__["ReviewThreeComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                _app_srpdash_app_srpdash_component__WEBPACK_IMPORTED_MODULE_11__["AppSrpdashComponent"],
                _lead_srpdash_lead_srpdash_component__WEBPACK_IMPORTED_MODULE_12__["LeadSrpdashComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _srp_application_srp_application_component__WEBPACK_IMPORTED_MODULE_15__["SrpApplicationComponent"],
                _create_account_create_account_component__WEBPACK_IMPORTED_MODULE_16__["CreateAccountComponent"],
                _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_17__["LogInComponent"],
                _rec_home_rec_home_component__WEBPACK_IMPORTED_MODULE_18__["RecHomeComponent"],
                _paleo_home_paleo_home_component__WEBPACK_IMPORTED_MODULE_19__["PaleoHomeComponent"],
                _account_tc_account_tc_component__WEBPACK_IMPORTED_MODULE_20__["AccountTcComponent"],
                _account_profile_account_profile_component__WEBPACK_IMPORTED_MODULE_21__["AccountProfileComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_22__["ReportsComponent"],
                _admin_terms_admin_terms_component__WEBPACK_IMPORTED_MODULE_23__["AdminTermsComponent"],
                _admin_search_blm_admin_search_blm_component__WEBPACK_IMPORTED_MODULE_24__["AdminSearchBlmComponent"],
                _admin_search_app_admin_search_app_component__WEBPACK_IMPORTED_MODULE_25__["AdminSearchAppComponent"],
                _admin_domains_admin_domains_component__WEBPACK_IMPORTED_MODULE_26__["AdminDomainsComponent"],
                _admin_doc_lib_admin_doc_lib_component__WEBPACK_IMPORTED_MODULE_27__["AdminDocLibComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot()
            ],
            providers: [
                _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_28__["AuthenticationService"],
                _services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"],
                _services_application_srp_application_service__WEBPACK_IMPORTED_MODULE_30__["SrpApplicationService"],
                _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_31__["ProfileService"],
                _services_states_states_service__WEBPACK_IMPORTED_MODULE_32__["StateService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-account/create-account.component.css":
/*!*************************************************************!*\
  !*** ./src/app/create-account/create-account.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n  font-weight: bolder;\r\n  color: azure;\r\n}\r\n.jumbotron {\r\n  background-color: rgba(0, 0, 0, 0.75);\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/create-account/create-account.component.html":
/*!**************************************************************!*\
  !*** ./src/app/create-account/create-account.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"text-center\">\n    <h1>Create New SPATS User Account</h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 offset-sm-1\">\n      <div class=\"jumbotron\">\n        <form (submit)=\"register()\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"firstName\">First Name</label>\n                <input class=\"form-control\" type=\"text\"\n                minlength=\"5\" maxlength=\"20\"\n                name=\"firstName\" required\n                [(ngModel)]=\"credentials.firstName\" #firstName=\"ngModel\">\n                <div *ngIf=\"firstName.invalid && (firstName.dirty || firstName.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"firstName.errors.required\">\n                    First Name is required.\n                  </div>\n                  <div *ngIf=\"firstName.errors.minlength\">\n                    First Name must be at least 5 characters long.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"lastName\">Last Name</label>\n                <input class=\"form-control\" type=\"text\"\n                minlength=\"5\" maxlength=\"20\"\n                name=\"lastName\" required\n                [(ngModel)]=\"credentials.lastName\" #lastName=\"ngModel\">\n                <div *ngIf=\"lastName.invalid && (lastName.dirty || lastName.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"lastName.errors.required\">\n                    Last Name is required.\n                  </div>\n                  <div *ngIf=\"lastName.errors.minlength\">\n                    Last Name must be at least 5 characters long.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input class=\"form-control\" type=\"email\"\n                maxlength=\"30\"\n                name=\"email\" required email\n                ngbTooltip=\"This email address will be used to log into SPATS\"\n                [(ngModel)]=\"credentials.email\" #email=\"ngModel\">\n                <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"email.errors.required\">\n                    An Email Address is required.\n                  </div>\n                  <div *ngIf=\"email.errors.email\">\n                    Please Enter a Valid Email Address\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input class=\"form-control\" type=\"password\"\n                minlength=\"12\" maxlength=\"50\"\n                name=\"password\" required pattern=\"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}\"\n                [(ngModel)]=\"credentials.password\" #password=\"ngModel\">\n                <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"password.errors.required\">\n                    Password is required.\n                  </div>\n                  <div *ngIf=\"password.errors.minlength\">\n                    Minimum Password Length is 12 characters.\n                  </div>\n                  <div *ngIf=\"password.errors.pattern\">\n                    Not a Strong Enough Password. The password must have an uppercase letter, a number, and a special character.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\"\n              name=\"agree\" required value=\"false\"\n              [(ngModel)]=\"agreeValue\">\n              <label class=\"form-check-label\" for=\"agree\">\n                  By checking this box, you agree that you have completed a pre-application consultation with\n                  the local BLM office, and have viewed the SRP informational videos.  NEW SRP applications\n                  submitted without a pre-application consultation may be immediately denied.\n                  A pre-application consultation is not required for a permit RENEWAL with no changes.\n                  In addition, you agree to the BLM <a href=\"accountTC\" target=\"_blank\">terms and conditions</a>\n                  for using and storing user data.\n              </label>\n              <div *ngIf=\"!agreeValue\" class=\"alert alert-danger\">\n                  You must agree to the terms and conditions.\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6\">\n              <button type=\"submit\" [disabled]=\"firstName.invalid||lastName.invalid||email.invalid||password.invalid||!agreeValue\" class=\"btn btn-success btn-block\">Create Account</button>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <button type=\"reset\" class=\"btn btn-danger btn-block\">Cancel</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/create-account/create-account.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create-account/create-account.component.ts ***!
  \************************************************************/
/*! exports provided: CreateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountComponent", function() { return CreateAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateAccountComponent = /** @class */ (function () {
    function CreateAccountComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {};
    }
    CreateAccountComponent.prototype.getUserType = function () {
        if (this.credentials.email.toLowerCase().endsWith('@blm.gov')) {
            // tslint:disable-next-line:no-unused-expression
            this.credentials.userType = 'Internal';
        }
        else {
            // tslint:disable-next-line:no-unused-expression
            this.credentials.userType = 'External';
        }
        console.log(this.credentials.userType);
    };
    CreateAccountComponent.prototype.register = function () {
        var _this = this;
        console.log('Got into register');
        this.getUserType();
        this.auth.register(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    CreateAccountComponent.prototype.ngOnInit = function () {
    };
    CreateAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-account',
            template: __webpack_require__(/*! ./create-account.component.html */ "./src/app/create-account/create-account.component.html"),
            styles: [__webpack_require__(/*! ./create-account.component.css */ "./src/app/create-account/create-account.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateAccountComponent);
    return CreateAccountComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer d-none d-sm-block\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-3\">\n       <span class=\"text-muted\">\n         <div class=\"text-center\">\n           <a href=\"https://blm.gov\">BLM.gov</a>\n         </div>\n       </span>\n      </div>\n      <div class=\"col-3\">\n        <span class=\"text-muted\">\n          <div class=\"text-center\">\n            <a href=\"https://blm.gov/programs/cultural-resources/paleontology\">Paleo Webpage</a>\n          </div>\n        </span>\n      </div>\n      <div class=\"col-3\">\n        <span class=\"text-muted\">\n          <div class=\"text-center\">\n            <a href=\"https://www.blm.gov/programs/recreation\">Recreation Webpage</a>\n          </div>\n        </span>\n      </div>\n      <div class=\"col-3\">\n        <span class=\"text-muted\">\n          <div class=\"text-center\">\n            <a href=\"https://www.blm.gov/programs/recreation\">General Science</a>\n          </div>\n        </span>\n      </div>\n    </div>\n  </div>\n</footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blmYellow {\r\n  background-color: rgba(255, 213, 86, 0.85) !important;\r\n}\r\n.blmGreen {\r\n  background-color: rgb(76, 110, 22, 0.85) !important;\r\n}\r\n.blmOrange {\r\n  background-color: rgba(218, 80, 0, 0.85) !important;\r\n}\r\n.blmGreen h2, .blmGreen p {\r\n  color: #DFDFCA;\r\n}\r\n.blmOrange h2, .blmOrange p {\r\n  color: #DFDFCA;\r\n}\r\n#homeBody {\r\n  background-image: url('home-bg.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n#top {\r\n  padding-top: 10px;\r\n}\r\n#middle->.jumbotron {\r\n  padding-top: 15px;\r\n  padding-bottom: 10px;\r\n}\r\n#description {\r\n  font-size: 18px !important;\r\n}\r\n.jumbotron {\r\n  padding: 10px 10px 10px 10px;\r\n  margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"homeBody\">\n  <div class=\"row\" id=\"top\">\n    <div class=\"col-10 offset-1\">\n      <div class=\"jumbotron sandBackground\">\n        <div class=\"jumbotron richBlueBackground border border-secondary\">\n          <div class=\"text-center\">\n            <h1 class=\"whiteText\">Welcome to the RAPTOR Web Application</h1>\n            <p class=\"whiteText\" style=\"font-size: 15px;\">This site is intended to be used by the public for the purpose of submitting applications for various permits to the BLM.  Currently the website supports the applications for Paleontological Resources Use Permit and the Special Recreation Permit.</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <div class=\"jumbotron richOrangeBackground border border-secondary\">\n              <img src=\"../../assets/images/rec.jpeg\" class=\"img-fluid rounded-circle\">\n              <h2 class=\"whiteText\">Special Recreation Permits</h2>\n              <p class=\"whiteText\">Special Recreation Permits (SRPs) are authorizations for commercial use, competitive events, group activities, recreation events, and providing vending services or supplies associated with recreation events.  SRPs are issued to ensure public health and safety, protect natural and recreational resources, reduce user conflicts, achieve recreation and other resource management objectives, and enhance the public’s opportunity for quality recreation experiences.</p>\n              <p class=\"whiteText\">For instructions on how to submit a Special Recreation Application for Permit see the <a href=\"recHome\">Recreation Page.</a></p>\n            </div>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"jumbotron purpleBackground border border-secondary\">\n              <img src=\"../../assets/images/paleo.jpeg\" class=\"img-fluid rounded\">\n              <h2 class=\"whiteText\">Paleontological Resources Use Permits</h2>\n              <p class=\"whiteText\">A Paleontological Resource Use Permit must be aquired before collecting or disturbing fossil resources on BLM-administered lands.  To be eligible for a permit, the applicant must have received formal education and professional instruction in a field of paleontology equivalent to a graduate degree and meet other requirements as specified in the permit application.  </p>\n              <p class=\"whiteText\">For instructions on how to submit a Paleontological Resources Use Permit Application see the <a href=\"paleoHome\">Paleo Page.</a></p>\n            </div>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"jumbotron greenfieldDarkBackground border border-secondary\">\n              <img src=\"../../assets/images/flight-sky-earth-space.jpg\" class=\"img-fluid rounded\">\n              <h2 class=\"whiteText\">General Science</h2>\n              <p class=\"whiteText\">Special Recreation Permits (SRPs) are authorizations for commercial use, competitive events, group activities, recreation events, and providing vending services or supplies associated with recreation events.  SRPs are issued to ensure public health and safety, protect natural and recreational resources, reduce user conflicts, achieve recreation and other resource management objectives, and enhance the public’s opportunity for quality recreation experiences.</p>\n              <p class=\"whiteText\">For instructions on how to submit a Special Recreation Application for Permit see the <a href=\"recHome\">Recreation Page.</a></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n  <!--\n  <div class=\"row\" id=\"top\">\n    <div class=\"col-xs-12 col-sm-10 offset-sm-1\">\n      <div class=\"jumbotron blmYellow\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-10 offset-sm-1\">\n            <div class=\"text-center\">\n              <h2>Welcome to the Scientific Permitting and Tracking System</h2>\n              <img src=\"..\\..\\assets\\images\\home_collage.jpg\"\n                   class=\"img-responsive mx-auto d-block\"\n                   style=\"max-width: 100%; height: auto;\"\n                   alt=\"...\">\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\" id=\"middle\">\n    <div class=\"col-xs-12 col-sm-10 offset-sm-1\">\n      <div class=\"jumbotron blmOrange\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-10 offset-sm-1\">\n            <p id=\"description\">Welcome to the RAPTOR webpage.  This site is intended to be used by the public for the purpose of submitting applications for various permits to the BLM.  Currently the website supports the applications for Paleontological Resources Use Permit and the Special Recreation Permit.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\" id=\"bottom\">\n    <div class=\"col-xs-12 col-sm-10 col-md-5 offset-sm-1\">\n      <div class=\"text-center jumbotron blmGreen\">\n        <div style=\"clear: both;\">\n          <h2>Paleontological Resources</h2>\n          <p>A Paleontological Resource Use Permit must be aquired before collecting or disturbing fossil resources on BLM-administered lands.  To be eligible for a permit, the applicant must have received formal education and professional instruction in a field of paleontology equivalent to a graduate degree and meet other requirements as specified in the permit application.  </p>\n          <p>For instructions on how to submit a Paleontological Resources Use Permit Application see the <a href=\"paleoHome\">Paleo Page.</a></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-10 offset-sm-1 col-md-5 offset-md-0\">\n      <div class=\"text-center jumbotron blmGreen\">\n        <div style=\"clear: both;\">\n          <h2>Special Recreation Permits</h2>\n          <p>Special Recreation Permits (SRPs) are authorizations for commercial use, competitive events, group activities, recreation events, and providing vending services or supplies associated with recreation events.  SRPs are issued to ensure public health and safety, protect natural and recreational resources, reduce user conflicts, achieve recreation and other resource management objectives, and enhance the public’s opportunity for quality recreation experiences.</p>\n          <p>For instructions on how to submit a Special Recreation Application for Permit see the <a href=\"recHome\">Recreation Page.</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n -->\n\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/lead-srpdash/lead-srpdash.component.css":
/*!*********************************************************!*\
  !*** ./src/app/lead-srpdash/lead-srpdash.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lead-srpdash/lead-srpdash.component.html":
/*!**********************************************************!*\
  !*** ./src/app/lead-srpdash/lead-srpdash.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  lead-srpdash works!\n</p>\n"

/***/ }),

/***/ "./src/app/lead-srpdash/lead-srpdash.component.ts":
/*!********************************************************!*\
  !*** ./src/app/lead-srpdash/lead-srpdash.component.ts ***!
  \********************************************************/
/*! exports provided: LeadSrpdashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadSrpdashComponent", function() { return LeadSrpdashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeadSrpdashComponent = /** @class */ (function () {
    function LeadSrpdashComponent() {
    }
    LeadSrpdashComponent.prototype.ngOnInit = function () {
    };
    LeadSrpdashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lead-srpdash',
            template: __webpack_require__(/*! ./lead-srpdash.component.html */ "./src/app/lead-srpdash/lead-srpdash.component.html"),
            styles: [__webpack_require__(/*! ./lead-srpdash.component.css */ "./src/app/lead-srpdash/lead-srpdash.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeadSrpdashComponent);
    return LeadSrpdashComponent;
}());



/***/ }),

/***/ "./src/app/log-in/log-in.component.css":
/*!*********************************************!*\
  !*** ./src/app/log-in/log-in.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login {\r\n    min-height: 100vh;\r\n    width: auto;\r\n    background-image: url('canyon.jpg');\r\n    background-position: top center;\r\n    background-size: 100% 100%;\r\n}\r\n.jumbotron {\r\n    background-color: rgba(0, 0, 0, 0.75);\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\np, h1, h2, h3, h4, label {\r\n    /* font-family: 'Raleway', sans-serif; */\r\n    /* font-family: 'Poppins', sans-serif; */\r\n    font-family: 'Merriweather Sans', sans-serif;\r\n}\r\np {\r\n    color: azure;\r\n    font-size: 16px;\r\n}\r\nh3 {\r\n    color: #267257;\r\n    font-weight: bolder;\r\n}\r\nh4 {\r\n    color: #303E73;\r\n    font-weight: bolder;\r\n}\r\nlabel {\r\n    color: azure;\r\n    font-weight: bolder;\r\n}"

/***/ }),

/***/ "./src/app/log-in/log-in.component.html":
/*!**********************************************!*\
  !*** ./src/app/log-in/log-in.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login\">\n  <div class=\"container-fluid\">\n    <div class=\"text-center\">\n      <h1>SPATS Log In</h1>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-8 offset-sm-2\">\n        <div class=\"jumbotron\">\n          <p class=\"lead\">Not a member? Please <a routerLink=\"/createAccount\">create an account</a> instead.</p>\n          <form (submit)=\"login()\">\n            <div class=\"form-group\">\n              <label for=\"email\">Email address</label>\n              <input type=\"email\" class=\"form-control\"\n              name=\"email\" required\n              placeholder=\"Enter email\"\n              [(ngModel)]=\"credentials.email\" #email=\"ngModel\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" class=\"form-control\"\n              name=\"password\" required\n              placeholder=\"Password\"\n              [(ngModel)]=\"credentials.password\" #password=\"ngModel\">\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-7\">\n                <button [disabled]=\"email.invalid||password.invalid\" type=\"submit\" class=\"btn btn-block btn-success\">Sign In!</button>\n              </div>\n              <div class=\"col-xs-12 col-sm-5\">\n                <button [disabled]=\"email.invalid\" type=\"button\" class=\"btn btn-block btn-warning\" (click)=\"sendPasswordEmail()\">Forgot Password?</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>  \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/log-in/log-in.component.ts":
/*!********************************************!*\
  !*** ./src/app/log-in/log-in.component.ts ***!
  \********************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogInComponent = /** @class */ (function () {
    function LogInComponent(auth, router, profile) {
        this.auth = auth;
        this.router = router;
        this.profile = profile;
        this.credentials = {};
    }
    LogInComponent.prototype.ngOnInit = function () {
    };
    LogInComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/home');
        }, function (err) {
            console.error(err.error.message);
            _this.credentials.email = '';
            _this.credentials.password = '';
            alert(err.error.message);
        });
    };
    LogInComponent.prototype.sendPasswordEmail = function () {
        this.userExists();
        /*
        if (this.response === 'true') {
          alert('Please follow the directions in the email sent to ' + this.credentials.email + ' for resetting your password.');
          this.credentials.email = '';
          this.credentials.password = '';
        } else {
          alert('No user found with the enail address entered!!');
        }
        */
    };
    LogInComponent.prototype.userExists = function () {
        var _this = this;
        console.log('got into user exists ' + this.credentials.email);
        this.profile.userExists(this.credentials.email).subscribe(function (res) {
            _this.response = res;
            alert('un the asfjkh ' + _this.response);
        }, function (err) {
            console.error(err.error.message);
            _this.credentials.email = '';
            _this.credentials.password = '';
            alert('in error ' + err.error.message);
        });
    };
    LogInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-in',
            template: __webpack_require__(/*! ./log-in.component.html */ "./src/app/log-in/log-in.component.html"),
            styles: [__webpack_require__(/*! ./log-in.component.css */ "./src/app/log-in/log-in.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]])
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\r\n  font-size: 14px;\r\n}\r\n.navbar {\r\n  background-color: rgb(27, 27, 27);\r\n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark\">\n  <img src=\"../../assets/images/US-DOI-BLM-logo.png\"\n       style=\"height: 50px; width: auto;\">\n  <a class=\"navbar-brand\" href=\"\">RAPTOR</a>\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\n    [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarSupportedContent\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"!isCollapsed\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <div class=\"nav-item dropdown\" *ngIf=\"auth.isLoggedIn()\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" ngbDropdownToggle>Applications</a>\n        <div class=\"dropdown-menu\" ngbDropdownMenu aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"srpApp\">SRP Application</a>\n          <a class=\"dropdown-item\" href=\"#\">PRUP Application</a>\n        </div>\n      </div>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" *ngIf=\"auth.isLoggedIn()\" href=\"appDash\">Applicant Dashboard</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" *ngIf=\"auth.isLoggedIn()\" href=\"blmDash\">BLM Dashboard</a>\n      </li>\n      <div class=\"nav-item dropdown\" *ngIf=\"auth.isLoggedIn()\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" ngbDropdownToggle>Reviews</a>\n        <div class=\"dropdown-menu\" ngbDropdownMenu aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Completeness</a>\n          <a class=\"dropdown-item\" href=\"reviewTwo\">Cost Recovery and Substantial Work</a>\n          <a class=\"dropdown-item\" href=\"reviewThree\">Final Review</a>\n        </div>\n      </div>\n      <div class=\"nav-item dropdown\" *ngIf=\"auth.isLoggedIn()\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" ngbDropdownToggle>Admin Console</a>\n        <div class=\"dropdown-menu\" ngbDropdownMenu aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"terms\">Terms and Conditions</a>\n          <a class=\"dropdown-item\" href=\"applicantSearch\">Applicant Search</a>\n          <a class=\"dropdown-item\" href=\"BLMSearch\">BLM User Search</a>\n          <a class=\"dropdown-item\" href=\"docLib\">Document Library</a>\n          <a class=\"dropdown-item\" href=\"domains\">Domains</a>\n        </div>\n      </div>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" *ngIf=\"!auth.isLoggedIn()\" href=\"createAccount\">Create Account</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" *ngIf=\"auth.isLoggedIn()\" href=\"profile\">Profile</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" *ngIf=\"!auth.isLoggedIn()\" href=\"logIn\">Log In</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" *ngIf=\"auth.isLoggedIn()\" href=\"/\" (click)=\"auth.logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(auth, profile) {
        this.auth = auth;
        this.profile = profile;
        this.details = {};
    }
    NavComponent.prototype.ngOnInit = function () {
        // this.getProfile();
    };
    NavComponent.prototype.getProfile = function () {
        var _this = this;
        return this.profile.getProfile().subscribe(function (user) {
            _this.details = user;
            console.log(_this.details);
        }, function (err) {
            console.error(err);
        });
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/paleo-home/paleo-home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/paleo-home/paleo-home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotronSand {\r\n  background-color: #F4DEA6;\r\n}\r\n.jumbotronBurnt {\r\n  background-color: #C2500F;\r\n}\r\n.jumbotronGreen {\r\n  background-color: #9FCF6E;\r\n}\r\nh1, p {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/paleo-home/paleo-home.component.html":
/*!******************************************************!*\
  !*** ./src/app/paleo-home/paleo-home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <div class=\"jumbotronSand\">\n        <h1>Some Heading</h1>\n        <p>alskdfjaslhdfksjadhf</p>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div class=\"jumbotronBurnt\">\n          <h1>Some Heading</h1>\n          <p>alskdjflasjkdkf;asfd</p>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n          <div class=\"jumbotronGreen\">\n            <h1>Some Heading</h1>\n            <p>asdjfkasdjflaskjdf</p>\n          </div>\n        </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/paleo-home/paleo-home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/paleo-home/paleo-home.component.ts ***!
  \****************************************************/
/*! exports provided: PaleoHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaleoHomeComponent", function() { return PaleoHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaleoHomeComponent = /** @class */ (function () {
    function PaleoHomeComponent() {
    }
    PaleoHomeComponent.prototype.ngOnInit = function () {
    };
    PaleoHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paleo-home',
            template: __webpack_require__(/*! ./paleo-home.component.html */ "./src/app/paleo-home/paleo-home.component.html"),
            styles: [__webpack_require__(/*! ./paleo-home.component.css */ "./src/app/paleo-home/paleo-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaleoHomeComponent);
    return PaleoHomeComponent;
}());



/***/ }),

/***/ "./src/app/rec-home/rec-home.component.css":
/*!*************************************************!*\
  !*** ./src/app/rec-home/rec-home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#recHome {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-image: url('canyon.jpg');\r\n    background-position: top center;\r\n    background-size: 100% 100%;\r\n}\r\n.jumbotron {\r\n    background-color: rgba(0, 0, 0, 0.75);\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\np, h1, h2, h3, h4, li {\r\n    /* font-family: 'Raleway', sans-serif; */\r\n    /* font-family: 'Poppins', sans-serif; */\r\n    font-family: 'Merriweather Sans', sans-serif;\r\n}\r\np {\r\n    color: azure;\r\n    font-size: 16px;\r\n}\r\nh3 {\r\n    color: #267257;\r\n    font-weight: bolder;\r\n}\r\nh4 {\r\n    color: #303E73;\r\n    font-weight: bolder;\r\n}\r\nli {\r\n    color: #7A85AD;\r\n    list-style-type: square;\r\n    margin-left: -5px;\r\n}\r\nspan:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n.map_frame iframe {\r\n    width:100%;\r\n    height:100%;\r\n}\r\n.map_frame {\r\n    height: 500px;\r\n    width:100%;\r\n}"

/***/ }),

/***/ "./src/app/rec-home/rec-home.component.html":
/*!**************************************************!*\
  !*** ./src/app/rec-home/rec-home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"recHome\">\n  <div class=\"container-fluid\" >\n    <div class=\"text-center\">\n      <h1>Special Recreation Permits</h1>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-6 offset-md-1\">\n        <div class=\"jumbotron\">\n          <p>Something goes here.  It will be so great.  Not sure what it is yet but it will be awesome.</p>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-md-4\">\n        <div class=\"jumbotron\">\n          <h3>Quick Links</h3>\n          <h4>Informational Videos</h4>\n          <ul>\n            <li><span (click)=\"open(frankTurner)\">What is a SRP and Why is it Needed?</span></li>\n            <li><span (click)=\"open(hotWaterMusic)\">How to access and use the SPR Application System?</span></li>\n            <li><span (click)=\"open(hotWaterMusic)\">What happens after you submit an application?</span></li>\n            <li><span (click)=\"open(gaslightAnthem)\">What to expect in the Field Office Consultation?</span></li>\n          </ul>\n          <h4>Additional Informational</h4>\n          <ul>\n            <li>User Guide</li>\n            <li>Where to go for help?</li>\n            <li>Need Help Creating an Operation Plan?</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-10 offset-md-1\">\n        <div class=\"jumbotron\">\n          <h3>Lets put a map here....why not?</h3>\n          <div class=\"map_frame\">\n            <iframe\n            frameborder=\"0\" style=\"border:0\"\n            src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyAbpZcWTxpqLAPx_sUQGeI2w3HAAczmms4&q=Denver, CO\" allowfullscreen>\n            </iframe>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #frankTurner let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"text-center\">\n      <iframe width=\"750\" height=\"450\" src=\"https://www.youtube.com/embed/Cf5O2M5GaEA\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n<ng-template #hotWaterMusic let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"text-center\">\n      <iframe width=\"750\" height=\"450\" src=\"https://www.youtube.com/embed/XPVNKIqy_cw\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n<ng-template #gaslightAnthem let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"text-center\">\n        <iframe width=\"750\" height=\"450\" src=\"https://www.youtube.com/embed/J-ZN7NyPfb4\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/rec-home/rec-home.component.ts":
/*!************************************************!*\
  !*** ./src/app/rec-home/rec-home.component.ts ***!
  \************************************************/
/*! exports provided: RecHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecHomeComponent", function() { return RecHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecHomeComponent = /** @class */ (function () {
    function RecHomeComponent(modalService) {
        this.modalService = modalService;
    }
    RecHomeComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    RecHomeComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    RecHomeComponent.prototype.ngOnInit = function () {
    };
    RecHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rec-home',
            template: __webpack_require__(/*! ./rec-home.component.html */ "./src/app/rec-home/rec-home.component.html"),
            styles: [__webpack_require__(/*! ./rec-home.component.css */ "./src/app/rec-home/rec-home.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], RecHomeComponent);
    return RecHomeComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.component.css":
/*!***********************************************!*\
  !*** ./src/app/reports/reports.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reports/reports.component.html":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reports works!\n</p>\n"

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/review-three/review-three.component.css":
/*!*********************************************************!*\
  !*** ./src/app/review-three/review-three.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/review-three/review-three.component.html":
/*!**********************************************************!*\
  !*** ./src/app/review-three/review-three.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  review-three works!\n</p>"

/***/ }),

/***/ "./src/app/review-three/review-three.component.ts":
/*!********************************************************!*\
  !*** ./src/app/review-three/review-three.component.ts ***!
  \********************************************************/
/*! exports provided: ReviewThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewThreeComponent", function() { return ReviewThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReviewThreeComponent = /** @class */ (function () {
    function ReviewThreeComponent() {
    }
    ReviewThreeComponent.prototype.ngOnInit = function () {
    };
    ReviewThreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-three',
            template: __webpack_require__(/*! ./review-three.component.html */ "./src/app/review-three/review-three.component.html"),
            styles: [__webpack_require__(/*! ./review-three.component.css */ "./src/app/review-three/review-three.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewThreeComponent);
    return ReviewThreeComponent;
}());



/***/ }),

/***/ "./src/app/review-two/review-two.component.css":
/*!*****************************************************!*\
  !*** ./src/app/review-two/review-two.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n  font-weight: bolder;\r\n}"

/***/ }),

/***/ "./src/app/review-two/review-two.component.html":
/*!******************************************************!*\
  !*** ./src/app/review-two/review-two.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"text-center\">\n    <h1>Sub Office Substaintial Work and Cost Recovery Review</h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-5 offset-1\">\n      <p><b>Lead Ofice:</b>Craig Field Office</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-4 offset-1\">\n      <p><b>Organization: </b>John's Monster Truck Company</p>\n      <p><b>Event Name: </b>Smach Them Trucks</p>     \n    </div>\n    <div class=\"col-6\">\n        <p><b>Application Name: </b>Some Name of an App.</p>\n        <p><b>Event Start Date: </b>October 3rd, 2018 &emsp;<b>Event End Date</b>October 7th, 2018</p>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <ngb-tabset>\n    <ngb-tab title=\"Application\">\n      <ng-template ngbTabContent>\n        <div class=\"row\">\n          <div class=\"col-3 offset-1\">\n            <label>Application Type</label>\n            <p>New Application</p>\n          </div>\n          <div class=\"col-7\">\n            <label>Name of Business or Organization</label>\n            <p>John's Monster Truck Company</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4 offset-1\">\n            <label>First Name</label>\n            <p>John</p>\n          </div>\n          <div class=\"col-2\">\n            <label>Middle Initial</label>\n            <p>M</p>\n          </div>\n          <div class=\"col-4\">\n            <label>Last Name</label>\n            <p>Doe</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4 offset-1\">\n            <label>Address</label>\n            <p>1234 North Street<br/>\n               Denver, CO 80202\n            </p>\n          </div>\n          <div class=\"col-3\">\n            <label>Phone No.</label>\n            <p>303-555-4321</p>\n          </div>\n          <div class=\"col-3\">\n            <label>FAX No.</label>\n            <p>303-555-1234</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-5 offset-1\">\n            <label>Email Address</label>\n            <p>aMadeUpEmail@bablahlaw.org</p>\n          </div>\n          <div class=\"col-5\">\n            <label>Website</label>\n            <p>SmashThemTrucks.com</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-10 offset-1\">\n            <label>Applicant Is:</label>\n            <p>Corperation</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-10 offset-1\">\n            <label>Name(s) and Phone Number(s) of person(s) aurthorized to conduct business with BLM concerning the permit:</label>\n            <p>Jane Doe 303-555-6789</p>\n            <p>Peter Piper 303-555-0001</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-10 offset-1\">\n            <label>Application is for:</label>\n            <p>Commercial</p>\n            <p>Competative</p>\n            <p>Vending</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-10 offset-1\">\n            <label>To use the following public lands/related waters</label>\n            <p>The roads and mountain near there...you know what I am talking about.  Just Approve this.</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-10 offset-1\">\n            <label>Map</label>\n            <p>/*************************************************/</p>\n            <p>/*************************************************/</p>\n            <p>/*************************************************/</p>\n            <p>/*************************************************/</p>\n            <p>/*************************************************/</p>\n            <p>/*************************************************/</p>\n            <p>/*************************************************/</p>\n            <p>/*************************************************/</p>\n            <a href=\"#\">Download Map</a>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-10 offset-1\">\n            <label>For the following purpose</label>\n            <p>Host a show where trucks smash stuff.  It will be a blast.</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-5 offset-1\">\n            <label>Event Begining Date</label>\n            <p>October 3rd, 2018</p>\n          </div>\n          <div class=\"col-5\">\n            <label>Ending Date</label>\n            <p>October 7th, 2018</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-5 offset-1\">\n            <label>Do you have a permit with the BLM/USFS/NPS?</label>\n            <p>No</p>\n          </div>\n          <div class=\"col-5\">\n            <label>Have you had a permit previously?</label>\n            <p>Yes</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-5 offset-1\">\n            <label>Have you ever been denied or had a permit revoked?</label>\n            <p>No</p>\n          </div>\n          <div class=\"col-5\">\n            <label>Have you forfeited a bond or other security?</label>\n            <p>No</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-5 offset-1\">\n            <label>Do you have any unresolved, criminal, civil or\n                administrative actions related to a permit or the\n                activities you plan to conduct under this permit?</label>\n            <p>No</p>\n          </div>\n          <div class=\"col-5\">\n            <label>Have you been convicted, or paid a fine, or\n                forfeited a bond, for violations regarding natural\n                resources, cultural resources or any activity\n                related to your proposal?</label>\n            <p>No</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-10 offset-1\">\n            <label>Attachments</label>\n            <p><a href=\"#\">Operations Plan</a></p>\n            <p><a href=\"#\">Something Else</a></p>\n          </div>\n        </div>\n\n      </ng-template>\n    </ngb-tab>\n\n    <ngb-tab title=\"Review\">\n      <ng-template ngbTabContent>\n        <form>\n          <div class=\"row\">\n            <div class=\"col-6 offset-1\">\n              <div class=\"form-group\">\n                <label for=\"process\">Are you Able to Process this Application?</label>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" checked>\n                  <label class=\"form-check-label\" for=\"exampleRadios1\">\n                    Yes\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\n                  <label class=\"form-check-label\" for=\"exampleRadios2\">\n                    No\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-10 offset-1\">\n              <div class=\"form-group\">\n                <label for=\"reviewComments\">Discussion and Comments for Lead Ofiice to Consider</label>\n                <textarea class=\"form-control\" name=\"reviewComments\" id=\"reviewComments\" rows=\"5\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-5 offset-1\">\n              <div class=\"form-group\">\n                <label for=\"nepa\">Anticipated NEPA</label>\n                <select class=\"form-control\">\n                  <option selected>--Pick One--</option>\n                  <option>Environmental Impact Statements (EIS)</option>\n                  <option>Environmental Assessments (EA)</option>\n                  <option>Categorical Exclusion (EX)</option>\n                  <option>Determination of NEPA Adequacy (DNA)</option>\n                </select>\n              </div>        \n            </div>            \n          </div>\n          <div class=\"row\">\n            <div class=\"col-10 offset-1\">\n              <label for=\"employeeCost\">Employee Cost Table</label>\n              <table class=\"table table-sm table-bordered table-responsive\">\n                <thead>\n                  <th scope=\"col\">Employee Pos.</th>\n                  <th scope=\"col\">App. Review Workload Reg. Hours</th>\n                  <th scope=\"col\">App. Review Workload O.T. Hours</th>\n                  <th scope=\"col\">NEPA Workload Reg. Hours</th>\n                  <th scope=\"col\">NEPA Workload O.T. Hours</th>\n                  <th scope=\"col\">Monitoring Workload (Pre, During, and Post Event) Reg. Hours </th>\n                  <th scope=\"col\">Monitoring Workload (Pre, During, and Post Event) O.T. Hours</th>\n                  <th scope=\"col\">Post Use Permit Admin. Workload Reg Hours</th>\n                  <th scope=\"col\">Post Use Permit Admin. Workload O.T. Hours</th>\n                  <th scope=\"col\">Total Reg. Hours</th>\n                  <th scope=\"col\">Total O.T. Hours</th>\n                  <th scope=\"col\">Total Hours</th>\n                  <th scope=\"col\">Reg. Hourly Salary</th>\n                  <th scope=\"col\">O.T. Hourly Salary</th>\n                  <th scope=\"col\">Total Reg. Salary Cost</th>\n                  <th scope=\"col\">Total O.T. Salary Cost</th>\n                  <th scope=\"col\">Total Cost</th>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <select>\n                        <option selected>--Employee Type--</option>\n                        <option>Outdoor Recreation Planner</option>\n                        <option>Recreation Technician</option>\n                        <option>Park Ranger</option>\n                        <option>Archeologist</option>\n                        <option>Wildlife Biologist</option>\n                      </select>\n                    </td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\" disabled></td>\n                    <td><input type=\"number\" disabled></td>\n                    <td><input type=\"number\" disabled></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\" disabled></td>\n                    <td><input type=\"number\" disabled></td>\n                    <td><input type=\"number\" disabled></td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <select>\n                        <option selected>--Employee Type--</option>\n                        <option>Outdoor Recreation Planner</option>\n                        <option>Recreation Technician</option>\n                        <option>Park Ranger</option>\n                        <option>Archeologist</option>\n                        <option>Wildlife Biologist</option>\n                      </select>\n                    </td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\" disabled></td>\n                    <td><input type=\"number\" disabled></td>\n                    <td><input type=\"number\" disabled></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\" disabled></td>\n                    <td><input type=\"number\" disabled></td>\n                    <td><input type=\"number\" disabled></td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <select>\n                        <option selected>--Employee Type--</option>\n                        <option>Outdoor Recreation Planner</option>\n                        <option>Recreation Technician</option>\n                        <option>Park Ranger</option>\n                        <option>Archeologist</option>\n                        <option>Wildlife Biologist</option>\n                      </select>\n                    </td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\" disabled></td>\n                    <td><input type=\"number\" disabled></td>\n                    <td><input type=\"number\" disabled></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\"></td>\n                    <td><input type=\"number\" disabled></td>\n                    <td><input type=\"number\" disabled></td>\n                    <td><input type=\"number\" disabled></td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-5 offset-1\">\n              <div class=\"form-group\">\n                <label>Total Hours</label>\n                <input class=\"form-control\" type=\"number\" placeholder=\"123.45\" disabled>\n              </div>\n            </div>\n            <div class=\"col-5\">\n              <div class=\"form-group\">\n                <label for=\"totalLaborCost\">Total Labor Cost</label>\n                <input class=\"form-control\" type=\"number\" disabled>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-10 offset-1\">\n              <label for=\"otherCost\">Other Cost Table</label>\n              <table class=\"table table-sm table-bordered\">\n                <thead>\n                  <th scope=\"col\">Other Cost Type</th>\n                  <th scope=\"col\">Desctription</th>\n                  <th scope=\"col\">Cost Amount</th>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <select>\n                        <option selected>--Other Cost Type</option>\n                        <option>Vehicle Cost</option>\n                        <option>Materials/Supplies Cost</option>\n                        <option>Travel/Per Diem Cost</option>\n                        <option>Other</option>\n                      </select>\n                    </td>\n                    <td><input type=\"text\"></td>\n                    <td><input type=\"number\"></td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <select>\n                        <option selected>--Other Cost Type--</option>\n                        <option>Vehicle Cost</option>\n                        <option>Materials/Supplies Cost</option>\n                        <option>Travel/Per Diem Cost</option>\n                        <option>Other</option>\n                      </select>\n                    </td>\n                    <td><input type=\"text\"></td>\n                    <td><input type=\"number\"></td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <select>\n                        <option selected>--Other Cost Type</option>\n                        <option>Vehicle Cost</option>\n                        <option>Materials/Supplies Cost</option>\n                        <option>Travel/Per Diem Cost</option>\n                        <option>Other</option>\n                      </select>\n                    </td>\n                    <td><input type=\"text\"></td>\n                    <td><input type=\"number\"></td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-5 offset-1\">\n              <div class=\"form-group\">\n                <label for=\"totalOtherCost\">Total Other Cost</label>\n                <input class=\"form-control\" type=\"number\" disabled>\n              </div>\n            </div>\n            <div class=\"col-5\">\n              <div class=\"form-group\">\n                <label for=\"indirectCost\">Indirect Cost</label>\n                <input class=\"form-control\" type=\"number\" disabled>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-5 offset-1\">\n              <div class=\"form-group\">\n                <label for=\"totalCost\">Total Cost</label>\n                <input class=\"form-control\" type=\"number\" disabled>\n              </div>\n            </div>\n          </div>        \n          <div class=\"row\">\n            <div class=\"col-5 offset-1\">\n              <div class=\"form-group\">\n                <label for=\"subOfficeReviewAttachment\">Attachments</label>\n                <input class=\"form-control\" type=\"file\" name=\"subOfficeReviewAttachment\" multiple>\n              </div>\n            </div>\n          </div>\n        </form>\n      </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>\n"

/***/ }),

/***/ "./src/app/review-two/review-two.component.ts":
/*!****************************************************!*\
  !*** ./src/app/review-two/review-two.component.ts ***!
  \****************************************************/
/*! exports provided: ReviewTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewTwoComponent", function() { return ReviewTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReviewTwoComponent = /** @class */ (function () {
    function ReviewTwoComponent() {
    }
    ReviewTwoComponent.prototype.ngOnInit = function () {
    };
    ReviewTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-two',
            template: __webpack_require__(/*! ./review-two.component.html */ "./src/app/review-two/review-two.component.html"),
            styles: [__webpack_require__(/*! ./review-two.component.css */ "./src/app/review-two/review-two.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewTwoComponent);
    return ReviewTwoComponent;
}());



/***/ }),

/***/ "./src/app/services/application/srp-application.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/application/srp-application.service.ts ***!
  \*****************************************************************/
/*! exports provided: SrpApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SrpApplicationService", function() { return SrpApplicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SrpApplicationService = /** @class */ (function () {
    function SrpApplicationService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    SrpApplicationService.prototype.saveApplication = function (app) {
        console.log(app);
        if (app._id) {
            return this.http.put('/api/updateApplication', app, { headers: { Authorization: "Bearer " + this.auth.getToken() } });
        }
        else {
            return this.http.post('/api/updateApplication', app, { headers: { Authorization: "Bearer " + this.auth.getToken() } });
        }
    };
    SrpApplicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], SrpApplicationService);
    return SrpApplicationService;
}());



/***/ }),

/***/ "./src/app/services/authentication/auth-guard.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/authentication/auth-guard.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/authentication/authentication.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/authentication/authentication.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post("/api/" + type, user);
        }
        else {
            base = this.http.get("/api/" + type, { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.register = function (user) {
        return this.request('post', 'register', user);
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    AuthenticationService.prototype.BLMLogin = function (user) {
        console.log('got into authservice BLMLogin');
        return this.request('post', 'BLMLogin', user);
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/profile/profile.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/profile/profile.service.ts ***!
  \*****************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.details = {};
        this.userType = '';
    }
    ProfileService.prototype.updateProfile = function (data) {
        return this.http.post('/api/updateProfile', data, { headers: { Authorization: "Bearer " + this.auth.getToken() } });
    };
    ProfileService.prototype.getProfile = function () {
        return this.http.get('/api/profile', { headers: { Authorization: "Bearer " + this.auth.getToken() } });
    };
    ProfileService.prototype.userExists = function (email) {
        console.log('got into profile service ' + email);
        return this.http.post('/api/userExists', email);
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/services/states/states.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/states/states.service.ts ***!
  \***************************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AuthenticationService } from '../authentication/authentication.service';
var StateService = /** @class */ (function () {
    function StateService(http) {
        this.http = http;
        this.states = [];
    }
    StateService.prototype.getStates = function () {
        return this.http.get('/assets/data/states.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    StateService.prototype.filterStates = function (term) {
        console.log('got into filtered states service: ' + term);
        this.getStates().subscribe(function (states) {
            // console.log(this.states);
        });
        console.log(this.states.filter(function (item) { return item.name === term; }));
        return this.states.filter(function (item) { return item.name === term; });
    };
    StateService.prototype.filterThing = function () {
        var _this = this;
        http.get('/assets/data/states.json')
            .flatMap(function (response) { return response.json(); })
            .filter(function (state) { return state.name > 'USA'; })
            .map(function (state) { return state; })
            .subscribe(function (data) {
            _this.states.push(data);
        });
    };
    StateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/srp-application/srp-application.component.css":
/*!***************************************************************!*\
  !*** ./src/app/srp-application/srp-application.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n  font-weight: bolder;\r\n}\r\n.red {\r\n  color: red;\r\n}\r\ninput:invalid+span:after {\r\n  position: absolute;\r\n  display: inline;\r\n  content: '✖';\r\n  padding-left: 5px;\r\n  color: #8b0000;\r\n}\r\ninput:valid+span:after {\r\n  position: absolute;\r\n  display: inline;\r\n  content: '✓';\r\n  padding-left: 5px;\r\n  color: #009000;\r\n}"

/***/ }),

/***/ "./src/app/srp-application/srp-application.component.html":
/*!****************************************************************!*\
  !*** ./src/app/srp-application/srp-application.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"text-center\">\n    <h1>Special Recreation Permit <small>(OMB Form 2930-1)</small></h1>\n  </div>\n  <form>\n    <ngb-tabset>\n      <ngb-tab title=\"Basic Information\">\n        <ng-template ngbTabContent>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 offset-sm-1\">\n              <div class=\"form-group\">\n                <label for=\"appName\">Application Name <span class=\"red\">*</span></label>\n                <input class=\"form-control\" type=\"text\"\n                maxlength=\"50\" required name=\"appName\"\n                [(ngModel)]=\"app.applicationName\">\n              </div>\n             </div>\n            <div class=\"col-xs-12 col-sm-4\">\n              <div class=\"form-group\">\n                <label for=\"permitNumber\">Pernit No.</label>\n                <input class=\"form-control\" type=\"number\" disabled [(ngModel)]=\"app.permitNumber\" name=\"permitNumber\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-4 offset-sm-1\">\n              <div class=\"form-group\">\n                <label for=\"appType\">Application Type <span class=\"red\">*</span></label>\n                <select class=\"form-control\" required [(ngModel)]=\"app.applicationType\" name=\"applicationType\">\n                  <option value=\"New\" selected>New Application</option>\n                  <option value=\"Renewal\">Permit Renewal</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"orgName\">Name of Business or Organization <span class=\"red\">*</span></label>\n                <input class=\"form-control\" type=\"text\" maxlength=\"100\" required [(ngModel)]=\"app.organization\" name=\"organization\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-4 offset-sm-1\">\n              <div class=\"form-group\">\n                <label for=\"firstName\">First Name<span class=\"red\">*</span></label>\n                  <input class=\"form-control\" type=\"text\" maxlength=\"20\" required [(ngModel)]=\"app.applicantFirstName\" name=\"applicantFirstName\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-2\">\n              <div class=\"form-group\">\n                <label for=\"midInit\">Middle Initial</label>\n                  <input class=\"form-control\" type=\"text\" maxlength=\"1\" required [(ngModel)]=\"app.applicantMiddleInitial\" name=\"applicantMiddleInitial\">\n              </div>\n             </div>\n             <div class=\"col-xs-12 col-sm-4\">\n                <div class=\"form-group\">\n                 <label for=\"lastName\">Last Name<span class=\"red\">*</span></label>\n                   <input class=\"form-control\" type=\"text\" maxlength=\"20\" required [(ngModel)]=\"app.applicantLastName\" name=\"applicantLastName\">\n               </div>\n             </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-5 offset-sm-1\">\n              <div class=\"form-group\">\n                <label for=\"address1\">Address 1 <span class=\"red\">*</span></label>\n                <input class=\"form-control\" type=\"text\" required [(ngModel)]=\"app.address1\" name=\"adress1\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-5\">\n              <div class=\"form-group\">\n                <label for=\"address2\">Address 2</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"app.address2\" name=\"adress2\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-4 offset-sm-1\">\n              <div class=\"form-group\">\n                <label for=\"city\">City <span class=\"red\">*</span></label>\n                <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"app.city\" name=\"city\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-2\">\n              <div class=\"form-group\">\n                <label for=\"country\">Country</label>\n                <select class=\"form-control\" required [(ngModel)]=\"country\" name=\"country\" id=\"country\">\n                  <option selected disabled>--Select One--</option>\n                  <option *ngFor=\"let country of countries\">{{ country.name }}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-2\">\n              <div class=\"form-group\">\n                <label for=\"state\">State <span class=\"red\">*</span></label>\n                <select class=\"form-control\" required name=\"state\" [(ngModel)]=\"app.state\">\n                  <option selected disabled>----</option>\n                  <option *ngFor=\"let state of states\">{{ state.abbreviation }}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-2\">\n              <div class=\"form-group\">\n                <label for=\"zipCode\">Zip Code</label>\n                <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"app.zipCode\" name=\"zipCode\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-4 offset-sm-1\">\n              <div class=\"form-group\">\n                <label for=\"phoneNumber\">Phone Number <span class=\"red\">*</span></label>\n                <input class=\"form-control\" type=\"tel\" placeholder=\"123-4567-8901\" pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\" required\n                [(ngModel)]=\"app.phoneNumber\" name=\"phoneNumber\">\n                <span class=\"validity\"></span>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-2\">\n              <div class=\"form-group\">\n                <label for=\"extension\">Ext.</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"1234\" pattern=\"[0-9]{4}\" [(ngModel)]=\"app.ext\" name=\"ext\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-4\">\n              <div class=\"form-group\">\n                <label for=\"faxNumber\">FAX Number <span class=\"red\">*</span></label>\n                <input type=\"tel\" class=\"form-control\" placeholder=\"123-4567-8901\" pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\" required\n                [(ngModel)]=\"app.faxNumber\" name=\"faxNumber\">\n                <span class=\"validity\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-5 offset-sm-1\">\n              <div class=\"form-group\">\n                <label for=\"email\">Email Address <span class=\"red\">*</span></label>\n                <input type='email' class=\"form-control\" required [(ngModel)]=\"app.email\" name=\"email\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-5\">\n              <div class=\"form-group\">\n                <label for=\"webURL\">Website</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"app.webURL\" name=\"webURL\">\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"Application Questions\">\n        <ng-template ngbTabContent>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-5 offset-1\">\n              <div class=\"form-group\">\n                <label for=\"applicantType\">Applicant Is? <span class=\"red\">*</span></label>\n                <select class=\"form-control\" required [(ngModel)]=\"app.applicantType\" name=\"applicantType\">\n                  <option selected disabled>--Select One--</option>\n                  <option value=\"Individual\">Individual</option>\n                  <option value=\"Corporation\">Corporation</option>\n                  <option value=\"Government Agency\">Government Agency</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-5 offset-sm-1\">\n              <div class=\"form-group\">\n                <label for=\"applicationUse\">Application is for? <span class=\"red\">*</span></label>\n                <select multiple class=\"form-control\" required [(ngModel)]=\"app.applicationUse\" name=\"applicationUse\">\n                  <option selected disabled>--Select All that Apply--</option>\n                  <option>Commercial</option>\n                  <option>Competative</option>\n                  <option>Organized Group</option>\n                  <option>Vending</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-10 offset-sm-1\">\n              <label>Other Individuals Operating on Permit</label>\n              <table class=\"table table-responsive table-bordered table-striped\">\n                <thead>\n                  <tr>\n                    <th>Name</th>\n                    <th>Phone Number</th>\n                    <th>Email</th>\n                    <th>Comments</th>\n                  </tr>\n                </thead>\n                <tr>\n                  <td><input type=\"text\"></td>\n                  <td><input type=\"text\"></td>\n                  <td><input type=\"text\"></td>\n                  <td><input type=\"text\"></td>\n                </tr>\n              </table>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"Map and Operations Plan\">\n        <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"Application\">\n        <ng-template ngbTabContent>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-5 offset-sm-1\">\n              <div class=\"form-group\">\n                <label for=\"beginDate\">Proposed Begin Date</label>\n                <input type=\"date\" name=\"beginDate\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-5\">\n              <div class=\"form-group\">\n                <label for=\"endDate\">Proposed End Date</label>\n                <input type=\"date\" name=\"endDate\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-5 offset-sm-1\">\n              <div class=\"form-group\">\n                <label for=\"15a\">Do you have a permit with BLM/USFS/NPS?</label>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-5\">\n              <div class=\"form-group\">\n                <label for=\"15b\">Have you had a permit previously?</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-5 offset-sm-1\">\n              <div class=\"form-group\">\n                <label for=\"15a\">Have you ever been denied or had a permit revoked?</label>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-5\">\n              <div class=\"form-group\">\n                <label for=\"15b\">Have you forfeited a bond or other security?</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-5 offset-sm-1\">\n              <div class=\"form-group\">\n                <label for=\"15a\">Do you have any unresolved, criminal, civil, or administrative actions related to a permit or the activities you plan to conduct under this permit?</label>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-5\">\n              <div class=\"form-group\">\n                <label for=\"15b\">Have you been convicted, or paid a fine, or forfeited a bond for violation regarding natural resources, cultural resources, or any activity related to your proposal?</label>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-4\">\n        <button type=\"reset\" class=\"btn btn-block btn-danger\" (click)=\"cancel()\">Cancel</button>\n      </div>\n      <div class=\"col-xs-12 col-sm-4\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"save()\">Save</button>\n      </div>\n      <div class=\"col-xs-12 col-sm-4\">\n        <button class=\"btn btn-block btn-success\" (click)=\"submit()\">Submit</button>\n      </div>\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/srp-application/srp-application.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/srp-application/srp-application.component.ts ***!
  \**************************************************************/
/*! exports provided: SrpApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SrpApplicationComponent", function() { return SrpApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_srp_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/application/srp-application.service */ "./src/app/services/application/srp-application.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_states_states_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/states/states.service */ "./src/app/services/states/states.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SrpApplicationComponent = /** @class */ (function () {
    function SrpApplicationComponent(
    // private filterPipe: FilterPipe,
    router, appService, stateService) {
        this.router = router;
        this.appService = appService;
        this.stateService = stateService;
        this.app = {};
        this.states = [];
        // filteredStates = [] as State[];
        this.countries = [{ 'name': 'Canada' }, { 'name': 'USA' }];
        this.country = 'USA';
    }
    SrpApplicationComponent.prototype.ngOnInit = function () {
        this.getFilteredStates(this.country);
        // this.getStates();
        console.log(this.countries);
    };
    SrpApplicationComponent.prototype.getStates = function () {
        var _this = this;
        console.log('Got into getStates');
        return this.stateService.getStates()
            .subscribe(function (states) {
            _this.states = states;
            console.log(_this.states);
        });
    };
    SrpApplicationComponent.prototype.getFilteredStates = function (country) {
        console.log('Got into Filtered States');
        return this.states = this.stateService.filterStates(country);
    };
    SrpApplicationComponent.prototype.cancel = function () {
        alert('Are you sure you want to cancel. Any changes will not be saved.');
        return this.router.navigateByUrl('/appDash');
    };
    SrpApplicationComponent.prototype.save = function () {
        this.app.status = 'Pending Submit';
        this.appService.saveApplication(this.app);
        alert('Application Saved.  Good Work!');
        // return this.router.navigateByUrl('/appDash');
    };
    SrpApplicationComponent.prototype.submit = function () {
        alert('Application Submitted.  Yippy!!');
        // return this.router.navigateByUrl('/appDash');
    };
    SrpApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-srp-application',
            template: __webpack_require__(/*! ./srp-application.component.html */ "./src/app/srp-application/srp-application.component.html"),
            styles: [__webpack_require__(/*! ./srp-application.component.css */ "./src/app/srp-application/srp-application.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_application_srp_application_service__WEBPACK_IMPORTED_MODULE_1__["SrpApplicationService"],
            _services_states_states_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], SrpApplicationComponent);
    return SrpApplicationComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\tmp\angular_projects\dev.test\spats\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map