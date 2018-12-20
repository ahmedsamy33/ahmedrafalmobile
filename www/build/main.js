webpackJsonp([25],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthentionServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the AuthentionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthentionServiceProvider = /** @class */ (function () {
    function AuthentionServiceProvider(http) {
        this.http = http;
    }
    AuthentionServiceProvider.prototype.userLogin = function (usename, password, lang, countryphonecode, browserType, osType, notificationId) {
        var data = {
            userName: usename,
            password: password,
            deviceType: "mobile",
            browserType: browserType,
            osType: osType,
            timeZone: "GMT+0200",
            language: lang,
            location: "Egypt",
            isMobileApp: true,
            notificationId: notificationId,
            countryPhoneCode: countryphonecode,
            appName: "Rafal Group Mobile"
        };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL + "userservices/signin", data, {
            headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJson()
        })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    /////////////////////////////////////////////////////////////////////////////////////////
    AuthentionServiceProvider.prototype.userSignUp = function (userName, password, name, nationalId, notificationId, countryphonecode) {
        var data = {
            userName: userName,
            passWord: password,
            name: name,
            nationalId: nationalId,
            notificationId: notificationId,
            countryPhoneCode: countryphonecode
        };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL + "userservices/signup", data, {
            headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJson()
        })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // /////////////////////////////////////////////////////////////////////////////
    AuthentionServiceProvider.prototype.forgetPassword = function (userName) {
        // let body = new FormData();
        // body.append('email', email);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL +
            "userservices/forgetpassword?username=" +
            userName, { headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonGetMethod() })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    AuthentionServiceProvider.prototype.requestForgetPassword = function (verificationcode, username, newpassword) {
        var data = new URLSearchParams();
        data.set("verificationcode", verificationcode);
        data.set("username", username);
        data.set("newpassword", newpassword);
        var body = data.toString();
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL + "userservices/resetpasswordforget", body, {
            headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderXWFORM()
        })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    AuthentionServiceProvider.prototype.userVerifyCode = function (verifyCode, userName, password, lang, browserType, osType, countryPhoneCode
        // nationalId
    ) {
        var data = {
            userName: userName,
            password: password,
            deviceType: "mobile",
            browserType: browserType,
            osType: osType,
            timeZone: "GMT+0200",
            language: lang,
            location: "Egypt",
            isMobileApp: true,
            // nationalId: nationalId,
            countryPhoneCode: countryPhoneCode,
            appName: "Rafal Group Mobile"
        };
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL +
            "userservices/mobilevalidate?verificationcode=" +
            verifyCode, data, { headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJson() })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    AuthentionServiceProvider.prototype.ResendCode = function (userPhone) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL + "userservices/resendcode?username=" + userPhone)
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    AuthentionServiceProvider.prototype.changePassword = function (oldpass, newpass) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL + "userservices/changepassword", null, {
            headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonFormData(oldpass, newpass)
        })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // /////////////////////////////////////////////////////////////////////////////////////////
    AuthentionServiceProvider.prototype.logOut = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonWithTKN()
        });
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL + "userservices/logout", null, options)
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // /////////////////////////////////////////////////////////////////////////////////////////
    AuthentionServiceProvider.prototype.validateSession = function () {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL + "usersessionservices/validatesession", null, {
            headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonWithTKN()
        })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // /////////////////////////////////////////////////////////////////////////////////////////
    // deactivateAccount(): Observable<any> {
    //   return this.http.post(setting.DOMAIN_URL + '/userservices/deactivateuser', null, { headers: setting.getHeaderJsonWithTKN() })
    //     .map(res => {
    //       return res.json();
    //     }).timeout(40000);
    // }
    // getVersionMobile(version: string): Observable<any> {
    //   return this.http.get(setting.DOMAIN_URL + '/userservices/mobileversion?ver=' + version)
    //     .map(res => {
    //       return res.json();
    //     }).timeout(40000);
    // }
    // ///////////////////////////////////// get pick list /////////////////////////////////////////////////
    AuthentionServiceProvider.prototype.getcountriesphpicklistcodes = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL + "picklistservices/getcountriesphpicklistcodes")
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // /////////////////////////////////////////////////////////////////////////////////////////
    AuthentionServiceProvider.prototype.updateLanguage = function (language) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL +
            "usersessionservices/updateusersession?language=" +
            language, null, { headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonWithTKN() })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    ////////////////////////
    // upload user profile image
    AuthentionServiceProvider.prototype.uploadImage = function (file) {
        var formData = new FormData();
        formData.append("profileimage", file);
        // console.log("form ", formData);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL + "userservices/uploadprofileimage", formData, {
            headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonWithTKN3()
        })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    AuthentionServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthentionServiceProvider);
    return AuthentionServiceProvider;
}());

