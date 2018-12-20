webpackJsonp([8],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeServicesPageModule", function() { return OfficeServicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__office_services__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OfficeServicesPageModule = /** @class */ (function () {
    function OfficeServicesPageModule() {
    }
    OfficeServicesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__office_services__["a" /* OfficeServicesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__office_services__["a" /* OfficeServicesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], OfficeServicesPageModule);
    return OfficeServicesPageModule;
}());

//# sourceMappingURL=office-services.module.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficeServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_service_shared_service__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OfficeServicesPage = /** @class */ (function () {
    function OfficeServicesPage(navCtrl, navParams, toastCtrl, SharedService, builder, loading, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.SharedService = SharedService;
        this.builder = builder;
        this.loading = loading;
        this.translate = translate;
        this.Address = null;
        this.RentingOffices = null;
        this.OfficeFurniture = null;
        this.Devices = null;
        this.Cameras = null;
        this.Inks = null;
        this.Papers = null;
        this.WebDesign = null;
        this.DMarketing = null;
        this.Others = null;
        this.pleaseWait = null;
        this.OfficeForm = this.builder.group({
            address: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(120)]],
            rentingOffices: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(120)]],
            officeFurniture: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(120)]],
            devices: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(120)]],
            cameras: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(120)]],
            inks: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(120)]],
            papers: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(120)]],
            webDesign: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(120)]],
            dMarketing: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(120)]],
            others: [""]
        });
        this.translate.get(["pleaseWait"]).subscribe(function (res) {
            _this.pleaseWait = res.pleaseWait;
        });
    }
    OfficeServicesPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad OfficeServicesPage");
    };
    OfficeServicesPage.prototype.OfficeService = function () {
        var _this = this;
        var data = {
            address: this.Address,
            rentingOffices: this.RentingOffices,
            officeFurnuture: this.OfficeFurniture,
            devices: this.Devices,
            cameras: this.Cameras,
            inks: this.Inks,
            papers: this.Papers,
            webDesigns: this.WebDesign,
            degitalMarketting: this.DMarketing,
            other: this.Others
        };
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.SharedService.officeserv(data).subscribe(function (data) {
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
    OfficeServicesPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: 'ErrorToast'
        });
        toast.present();
    };
    OfficeServicesPage.prototype.hasError = function (field, error) {
        var ctrl = this.OfficeForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    OfficeServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-office-services",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\office-services\office-services.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'OfficeServices\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- Start Office Services Service -->\n<ion-content>\n\n  <form [formGroup]="OfficeForm" (ngSubmit)="OfficeService()">\n    <ion-grid>\n      <ion-row>\n\n\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'address\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="address" [(ngModel)]="Address" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'address\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'address\', \'maxlength\')">{{ \'MaxLenght120\' | translate }}</p>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'rentingOffices\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="rentingOffices" [(ngModel)]="RentingOffices" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'rentingOffices\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'rentingOffices\', \'maxlength\')">{{ \'MaxLenght120\' | translate }}</p>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'officeFurniture\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="officeFurniture" [(ngModel)]="OfficeFurniture" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'officeFurniture\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'officeFurniture\', \'maxlength\')">{{ \'MaxLenght120\' | translate }}</p>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'devices\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="devices" [(ngModel)]="Devices" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'devices\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'devices\', \'maxlength\')">{{ \'MaxLenght120\' | translate }}</p>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'cameras\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="cameras" [(ngModel)]="Cameras" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'cameras\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'cameras\', \'maxlength\')">{{ \'MaxLenght120\' | translate }}</p>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'inks\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="inks" [(ngModel)]="Inks" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'papers\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'papers\', \'maxlength\')">{{ \'MaxLenght120\' | translate }}</p>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'papers\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="papers" [(ngModel)]="Papers" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'papers\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'papers\', \'maxlength\')">{{ \'MaxLenght120\' | translate }}</p>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'webDesign\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="webDesign" [(ngModel)]="WebDesign" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'webDesign\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'webDesign\', \'maxlength\')">{{ \'MaxLenght120\' | translate }}</p>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'dMarketing\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="dMarketing" [(ngModel)]="DMarketing" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'dMarketing\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'dMarketing\', \'maxlength\')">{{ \'MaxLenght120\' | translate }}</p>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'others\' | translate }}&nbsp;<span class="optionSpan">{{ \'optional\' | translate }}</span></ion-label>\n          <ion-textarea formControlName="others" [(ngModel)]="Others"></ion-textarea>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <button ion-button block class="sendbtn" [disabled]="!OfficeForm.valid ">{{\'send\' | translate}}</button>\n  </form>\n\n</ion-content>\n<!-- End Office Services Service -->\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\office-services\office-services.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], OfficeServicesPage);
    return OfficeServicesPage;
}());

//# sourceMappingURL=office-services.js.map

/***/ })

});
//# sourceMappingURL=8.js.map