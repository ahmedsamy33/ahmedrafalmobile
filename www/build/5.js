webpackJsonp([5],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingPageModule", function() { return ShippingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shipping__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShippingPageModule = /** @class */ (function () {
    function ShippingPageModule() {
    }
    ShippingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shipping__["a" /* ShippingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shipping__["a" /* ShippingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], ShippingPageModule);
    return ShippingPageModule;
}());

//# sourceMappingURL=shipping.module.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingPage; });
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









var ShippingPage = /** @class */ (function () {
    function ShippingPage(navCtrl, navParams, toastCtrl, builder, SharedService, loading, translate, camera, FileTransfer, file, filePath, platform) {
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
        this.ShipmentPort = null;
        this.ResponsibleOfRecievingName = null;
        this.TypeOfGoods = null;
        this.DStreetaddress = null;
        // private Others: string = null;
        this.file1 = "";
        this.picname1 = "";
        this.pleaseWait = null;
        this.path1 = "";
        this.shippingForm = this.builder.group({
            shipmentPort: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(120)]],
            responsibleOfRecievingName: [
                "",
                [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(120)]
            ],
            typeOfGoods: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(120)]],
            dStreetaddress: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(120)]],
            others: [""]
        });
        this.translate.get(["pleaseWait"]).subscribe(function (res) {
            _this.pleaseWait = res.pleaseWait;
        });
    }
    ShippingPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ShippingPage");
    };
    ShippingPage.prototype.shippingService = function () {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.SharedService.ShippingService(this.ShipmentPort, this.ResponsibleOfRecievingName, this.TypeOfGoods, this.DStreetaddress, this.imageBlob1).subscribe(function (data) {
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
    ShippingPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: 'ErrorToast'
        });
        toast.present();
    };
    // take image1
    ShippingPage.prototype.takePicture = function (sourceType) {
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
    ShippingPage.prototype.uploadImage = function (para) {
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
    ShippingPage.prototype.readfile1 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], { type: file.type });
            _this.imageBlob1 = imgBlob;
        };
        reader.readAsArrayBuffer(file);
    };
    ShippingPage.prototype.hasError = function (field, error) {
        var ctrl = this.shippingForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    ShippingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-shipping",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\shipping\shipping.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'Shipping\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<!-- Start Shipping Service -->\n<ion-content>\n\n  <form [formGroup]="shippingForm">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <ion-label stacked>{{ \'shipmentPort\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="shipmentPort" [(ngModel)]="ShipmentPort" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'shipmentPort\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'shipmentPort\', \'maxlength\')">{{ \'MaxLenght120\' | translate }}</p>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'responsibleOfRecievingName\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="responsibleOfRecievingName" [(ngModel)]="ResponsibleOfRecievingName" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'responsibleOfRecievingName\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'responsibleOfRecievingName\', \'maxlength\')">{{ \'MaxLenght120\' | translate }}</p>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'typeOfGoods\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="typeOfGoods" [(ngModel)]="TypeOfGoods" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'typeOfGoods\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'typeOfGoods\', \'maxlength\')">{{ \'MaxLenght120\' | translate }}</p>\n        </ion-col>\n        <ion-col col-12>\n          <ion-label stacked>{{ \'dStreetaddress\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="dStreetaddress" [(ngModel)]="DStreetaddress" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'dStreetaddress\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'dStreetaddress\', \'maxlength\')">{{ \'MaxLenght120\' | translate }}</p>\n        </ion-col>\n        <ion-list class="fieldTitle">\n          <ion-label stacked>{{ "authBill" | translate }}</ion-label>\n          <ion-item class="changeImg">\n            <!-- <p>{{ \'authBill\' | translate }}</p>\n            <button ion-button outline (click)="takePicture(camera.PictureSourceType.PHOTOLIBRARY)">{{ \'uploadFile\' |\n              translate }}</button>\n            <span>{{ picname1 != \'\'? picname1 : (\'NoFileChosen\' | translate) }}</span> -->\n\n            <ion-thumbnail item-start>\n              <img *ngIf="path1 != \'\'" src="{{path1}}" />\n              <img *ngIf="path1 == \'\'" src="./assets/imgs/defaultImg.jpg" />\n            </ion-thumbnail>\n            <button ion-button outline (click)="takePicture(camera.PictureSourceType.PHOTOLIBRARY)">\n              {{ "uploadPhoto" | translate }}\n            </button>\n\n          </ion-item>\n        </ion-list>\n        <ion-col col-12>\n          <ion-label stacked>{{ \'others\' | translate }}&nbsp;<span class="optionSpan">{{ \'optional\' | translate }}</span></ion-label>\n          <ion-textarea formControlName="others" [(ngModel)]="Others"></ion-textarea>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <button ion-button block class="sendbtn" [disabled]="!shippingForm.valid " (click)="shippingService()">{{\'send\' |\n      translate}}</button>\n  </form>\n\n</ion-content>\n<!-- End Shipping Service -->\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\shipping\shipping.html"*/
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
    ], ShippingPage);
    return ShippingPage;
}());

//# sourceMappingURL=shipping.js.map

/***/ })

});
//# sourceMappingURL=5.js.map