//# sourceMappingURL=authention-service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sessionData; });
var sessionData = /** @class */ (function () {
    function sessionData() {
    }
    sessionData.saveDataInLocalStorage = function (data) {
        sessionData.userSessionData = data;
        sessionData.userSessionData.is_log = true;
        localStorage.setItem("userSessionData", JSON.stringify(sessionData.userSessionData));
    };
    sessionData.getDataFromLocalstorage = function () {
        this.getDate = JSON.parse(localStorage.getItem("userSessionData"));
        if (this.getDate != null) {
            sessionData.userSessionData.tkn = this.getDate.tkn;
            sessionData.userSessionData.language = this.getDate.language;
            sessionData.userSessionData.userDetails.userName = this.getDate.userDetails.userName;
            sessionData.userSessionData.userDetails.phone = this.getDate.userDetails.phone;
            sessionData.userSessionData.userDetails.picture_url = this.getDate.userDetails.picture_url;
            sessionData.userSessionData.userDetails.type = this.getDate.userDetails.type;
            sessionData.userSessionData.userDetails.userId = Number(this.getDate.userDetails.userId);
            sessionData.userSessionData.userDetails.blocked = Boolean(this.getDate.userDetails.blocked);
            sessionData.userSessionData.userDetails.resetPasswordNeeded = Boolean(this.getDate.userDetails.resetPasswordNeeded);
            sessionData.userSessionData.userDetails.validMobile = Boolean(this.getDate.userDetails.validMobile);
            sessionData.userSessionData.userDetails.gender = this.getDate.userDetails.gender;
            sessionData.userSessionData.userDetails.numOfNotifications = Number(this.getDate.userDetails.numOfNotifications);
            sessionData.userSessionData.userDetails.numOfVerification = this.getDate.userDetails.numOfVerification;
            sessionData.userSessionData.userDetails.cityCountryService = Boolean(this.getDate.userDetails.cityCountryService);
            sessionData.userSessionData.userDetails.notificationService = Boolean(this.getDate.userDetails.notificationService);
            sessionData.userSessionData.is_log = Boolean(this.getDate.is_log);
        }
    };
    sessionData.clearDateFromLocalStorage = function () {
        localStorage.removeItem("userSessionData");
    };
    sessionData.singinSaveData = function (userName, pass, countryPhoneCode) {
        this.signupData.userName = userName;
        this.signupData.password = pass;
        this.signupData.countryPhoneCode = countryPhoneCode;
        localStorage.setItem("userSignupData", JSON.stringify(this.signupData));
        // this.signupData.nationalId = nationalId;
        // localStorage.setItem("nationalId", this.signupData.nationalId);
    };
    sessionData.resetData = function () {
        sessionData.userSessionData = {
            tkn: "",
            language: "",
            userDetails: {
                userId: 0,
                phone: "",
                picture_url: null,
                type: "",
                userName: "",
                blocked: false,
                resetPasswordNeeded: false,
                validMobile: false,
                gender: null,
                numOfVerification: 0,
                notificationId: null,
                numOfNotifications: null,
                status: null,
                language: null,
                cityCountryService: false,
                notificationService: false
            },
            is_log: false
        };
    };
    sessionData.userSessionData = {
        tkn: "",
        language: "",
        userDetails: {
            userId: 0,
            phone: "",
            picture_url: null,
            type: "",
            userName: "",
            blocked: false,
            resetPasswordNeeded: false,
            validMobile: false,
            gender: null,
            numOfVerification: 0,
            notificationId: null,
            numOfNotifications: null,
            status: null,
            language: null,
            cityCountryService: false,
            notificationService: false
        },
        is_log: false
    };
    sessionData.signupData = {
        userName: "",
        password: "",
        countryPhoneCode: ""
        // nationalId: ""
    };
    return sessionData;
}());

