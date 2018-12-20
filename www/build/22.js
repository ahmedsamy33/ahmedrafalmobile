webpackJsonp([22],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsPageModule", function() { return AdsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ads__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdsPageModule = /** @class */ (function () {
    function AdsPageModule() {
    }
    AdsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ads__["a" /* AdsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ads__["a" /* AdsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], AdsPageModule);
    return AdsPageModule;
}());

//# sourceMappingURL=ads.module.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_service_shared_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
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





var AdsPage = /** @class */ (function () {
    function AdsPage(navCtrl, navParams, SharedService, loading, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.SharedService = SharedService;
        this.loading = loading;
        this.translate = translate;
        // inStepOne: boolean = true;
        this.pleaseWait = null;
        this.getAllArrayImage = [];
        this.imgUrl = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].imageUrlAds;
        this.translate.get(["pleaseWait"]).subscribe(function (res) {
            _this.pleaseWait = res.pleaseWait;
        });
    }
    AdsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AdsPage");
        this.addAdvertsService();
    };
    AdsPage.prototype.GoToAddAds = function () {
        this.navCtrl.push("AddAdsPage");
    };
    AdsPage.prototype.addAdvertsService = function () {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.SharedService.getalladvertienttoken().subscribe(function (data) {
            console.log(data);
            _this.getAllArrayImage = data;
            loading.dismiss();
        }, function (error) {
            console.log(error);
        });
    };
    AdsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "ads-page",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\ads\ads.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ \'advertisement\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ng-container *ngIf="getAllArrayImage.length  !=0">\n\n    <ion-slides pager dir="ltr" loop autoplay="2000s" class="animated bounceInDown">\n\n\n\n      <ion-slide *ngFor="let item of getAllArrayImage">\n\n        <img class="slide-image" src="{{imgUrl+item}}">\n\n      </ion-slide>\n\n\n\n      <!-- <ion-slide>\n\n        <img class="slide-image" src="assets/imgs/ads/2.jpg">\n\n      </ion-slide> -->\n\n\n\n      <!-- <ion-slide>\n\n      <img class="slide-image" src="assets/imgs/ads/3.jpg">\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="slide-image" src="assets/imgs/ads/4.jpg">\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="slide-image" src="assets/imgs/ads/5.jpg">\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="slide-image" src="assets/imgs/ads/6.jpg">\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="slide-image" src="assets/imgs/ads/7.jpg">\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="slide-image" src="assets/imgs/ads/8.jpg">\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="slide-image" src="assets/imgs/ads/9.jpg">\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img class="slide-image" src="assets/imgs/ads/10.jpg">\n\n    </ion-slide> -->\n\n\n\n    </ion-slides>\n\n\n\n    <hr>\n\n\n\n    <ion-grid class="animated bounceInUp">\n\n      <ion-row>\n\n        <ion-col col-3 *ngFor="let item of getAllArrayImage">\n\n          <img class="slide-image" src="{{imgUrl+item}}">\n\n        </ion-col>\n\n        <!-- <ion-col col-3>\n\n                <img class="slide-image" src="assets/imgs/ads/2.jpg">\n\n            </ion-col>\n\n            <ion-col col-3>\n\n                <img class="slide-image" src="assets/imgs/ads/3.jpg">\n\n            </ion-col>\n\n            <ion-col col-3>\n\n                <img class="slide-image" src="assets/imgs/ads/4.jpg">\n\n            </ion-col>\n\n            <ion-col col-3>\n\n                <img class="slide-image" src="assets/imgs/ads/5.jpg">\n\n            </ion-col>\n\n            <ion-col col-3>\n\n                <img class="slide-image" src="assets/imgs/ads/6.jpg">\n\n            </ion-col>\n\n            <ion-col col-3>\n\n                <img class="slide-image" src="assets/imgs/ads/7.jpg">\n\n            </ion-col>\n\n            <ion-col col-3>\n\n                <img class="slide-image" src="assets/imgs/ads/8.jpg">\n\n            </ion-col>\n\n            <ion-col col-3>\n\n                <img class="slide-image" src="assets/imgs/ads/9.jpg">\n\n            </ion-col>\n\n            <ion-col col-3>\n\n                <img class="slide-image" src="assets/imgs/ads/10.jpg">\n\n            </ion-col> -->\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ng-container>\n\n\n\n  <ion-fab bottom left (click)="GoToAddAds()">\n\n    <button ion-fab>\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\ads\ads.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], AdsPage);
    return AdsPage;
}());

//# sourceMappingURL=ads.js.map

/***/ })

});
//# sourceMappingURL=22.js.map