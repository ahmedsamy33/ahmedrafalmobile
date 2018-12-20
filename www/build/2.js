webpackJsonp([2],{

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradingAgenciesPageModule", function() { return TradingAgenciesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trading_agencies__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TradingAgenciesPageModule = /** @class */ (function () {
    function TradingAgenciesPageModule() {
    }
    TradingAgenciesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trading_agencies__["a" /* TradingAgenciesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trading_agencies__["a" /* TradingAgenciesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], TradingAgenciesPageModule);
    return TradingAgenciesPageModule;
}());

//# sourceMappingURL=trading-agencies.module.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradingAgenciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_service_shared_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TradingAgenciesPage = /** @class */ (function () {
    function TradingAgenciesPage(navCtrl, navParams, toastCtrl, builder, SharedService, loading, translate, camera, FileTransfer, file, filePath, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.builder = builder;
        this.SharedService = SharedService;
        this.loading = loading;
        this.translate = translate;
        this.camera = camera;
        this.FileTransfer = FileTransfer;
        this.file = file;
        this.filePath = filePath;
        this.platform = platform;
        this.file1 = "";
        this.picname1 = "";
        this.Activity = null;
        this.RequiredBrand = null;
        this.Location = null;
        this.ProductDescription = null;
        this.Others = null;
        this.pleaseWait = null;
        this.path1 = "";
        this.tradingForm = this.builder.group({
            activity: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z]+$')]],
            requiredBrand: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)]],
            location: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(120)]],
            productDescription: [
                "",
                [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(120)]
            ],
            others: [""]
        });
        this.translate.get(["pleaseWait"]).subscribe(function (res) {
            _this.pleaseWait = res.pleaseWait;
        });
    }
    TradingAgenciesPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad TradingAgenciesPage");
    };
    TradingAgenciesPage.prototype.tradingService = function () {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.SharedService.TradingagencyService(this.Activity, this.RequiredBrand, this.ProductDescription, this.Location, this.Others, this.imageBlob1).subscribe(function (data) {
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
    TradingAgenciesPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: 'ErrorToast'
        });
        toast.present();
    };
    // take image1
    TradingAgenciesPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 70,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
            // allowEdit: true,
            // destinationType: this.camera.DestinationType.DATA_URL,
            // targetWidth: 50,
            // targetHeight: 50
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            _this.file1 = imagePath;
            _this.uploadImage(1);
            if (_this.platform.is("android") &&
                sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath).then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf("/") + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf("/") + 1, imagePath.lastIndexOf("?"));
                    _this.picname1 = currentName;
                    _this.path1 = filePath;
                    // this.correctPath = correctPath;
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf("/") + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf("/") + 1);
                // this.picname = currentName;
                // this.path = filePath;
                // this.correctPath = correctPath;
            }
        }, function (err) {
            // this.presentToast("Error while selecting image.");
            _this.file1 = "";
            // this.correctPath = '';
            _this.picname1 = "";
            _this.path1 = "";
        });
    };
    // upload
    TradingAgenciesPage.prototype.uploadImage = function (para) {
        var _this = this;
        if (para == 1) {
            this.file
                .resolveLocalFilesystemUrl(this.file1)
                .then(function (entry) {
                return entry.file(function (file) {
                    _this.readfile1(file);
                });
            })
                .catch(function (err) { return _this.presentToast("err " + err); });
        }
    };
    // read form mobile1
    TradingAgenciesPage.prototype.readfile1 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], { type: file.type });
            _this.imageBlob1 = imgBlob;
        };
        reader.readAsArrayBuffer(file);
    };
    TradingAgenciesPage.prototype.hasError = function (field, error) {
        var ctrl = this.tradingForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    TradingAgenciesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-trading-agencies",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\trading-agencies\trading-agencies.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'tradingAgencies\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- Start Trading Agencies Service -->\n<ion-content>\n\n  <form [formGroup]="tradingForm">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-label stacked>{{ \'activity\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="activity" [(ngModel)]="Activity" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'activity\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'activity\', \'maxlength\')">{{ \'MaxLenght50\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'activity\', \'pattern\')">{{ \'BadNameFormat\' | translate }}</p>\n\n        </ion-col>\n\n        <ion-col col-6>\n          <ion-label stacked>{{ \'requiredBrand\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="requiredBrand" [(ngModel)]="RequiredBrand" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'requiredBrand\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'requiredBrand\', \'maxlength\')">{{ \'MaxLenght50\' | translate }}</p>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'location\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="location" [(ngModel)]="Location" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'location\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'location\', \'maxlength\')">{{ \'MaxLenght120\' | translate }}</p>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'productDescription\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="productDescription" [(ngModel)]="ProductDescription" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'productDescription\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'productDescription\', \'maxlength\')">{{ \'MaxLenght120\' | translate\n            }}</p>\n        </ion-col>\n\n        <ion-list class="fieldTitle">\n          <ion-label stacked>{{ "productImg" | translate }}</ion-label>\n          <ion-item class="changeImg">\n            <!-- <p>{{ \'productImg\' | translate }}</p>\n            <button ion-button outline (click)="takePicture(camera.PictureSourceType.PHOTOLIBRARY)">{{ \'uploadFile\' |\n              translate }}</button>\n            <span>{{ picname1 != \'\'? picname1 : (\'NoFileChosen\' | translate) }}</span> -->\n\n            <ion-thumbnail item-start>\n              <img *ngIf="path1 != \'\'" src="{{path1}}" />\n              <img *ngIf="path1 == \'\'" src="./assets/imgs/defaultImg.jpg" />\n            </ion-thumbnail>\n            <button ion-button outline (click)="takePicture(camera.PictureSourceType.PHOTOLIBRARY)">\n              {{ "uploadPhoto" | translate }}\n            </button>\n\n          </ion-item>\n        </ion-list>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'others\' | translate }}&nbsp;<span class="optionSpan">{{ \'optional\' | translate }}</span></ion-label>\n          <ion-textarea formControlName="others" [(ngModel)]="Others"></ion-textarea>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <button ion-button block class="sendbtn" (click)="tradingService()" [disabled]="!tradingForm.valid ">{{\'send\' |\n      translate}}</button>\n  </form>\n\n</ion-content>\n<!-- End Trading AgenciesService -->\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\trading-agencies\trading-agencies.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], TradingAgenciesPage);
    return TradingAgenciesPage;
}());

//# sourceMappingURL=trading-agencies.js.map

/***/ })

});
//# sourceMappingURL=2.js.map