//# sourceMappingURL=session-data.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		688,
		24
	],
	"../pages/addAds/addAds.module": [
		689,
		23
	],
	"../pages/ads/ads.module": [
		690,
		22
	],
	"../pages/certified-translation/certified-translation.module": [
		691,
		21
	],
	"../pages/charter-accounting/charter-accounting.module": [
		692,
		20
	],
	"../pages/customs-clearance/customs-clearance.module": [
		693,
		19
	],
	"../pages/edit-fields/edit-fields.module": [
		694,
		18
	],
	"../pages/employment/employment.module": [
		695,
		17
	],
	"../pages/establishing-companies/establishing-companies.module": [
		696,
		16
	],
	"../pages/feasibility-study/feasibility-study.module": [
		697,
		15
	],
	"../pages/find-job/find-job.module": [
		698,
		14
	],
	"../pages/forgetpassword/forgetpassword.module": [
		699,
		13
	],
	"../pages/hiring-laborers/hiring-laborers.module": [
		700,
		12
	],
	"../pages/home/home.module": [
		701,
		11
	],
	"../pages/job-details/job-details.module": [
		702,
		10
	],
	"../pages/login/login.module": [
		703,
		9
	],
	"../pages/office-services/office-services.module": [
		704,
		8
	],
	"../pages/resetpassword/resetpassword.module": [
		705,
		7
	],
	"../pages/settings/settings.module": [
		706,
		6
	],
	"../pages/shipping/shipping.module": [
		707,
		5
	],
	"../pages/signup/signup.module": [
		708,
		4
	],
	"../pages/spalsh/spalsh.module": [
		709,
		3
	],
	"../pages/trading-agencies/trading-agencies.module": [
		710,
		2
	],
	"../pages/upgradeAccount/upgradeAccount.module": [
		711,
		1
	],
	"../pages/verify/verify.module": [
		712,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the SharedServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.s
*/
var SharedServiceProvider = /** @class */ (function () {
    function SharedServiceProvider(http) {
        this.http = http;
        console.log("Hello SharedServiceProvider Provider");
    }
    // Hiring laborartory services
    SharedServiceProvider.prototype.hiringService = function (service) {
        var data = service;
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL + "formservices/addhiringlabors", data, {
            headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonWithTKN2()
        })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    //fesability study services
    SharedServiceProvider.prototype.fesabilitystudy = function (service) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL + "formservices/addfesabilitystudy", service, {
            headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonWithTKN2()
        })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // formservices/add office services
    SharedServiceProvider.prototype.officeserv = function (service) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL + "formservices/addofficeserv", service, {
            headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonWithTKN2()
        })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // formservices/add charter Service
    SharedServiceProvider.prototype.charterService = function (accountyear, bank, company, yearofbudget) {
        var body = new FormData();
        body.append("accOfYear", accountyear);
        body.append("bankOfYear", bank);
        body.append("companyAcc", company);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL +
            "formservices/addcharteracc?yearofbudget=" +
            yearofbudget, body, { headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonWithTKN2() })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // formservices/add  Establishing Service
    SharedServiceProvider.prototype.establishingService = function (countrycode, activity, region, capitalcurrency, other, idsimage, authorizationimage, agreementimage) {
        var body = new FormData();
        body.append("idsimage", idsimage);
        body.append("authorizationimage", authorizationimage);
        body.append("agreementimage", agreementimage);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL +
            "formservices/addestablishcompany?countrycode=" +
            countrycode +
            "&activity=" +
            activity +
            "&region=" +
            region +
            "&capitalcurrency=" +
            capitalcurrency +
            "&other=" +
            other, body, { headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonWithTKN2() })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // formservices/add  Employment Service
    SharedServiceProvider.prototype.EmploymentService = function (activity, jobtitle, salary, filetype, cv) {
        var body = new FormData();
        body.append("cv", cv);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL +
            "formservices/addemplyment?activity=" +
            activity +
            "&jobtitle=" +
            jobtitle +
            "&salary=" +
            salary +
            "&filetype=" +
            filetype, body, { headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonWithTKN2() })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // formservices/add   Custom Clearance Service
    SharedServiceProvider.prototype.CustomClearanceService = function (shipmentport, shipmentdescription, other, shipmentbill, authorization) {
        var body = new FormData();
        body.append("shipmentbill", shipmentbill);
        body.append("authorization", authorization);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL +
            "formservices/addcustomclearance?shipmentport=" +
            shipmentport +
            "&shipmentdescription=" +
            shipmentdescription +
            "&other=" +
            other, body, { headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonWithTKN2() })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // formservices/add   Trading agency Service
    SharedServiceProvider.prototype.TradingagencyService = function (activity, requiredband, productdesc, location, other, productimge) {
        var body = new FormData();
        body.append("productimge", productimge);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL +
            "formservices/addtradingagency?activity=" +
            activity +
            "&requiredband=" +
            requiredband +
            "&productdesc=" +
            productdesc +
            "&location=" +
            location +
            "&other=" +
            other, body, { headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonWithTKN2() })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // formservices/Add Shipping Service
    SharedServiceProvider.prototype.ShippingService = function (shipmentport, responsablename, goodstype, streetadress, billauthorizationimge) {
        var body = new FormData();
        body.append("billauthorizationimge", billauthorizationimge);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL +
            "formservices/addshipping?shipmentport=" +
            shipmentport +
            "&responsablename=" +
            responsablename +
            "&goodstype=" +
            goodstype +
            "&streetadress=" +
            streetadress, body, { headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonWithTKN2() })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // formservices/Add Certified Translation
    SharedServiceProvider.prototype.CertifiedService = function (translationtype, language, responsiblereceiver, other, filetype, translationfile) {
        var body = new FormData();
        body.append("translationfile", translationfile);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL +
            "formservices/addcertifiedtranslation?translationtype=" +
            translationtype +
            "&language=" +
            language +
            "&responsiblereceiver=" +
            responsiblereceiver +
            "&other=" +
            other +
            "&filetype=" +
            filetype, body, { headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonWithTKN2() })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    // company upgrade services
    SharedServiceProvider.prototype.companyupgradeservices = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL + "companyservices/companyupgrade", data, {
            headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonGetMethod()
        })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // image for upgrade
    SharedServiceProvider.prototype.UploadCompanyCR = function (crimage, compid) {
        var body = new FormData();
        body.append("crimage", crimage);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL +
            "companyservices/uploadcompanycr?compid=" +
            compid, body, { headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonWithTKN2() })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    /////////////////////////////////////// advertisment  /////////////////////////////////////////////////
    //add advertisment
    SharedServiceProvider.prototype.addAdvertisment = function (adimage, title, description) {
        var body = new FormData();
        body.append("adimage", adimage);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL +
            "advertisementservices/addadvertisement?title=" +
            title +
            "&description=" +
            description, body, { headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonWithTKN2() })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // get all advertient token
    SharedServiceProvider.prototype.getalladvertienttoken = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL + "advertisementservices/getadds")
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // get image by  token
    SharedServiceProvider.prototype.getimagebytoken = function (token) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL +
            "advertisementservices/getaddimage?imgetkn=" +
            token)
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    SharedServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SharedServiceProvider);
    return SharedServiceProvider;
}());

