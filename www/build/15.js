webpackJsonp([15],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeasibilityStudyPageModule", function() { return FeasibilityStudyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feasibility_study__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FeasibilityStudyPageModule = /** @class */ (function () {
    function FeasibilityStudyPageModule() {
    }
    FeasibilityStudyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feasibility_study__["a" /* FeasibilityStudyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feasibility_study__["a" /* FeasibilityStudyPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], FeasibilityStudyPageModule);
    return FeasibilityStudyPageModule;
}());

//# sourceMappingURL=feasibility-study.module.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeasibilityStudyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_service_shared_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_userprofile_userprofile__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeasibilityStudyPage = /** @class */ (function () {
    function FeasibilityStudyPage(navCtrl, navParams, builder, SharedService, usergetpicklist, toastCtrl, loading, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.builder = builder;
        this.SharedService = SharedService;
        this.usergetpicklist = usergetpicklist;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.translate = translate;
        this.countryArr = [];
        this.CompanyArr = [];
        this.RegionArr = [];
        this.Country = null;
        this.Region = null;
        this.Address = null;
        this.Activity = null;
        this.CompType = null;
        this.Capital = null;
        this.pleaseWait = null;
        this.FeasibilityForm = this.builder.group({
            country: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            region: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            address: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(120)]],
            activity: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z]+$')]],
            compType: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            capital: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.translate.get(["pleaseWait"]).subscribe(function (res) {
            _this.pleaseWait = res.pleaseWait;
        });
        var lang = localStorage.getItem("lang");
        if (lang == "english") {
            lang = "English";
        }
        else {
            lang = "Arabic";
        }
        this.usergetpicklist.getPickListCCJ("Country", lang).subscribe(function (data) {
            _this.countryArr = data;
        }, function (error) { });
        this.usergetpicklist.getPickListCCJ("Company", lang).subscribe(function (data) {
            _this.CompanyArr = data;
        }, function (error) { });
    }
    FeasibilityStudyPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FeasibilityStudyPage");
    };
    FeasibilityStudyPage.prototype.FeasibilityService = function () {
        var _this = this;
        var data = {
            countryCode: this.Country,
            companyTypeCode: this.CompType,
            activity: this.Activity,
            detailedAdress: this.Address,
            capitalCurrency: this.Capital,
            province: this.Region
        };
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.SharedService.fesabilitystudy(data).subscribe(function (data) {
            _this.navCtrl.setRoot("HomePage");
            loading.dismiss();
        }, function (error) {
            // console.log(JSON.parse(error._body));
            // Username or Password incorrect
            if (JSON.parse(error._body).errorCode == "4001") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4000") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4005") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            loading.dismiss();
        });
    };
    FeasibilityStudyPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: 'ErrorToast'
        });
        toast.present();
    };
    // get region
    FeasibilityStudyPage.prototype.getRegionValue = function () {
        var _this = this;
        var lang = localStorage.getItem("lang");
        if (lang == "english") {
            lang = "English";
        }
        else {
            lang = "Arabic";
        }
        this.RegionArr = [];
        this.Region = "";
        if (this.Country != null) {
            var loading_1 = this.loading.create({
                content: this.pleaseWait
            });
            loading_1.present();
            this.usergetpicklist.getPickListRegion(this.Country, lang).subscribe(function (data) {
                _this.RegionArr = data;
                loading_1.dismiss();
            }, function (error) {
                loading_1.dismiss();
            });
        }
    };
    FeasibilityStudyPage.prototype.hasError = function (field, error) {
        var ctrl = this.FeasibilityForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    FeasibilityStudyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-feasibility-study",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\feasibility-study\feasibility-study.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'study\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<!-- Start Feasibility Study Service -->\n<ion-content>\n\n  <form [formGroup]="FeasibilityForm" (ngSubmit)="FeasibilityService()">\n    <ion-grid>\n      <ion-row>\n\n        <ion-col col-6 class="selectSection">\n          <ion-label>{{ \'country\' | translate }}</ion-label>\n          <ion-select interface="popover" formControlName="country" [(ngModel)]="Country" (ngModelChange)="getRegionValue()" required>\n            <ion-option *ngFor="let country of countryArr" value="{{country.code}}">{{country.value}}</ion-option>\n          </ion-select>\n        </ion-col>\n\n        <ion-col col-6 class="selectSection">\n          <ion-label>{{ \'region\' | translate }}</ion-label>\n          <ion-select interface="popover" formControlName="region" [(ngModel)]="Region" required>\n            <ion-option *ngFor="let region of RegionArr" value="{{region.code}}">{{region.value}}</ion-option>\n\n          </ion-select>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'address\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="address" [(ngModel)]="Address" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'address\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'address\', \'maxlength\')">{{ \'MaxLenght120\' | translate }}</p>\n\n          <!-- <p class="validationHint" *ngIf="hasError(\'address\', \'pattern\')">{{ \'LetterAndNum\' | translate }}</p> -->\n\n        </ion-col>\n\n        <ion-col col-6>\n          <ion-label stacked>{{ \'activity\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="activity" [(ngModel)]="Activity" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'activity\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'activity\', \'maxlength\')">{{ \'MaxLenght30\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'activity\', \'pattern\')">{{ \'BadNameFormat\' | translate }}</p>\n\n        </ion-col>\n\n        <ion-col col-6 class="selectSection">\n          <ion-label>{{ \'compType\' | translate }}</ion-label>\n          <ion-select interface="popover" formControlName="compType" [(ngModel)]="CompType" required>\n            <ion-option *ngFor="let company of CompanyArr" value="{{company.code}}">{{company.value}}</ion-option>\n\n          </ion-select>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'capital\' | translate }}</ion-label>\n          <ion-input type="number" formControlName="capital" [(ngModel)]="Capital" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'capital\', \'required\')">{{ \'require\' | translate }}</p>\n\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <button ion-button block class="sendbtn" [disabled]="!FeasibilityForm.valid ">{{\'send\' | translate}}</button>\n  </form>\n\n</ion-content>\n<!-- End Feasibility Study Service -->\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\feasibility-study\feasibility-study.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_userprofile_userprofile__["a" /* UserprofileProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], FeasibilityStudyPage);
    return FeasibilityStudyPage;
}());

//# sourceMappingURL=feasibility-study.js.map

/***/ })

});
//# sourceMappingURL=15.js.map