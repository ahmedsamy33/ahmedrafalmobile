webpackJsonp([10],{

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsPageModule", function() { return JobDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_details__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JobDetailsPageModule = /** @class */ (function () {
    function JobDetailsPageModule() {
    }
    JobDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__job_details__["a" /* JobDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_details__["a" /* JobDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], JobDetailsPageModule);
    return JobDetailsPageModule;
}());

//# sourceMappingURL=job-details.module.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userprofile_userprofile__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the JobDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobDetailsPage = /** @class */ (function () {
    function JobDetailsPage(navCtrl, navParams, Userprofile, loading, translate, iab) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Userprofile = Userprofile;
        this.loading = loading;
        this.translate = translate;
        this.iab = iab;
        this.getInfo = {
            country: null,
            dailyWorkHours: 8,
            id: "",
            jobTitle: "",
            region: "",
            salary: "",
            yearsOfExperience: ""
        };
        this.pleaseWait = null;
        this.getUserDetails = {};
        this.translate.get(["pleaseWait"]).subscribe(function (res) {
            _this.pleaseWait = res.pleaseWait;
        });
        this.getInfo = this.navParams.get("data");
        // console.log(this.navParams.get("data"));
        var lang = localStorage.getItem("lang");
        if (lang == "english") {
            lang = "English";
        }
        else {
            lang = "Arabic";
        }
        this.getHiringData(lang);
    }
    JobDetailsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad JobDetailsPage");
    };
    JobDetailsPage.prototype.getHiringData = function (lang) {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.Userprofile.getHiringLabors(this.getInfo.id, lang).subscribe(function (data) {
            _this.getUserDetails = data;
            // console.log(data);
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
        });
    };
    JobDetailsPage.prototype.openUrl = function () {
        this.iab.create('https://www.rafalgroup.net', '_system');
    };
    JobDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-job-details",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\job-details\job-details.html"*/'<!--\n  Generated template for the JobDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'jobDetails\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card class="animated bounceInUp">\n    <h2>\n      <ion-icon name="ios-briefcase"></ion-icon>&nbsp;&nbsp;{{getUserDetails.jobTitle}}\n    </h2>\n    <p>\n      <ion-icon name="pin"></ion-icon>&nbsp;&nbsp;{{getUserDetails.region}}\n    </p>\n    <p>\n      <ion-icon name="calendar"></ion-icon>&nbsp;&nbsp;\n      <span>{{ \'experianceYears\' | translate }}</span>&nbsp;\n      {{getUserDetails.yearsOfExperience}} {{ \'year\' | translate }}\n    </p>\n    <p>\n      <ion-icon name="cash"></ion-icon>&nbsp;&nbsp;\n      <span>{{ \'salary\' | translate }}</span>&nbsp;\n      {{getUserDetails.salary}} {{ \'egp\' | translate }}\n    </p>\n    <p>\n      <ion-icon name="time"></ion-icon>&nbsp;&nbsp;\n      <span>{{ \'DailyHours\' | translate }}</span>&nbsp;\n      <!-- 9 {{ \'am\' | translate }} - 5 {{ \'pm\' | translate }} -->\n\n      {{getInfo.dailyWorkHours}}\n    </p>\n\n  </ion-card>\n\n  <ion-card class="animated bounceInUp">\n    <h5>{{ \'jobDescription\' | translate }}</h5>\n    <p>{{getUserDetails.other}}\n    </p>\n  </ion-card>\n\n  <ion-card class="animated bounceInUp">\n    <h5>{{ \'skills\' | translate }}</h5>\n    <ul>\n      <li>{{getUserDetails.skills}}</li>\n      <!-- <li>Act as liaison between customers and the technical team</li>\n      <li>Onboard new customers</li>\n      <li>Increase interaction with current customers</li>\n      <li>Respond to customer inquiries via phone, email, or chat in a timely manner</li>\n      <li>Create, manage, and follow up on customer tickets until they are resolved</li>\n      <li>Record all activities using our current CRM to enhance visibility</li>\n      <li>Follow the current internal customer success process and improve on it</li> -->\n    </ul>\n  </ion-card>\n\n  <ion-card class="animated bounceInUp">\n    <h5>{{ \'requireQualification\' | translate }}</h5>\n    <ul>\n      <li>{{getUserDetails.requiredQualifications}}</li>\n      <!-- <li>Previous customer support experience preferred</li>\n      <li>Excellent written and verbal communication skills</li>\n      <li>Strong organizational skills</li> -->\n    </ul>\n  </ion-card>\n\n  <ion-card class="{{ \'contactData\' | translate }} animated bounceInUp">\n    <ion-label>\n      <ion-icon name="md-globe"></ion-icon>&nbsp;\n      {{ \'website\' | translate }}\n    </ion-label>\n    <p><a (click)="openUrl()">www.rafalgroup.net</a></p>\n\n    <ion-label>\n      <ion-icon name="ios-phone-portrait-outline"></ion-icon>&nbsp;\n      {{ \'phone\' | translate }}\n    </ion-label>\n    <p class="telNo">+20 109 413 2184</p>\n\n    <ion-label>\n      <ion-icon name="ios-at-outline"></ion-icon>&nbsp;\n      {{ \'email\' | translate }}\n    </ion-label>\n    <p>admin@rafalgroup.net</p>\n\n    <ion-label>\n      <ion-icon name="ios-pin-outline"></ion-icon>&nbsp;\n      {{ \'address\' | translate }}\n    </ion-label>\n    <p>شبين الكوم شارع الجلاء البحري برج هيلتون.الدور السادس</p>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\job-details\job-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_userprofile_userprofile__["a" /* UserprofileProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], JobDetailsPage);
    return JobDetailsPage;
}());

//# sourceMappingURL=job-details.js.map

/***/ })

});
//# sourceMappingURL=10.js.map