//# sourceMappingURL=shared-service.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the UserprofileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserprofileProvider = /** @class */ (function () {
    function UserprofileProvider(http) {
        this.http = http;
        console.log("Hello UserprofileProvider Provider");
    }
    // user profile data
    UserprofileProvider.prototype.getUserProfileData = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL + "userservices/getuserprofile", {
            headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJsonWithTKN()
        })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // pick list company country job-title
    UserprofileProvider.prototype.getPickListCCJ = function (type, lang) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL +
            "picklistservices/getpicklist?type=" +
            type +
            "&language=" +
            lang)
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // pick list Region
    UserprofileProvider.prototype.getPickListRegion = function (parentcode, lang) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL +
            "picklistservices/getregionpicklist?parentcode=" +
            parentcode +
            "&language=" +
            lang)
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // search employment
    UserprofileProvider.prototype.searchEmploment = function (pageSize, pageNumber, lang, jobTitleCode) {
        var data = {
            pageSize: pageSize,
            pageNumber: pageNumber,
            language: lang,
            jobTitleCode: jobTitleCode
        };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL + "formservices/searchemployments", data, {
            headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJson()
        })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    // search Hiringlabors
    UserprofileProvider.prototype.searchHiringlabors = function (pageSize, pageNumber, lang, jobTitleCode) {
        var data = {
            pageSize: pageSize,
            pageNumber: pageNumber,
            language: lang,
            jobTitleCode: jobTitleCode
        };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL + "formservices/searchhiringlabors", data, {
            headers: __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].getHeaderJson()
        })
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    //  Get Hiring Labors Details
    UserprofileProvider.prototype.getHiringLabors = function (id, lang) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].DOMAIN_URL +
            "formservices/gethiringlaborsdetails?id=" +
            id +
            "&language=" +
            lang)
            .map(function (res) {
            return res.json();
        })
            .timeout(40000);
    };
    UserprofileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserprofileProvider);
    return UserprofileProvider;
}());

