webpackJsonp([11],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { sessionData } from '../../app/session-data';
// import { MyApp } from '../../app/app.component';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad HomePage");
        // sessionData.getDataFromLocalstorage();
        // this.app.userData = sessionData.userSessionData;
        // console.log(this.userData);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var local = JSON.parse(localStorage.getItem("userSessionData"));
        // console.log(local, "dddddhamed");
        this.app.userData.userDetails.userName = local.userDetails.userName;
        this.app.userData.is_log = local.is_log;
        var imageTokn = local.userDetails.picture_url;
        // console.log(imageTokn, "dddddddddddddd");
        if (imageTokn == null) {
            this.app.ImageURL = "";
        }
        else {
            this.app.ImageURL = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* settings */].imageUrl + imageTokn;
        }
        this.app.userData.userDetails.type = local.userDetails.type;
        // console.log("kkkk", this.app.userData.userDetails.type);
    };
    HomePage.prototype.openPageFromMenu = function (pageName) {
        this.navCtrl.push(pageName);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle class="menuBtn">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'ourServices\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 class="animated bounceInRight" (click)="openPageFromMenu(\'CharterAccountingPage\')">\n        <ion-card>\n          <img src="./assets/imgs/accounting-icon.png">\n          <ion-label>{{ \'accounting\' | translate }}\n            <ion-icon name="ios-arrow-round-forward-outline" class="{{ \'arrowIcon\' | translate }}"></ion-icon>\n          </ion-label>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6 class="animated bounceInLeft" (click)="openPageFromMenu(\'HiringLaborersPage\')">\n        <ion-card>\n          <img src="./assets/imgs/Laborers-icon.png">\n          <ion-label>{{ \'labors\' | translate }}\n            <ion-icon name="ios-arrow-round-forward-outline" class="{{ \'arrowIcon\' | translate }}"></ion-icon>\n          </ion-label>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6 class="animated bounceInRight delay-1s" (click)="openPageFromMenu(\'FeasibilityStudyPage\')">\n        <ion-card>\n          <img src="./assets/imgs/study-icon.png">\n          <ion-label>{{ \'study\' | translate }}\n            <ion-icon name="ios-arrow-round-forward-outline" class="{{ \'arrowIcon\' | translate }}"></ion-icon>\n          </ion-label>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6 class="animated bounceInLeft delay-1s" (click)="openPageFromMenu(\'EstablishingCompaniesPage\')">\n        <ion-card>\n          <img src="./assets/imgs/launch-icon.png">\n          <ion-label>{{ \'companies\' | translate }}\n            <ion-icon name="ios-arrow-round-forward-outline" class="{{ \'arrowIcon\' | translate }}"></ion-icon>\n          </ion-label>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6 class="animated bounceInRight delay-2s" (click)="openPageFromMenu(\'CustomsClearancePage\')">\n        <ion-card>\n          <img src="./assets/imgs/customs-icon.png">\n          <ion-label>{{ \'clearance\' | translate }}\n            <ion-icon name="ios-arrow-round-forward-outline" class="{{ \'arrowIcon\' | translate }}"></ion-icon>\n          </ion-label>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6 class="animated bounceInLeft delay-2s" (click)="openPageFromMenu(\'EmploymentPage\')">\n        <ion-card>\n          <img src="./assets/imgs/employment-icon.png">\n          <ion-label>{{ \'employment\' | translate }}\n            <ion-icon name="ios-arrow-round-forward-outline" class="{{ \'arrowIcon\' | translate }}"></ion-icon>\n          </ion-label>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6 class="animated bounceInRight delay-3s" (click)="openPageFromMenu(\'OfficeServicesPage\')">\n        <ion-card>\n          <img src="./assets/imgs/office-icon.png">\n          <ion-label>{{ \'OfficeServices\' | translate }}\n            <ion-icon name="ios-arrow-round-forward-outline" class="{{ \'arrowIcon\' | translate }}"></ion-icon>\n          </ion-label>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6 class="animated bounceInLeft delay-3s" (click)="openPageFromMenu(\'TradingAgenciesPage\')">\n        <ion-card>\n          <img src="./assets/imgs/tradingAgencies-icon.png">\n          <ion-label>{{ \'tradingAgencies\' | translate }}\n            <ion-icon name="ios-arrow-round-forward-outline" class="{{ \'arrowIcon\' | translate }}"></ion-icon>\n          </ion-label>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6 class="animated bounceInRight delay-4s" (click)="openPageFromMenu(\'CertifiedTranslationPage\')">\n        <ion-card>\n          <img src="assets/imgs/translation-icon.png">\n          <ion-label>{{ \'certifiedTranslation\' | translate }}\n            <ion-icon name="ios-arrow-round-forward-outline" class="{{ \'arrowIcon\' | translate }}"></ion-icon>\n          </ion-label>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6 class="animated bounceInLeft delay-4s" (click)="openPageFromMenu(\'ShippingPage\')">\n        <ion-card>\n          <img src="./assets/imgs/shipping-icon.png">\n          <ion-label>{{ \'Shipping\' | translate }}\n            <ion-icon name="ios-arrow-round-forward-outline" class="{{ \'arrowIcon\' | translate }}"></ion-icon>\n          </ion-label>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* MyApp */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=11.js.map