//# sourceMappingURL=userprofile.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_data__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authention_service_authention_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, AuthentionService, loading, toastCtrl, translate) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.AuthentionService = AuthentionService;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.pleaseWait = null;
        this.pages = [];
        this.userData = {
            is_log: false,
            userDetails: {
                picture_url: "",
                type: "",
                userName: ""
            }
        };
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            {
                title: "AboutUs",
                icon: "ios-information-circle-outline",
                component: "AboutPage"
            },
            {
                title: "findJob",
                icon: "ios-search-outline",
                component: "FindJobPage"
            },
            {
                title: "upgradeTo",
                icon: "ios-trending-up",
                component: "UpgradeAccountPage"
            },
            {
                title: "advertisement",
                icon: "ios-megaphone-outline",
                component: "AdsPage"
            },
            {
                title: "Setting",
                icon: "ios-settings-outline",
                component: "SettingsPage"
            }
        ];
        if (localStorage.getItem("lang") == null) {
            localStorage.setItem("lang", "english");
            this.translate.setDefaultLang("english");
            this.translate.use("english");
            this.platform.setDir("ltr", true);
            this.platform.setLang("en", true);
            this.textDir = "left";
        }
        else {
            var lang = localStorage.getItem("lang");
            this.translate.setDefaultLang(lang);
            this.translate.use(lang);
            if (lang == "english") {
                this.platform.setDir("ltr", true);
                this.platform.setLang("en", true);
                this.textDir = "left";
            }
            else {
                this.platform.setDir("rtl", true);
                this.platform.setLang("ar", true);
                this.textDir = "right";
            }
        }
        this.translate.get(["pleaseWait"]).subscribe(function (res) {
            _this.pleaseWait = res.pleaseWait;
        });
        translate.onLangChange.subscribe(function (event) {
            if (event.lang == "english") {
                localStorage.setItem("lang", "english");
                _this.platform.setDir("ltr", true);
                _this.platform.setLang("en", true);
                _this.textDir = "left";
            }
            else {
                localStorage.setItem("lang", "arabic");
                _this.platform.setDir("rtl", true);
                _this.platform.setLang("ar", true);
                _this.textDir = "right";
            }
        });
        var getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));
        __WEBPACK_IMPORTED_MODULE_5__session_data__["a" /* sessionData */].getDataFromLocalstorage();
        // console.log(getUserVerfiy != null);
        if (getUserVerfiy != null) {
            this.rootPage = "VerifyPage";
            return;
        }
        else {
            // console.log(localStorage.getItem("lang"));
            // here valdiation session and hash by me
            if (__WEBPACK_IMPORTED_MODULE_5__session_data__["a" /* sessionData */].userSessionData.is_log) {
                var loading_1 = this.loading.create({
                    content: this.pleaseWait
                });
                loading_1.present();
                this.userData.is_log = __WEBPACK_IMPORTED_MODULE_5__session_data__["a" /* sessionData */].userSessionData.is_log;
                this.AuthentionService.validateSession().subscribe(function (data) {
                    // console.log(data, "pppp", this.userData.userDetails);
                    _this.userData = data;
                    _this.userData.userDetails.type = data.userDetails.type;
                    _this.userData.userDetails.userName = data.userDetails.userName;
                    if (_this.userData.userDetails.picture_url == null ||
                        _this.userData.userDetails.picture_url == undefined ||
                        _this.userData.userDetails.picture_url == "") {
                        _this.ImageURL = null;
                    }
                    else {
                        _this.ImageURL = __WEBPACK_IMPORTED_MODULE_7__settings__["a" /* settings */].imageUrl;
                        _this.ImageURL =
                            _this.ImageURL + _this.userData.userDetails.picture_url;
                    }
                    __WEBPACK_IMPORTED_MODULE_5__session_data__["a" /* sessionData */].saveDataInLocalStorage(data);
                    loading_1.dismiss();
                    _this.rootPage = "HomePage";
                }, function (error) {
                    // console.log(JSON.parse(error._body));
                    // Username or Password incorrect
                    // if (JSON.parse(error._body).errorCode == "4001") {
                    //   this.presentToast(JSON.parse(error._body).message);
                    // }
                    loading_1.dismiss();
                });
            }
            else {
                this.rootPage = "LoginPage";
            }
        }
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.AuthentionService.logOut().subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_5__session_data__["a" /* sessionData */].clearDateFromLocalStorage();
            __WEBPACK_IMPORTED_MODULE_5__session_data__["a" /* sessionData */].resetData();
            loading.dismiss();
            var logOut;
            _this.translate.get(["logut_message"]).subscribe(function (res) {
                logOut = res.logut_message;
                console.log(res);
            });
            _this.presentToast(logOut);
            _this.nav.setRoot("LoginPage");
        }, function (error) {
            // console.log(JSON.parse(error._body));
            // Username or Password incorrect
            // if (JSON.parse(error._body).errorCode == "4001") {
            //   this.presentToast(JSON.parse(error._body).message);
            // }
            loading.dismiss();
        });
    };
    MyApp.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: "SuccessToast"
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\New folder\New folder\src\app\app.html"*/'<ion-menu class="main-menu" [content]="content" *ngIf="this.platform.dir()===\'rtl\'" side="right">\n\n  <ion-content>\n\n    <div class="userData">\n      <img *ngIf="ImageURL != \'\'" src="{{ImageURL}}">\n      <img *ngIf="ImageURL == \'\'" src="./assets/imgs/userImg.png">\n      <p>{{userData.userDetails.userName}}</p>\n    </div>\n\n    <ion-list>\n      <ng-container *ngFor="let p of pages">\n        <button menuClose ion-item (click)="openPage(p)" [hidden]=" p.title ==\'upgradeTo\' &&userData.userDetails.type == \'Company\' ">\n          <ion-icon name="{{ p.icon }}"></ion-icon>&nbsp;&nbsp;{{ p.title | translate }}\n        </button>\n      </ng-container>\n    </ion-list>\n  </ion-content>\n\n  <ion-footer>\n    <button menuClose ion-button block clear class="logoutBtn" *ngIf="userData.is_log" (click)="logout()">\n      <ion-icon name="ios-log-out-outline"></ion-icon>&nbsp;&nbsp;&nbsp;{{\'logout\' | translate}}\n    </button>\n    <button menuClose ion-button block clear class="logoutBtn" *ngIf="!userData.is_log">\n      <ion-icon name="ios-log-in-outline"></ion-icon>&nbsp;&nbsp;&nbsp;{{\'Button_Login\' | translate}}\n    </button>\n  </ion-footer>\n\n</ion-menu>\n\n\n\n<ion-menu class="main-menu" [content]="content" *ngIf="this.platform.dir()===\'ltr\'" side="left">\n\n  <ion-content>\n\n    <div class="userData">\n      <img *ngIf="ImageURL != \'\'" src="{{ImageURL}}">\n      <img *ngIf=" ImageURL == \'\'" src="./assets/imgs/userImg.png">\n      <p>{{userData.userDetails?.userName}}</p>\n    </div>\n\n    <ion-list>\n      <ng-container *ngFor="let p of pages">\n        <button menuClose ion-item (click)="openPage(p)" [hidden]=" p.title ==\'upgradeTo\' &&userData.userDetails.type == \'Company\' ">\n          <ion-icon name="{{ p.icon }}"></ion-icon>&nbsp;&nbsp;{{ p.title | translate }}\n        </button>\n      </ng-container>\n    </ion-list>\n  </ion-content>\n\n  <ion-footer>\n    <button menuClose ion-button block clear class="logoutBtn" *ngIf="userData.is_log" (click)="logout()">\n      <ion-icon name="ios-log-out-outline"></ion-icon>&nbsp;&nbsp;&nbsp;{{\'logout\' | translate}}\n    </button>\n    <button menuClose ion-button block clear class="logoutBtn" *ngIf="!userData.is_log">\n      <ion-icon name="ios-log-in-outline"></ion-icon>&nbsp;&nbsp;&nbsp;{{\'Button_Login\' | translate}}\n    </button>\n  </ion-footer>\n\n</ion-menu>\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\New folder\New folder\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_authention_service_authention_service__["a" /* AuthentionServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(364);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_authention_service_authention_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_shared_service_shared_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_userprofile_userprofile__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_chooser__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_in_app_browser__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_device__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_opener__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, "./assets/i18n/", ".json");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addAds/addAds.module#AddAdsPageModule', name: 'AddAdsPage', segment: 'addAds', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ads/ads.module#AdsPageModule', name: 'AdsPage', segment: 'ads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/certified-translation/certified-translation.module#CertifiedTranslationPageModule', name: 'CertifiedTranslationPage', segment: 'certified-translation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/charter-accounting/charter-accounting.module#CharterAccountingPageModule', name: 'CharterAccountingPage', segment: 'charter-accounting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customs-clearance/customs-clearance.module#CustomsClearancePageModule', name: 'CustomsClearancePage', segment: 'customs-clearance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-fields/edit-fields.module#EditFieldsModule', name: 'EditFields', segment: 'edit-fields', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/employment/employment.module#EmploymentPageModule', name: 'EmploymentPage', segment: 'employment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/establishing-companies/establishing-companies.module#EstablishingCompaniesPageModule', name: 'EstablishingCompaniesPage', segment: 'establishing-companies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feasibility-study/feasibility-study.module#FeasibilityStudyPageModule', name: 'FeasibilityStudyPage', segment: 'feasibility-study', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/find-job/find-job.module#FindJobPageModule', name: 'FindJobPage', segment: 'find-job', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgetpassword/forgetpassword.module#ForgetpasswordPageModule', name: 'ForgetpasswordPage', segment: 'forgetpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hiring-laborers/hiring-laborers.module#HiringLaborersPageModule', name: 'HiringLaborersPage', segment: 'hiring-laborers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-details/job-details.module#JobDetailsPageModule', name: 'JobDetailsPage', segment: 'job-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/office-services/office-services.module#OfficeServicesPageModule', name: 'OfficeServicesPage', segment: 'office-services', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resetpassword/resetpassword.module#ResetpasswordPageModule', name: 'ResetpasswordPage', segment: 'resetpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shipping/shipping.module#ShippingPageModule', name: 'ShippingPage', segment: 'shipping', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/spalsh/spalsh.module#SpalshPageModule', name: 'SpalshPage', segment: 'spalsh', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trading-agencies/trading-agencies.module#TradingAgenciesPageModule', name: 'TradingAgenciesPage', segment: 'trading-agencies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upgradeAccount/upgradeAccount.module#UpgradeAccountPageModule', name: 'UpgradeAccountPage', segment: 'upgradeAccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify/verify.module#VerifyPageModule', name: 'VerifyPage', segment: 'verify', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_authention_service_authention_service__["a" /* AuthentionServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_17__providers_userprofile_userprofile__["a" /* UserprofileProvider */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_opener__["a" /* FileOpener */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_10__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_data__ = __webpack_require__(160);


var settings = /** @class */ (function () {
    function settings() {
    }
    settings.getHeaderJson = function () {
        var contentHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        contentHeaders.append("Content-Type", "application/json");
        // contentHeaders.append('Accept', 'application/json');
        return contentHeaders;
    };
    settings.getHeaderJsonFormData = function (oldpass, newpass) {
        var contentHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        contentHeaders.append("oldpassword", oldpass);
        contentHeaders.append("newpassword", newpass);
        contentHeaders.append("tkn", __WEBPACK_IMPORTED_MODULE_1__session_data__["a" /* sessionData */].userSessionData.tkn);
        return contentHeaders;
    };
    settings.getHeaderJsonGetMethod = function () {
        var contentHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        contentHeaders.append("Content-Type", "application/json");
        contentHeaders.append("tkn", __WEBPACK_IMPORTED_MODULE_1__session_data__["a" /* sessionData */].userSessionData.tkn);
        // contentHeaders.append('Accept', 'application/json');
        // contentHeaders.append('UserAuth', 'Bearer '+sessionData.userToken);
        return contentHeaders;
    };
    settings.getHeaderJsonGetMethod2 = function () {
        var contentHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        // contentHeaders.append('Content-Type', 'application/json');
        // contentHeaders.append('Authorization', setting.AuthoriztionTKN);
        // contentHeaders.append('UserAuth', 'Bearer '+sessionData.userToken);
        return contentHeaders;
    };
    settings.getHeaderJsonWithTKN = function () {
        var contentHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        // contentHeaders.append('Accept', 'application/json');
        // contentHeaders.append('Content-Type', 'application/json');
        // console.log(sessionData.userSessionData.tkn);
        contentHeaders.append("tkn", __WEBPACK_IMPORTED_MODULE_1__session_data__["a" /* sessionData */].userSessionData.tkn);
        return contentHeaders;
    };
    settings.getHeaderJsonWithTKN2 = function () {
        var contentHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        // contentHeaders.append('Accept', 'application/json');
        // contentHeaders.append('Content-Type', 'application/json');
        // console.log(sessionData.userSessionData.tkn);
        contentHeaders.append("tkn", __WEBPACK_IMPORTED_MODULE_1__session_data__["a" /* sessionData */].userSessionData.tkn);
        return contentHeaders;
    };
    settings.getHeaderJsonWithTKN3 = function () {
        var contentHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        // console.log(sessionData.userSessionData.tkn);
        contentHeaders.append("tkn", __WEBPACK_IMPORTED_MODULE_1__session_data__["a" /* sessionData */].userSessionData.tkn);
        contentHeaders.append("Accept", "application/json");
        return contentHeaders;
    };
    settings.getHeaderXWFORM = function () {
        var contentHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        contentHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        return contentHeaders;
    };
    settings.getHeaderJsonWithTKNImgeUpload = function () {
        var contentHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        contentHeaders.append("Accept", "application/json");
        return contentHeaders;
    };
    // public static DOMAIN_URL = "http://localhost:8080/Dolphin_Services/";
    settings.DOMAIN_URL = "http://rafalgroups.com/Dolphin_Services/";
    settings.imageUrl = 
    // "http://localhost:8080/Dolphin_Services/userservices/getprofileimage?imgetkn=";
    "http://rafalgroups.com/Dolphin_Services/userservices/getprofileimage?imgetkn=";
    // url imag for ads
    settings.imageUrlAds = 
    // "http://localhost:8080/Dolphin_Services/advertisementservices/getaddimage?imgetkn=";
    "http://rafalgroups.com/Dolphin_Services/advertisementservices/getaddimage?imgetkn=";
    return settings;
}());

//# sourceMappingURL=settings.js.map

/***/ })

},[359]);
//# sourceMappingURL=main.js.map