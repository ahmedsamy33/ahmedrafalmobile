webpackJsonp([23],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdsPageModule", function() { return AddAdsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addAds__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddAdsPageModule = /** @class */ (function () {
    function AddAdsPageModule() {
    }
    AddAdsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addAds__["a" /* AddAdsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addAds__["a" /* AddAdsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], AddAdsPageModule);
    return AddAdsPageModule;
}());

//# sourceMappingURL=addAds.module.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_service_shared_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_userprofile_userprofile__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddAdsPage = /** @class */ (function () {
    function AddAdsPage(navCtrl, navParams, builder, toastCtrl, SharedService, usergetpicklist, loading, translate, camera, FileTransfer, file, filePath, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.builder = builder;
        this.toastCtrl = toastCtrl;
        this.SharedService = SharedService;
        this.usergetpicklist = usergetpicklist;
        this.loading = loading;
        this.translate = translate;
        this.camera = camera;
        this.FileTransfer = FileTransfer;
        this.file = file;
        this.filePath = filePath;
        this.platform = platform;
        // inStepOne: boolean = true;
        this.pleaseWait = null;
        this.jobTitle = [];
        this.Job = null;
        this.Discription = null;
        // picture image
        this.file2 = "";
        this.picname2 = "";
        this.path2 = "";
        this.addadvertismentForm = this.builder.group({
            job: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            discription: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
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
        this.usergetpicklist.getPickListCCJ("Job_Title", lang).subscribe(function (data) {
            // console.log(data[0].code);
            _this.jobTitle = data;
        }, function (error) { });
    }
    AddAdsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AddAdsPage");
    };
    // add service
    AddAdsPage.prototype.addAdvertsService = function () {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.SharedService.addAdvertisment(this.imageBlob2, this.Job, this.Discription).subscribe(function (data) {
            // console.log(data);
            loading.dismiss();
            _this.navCtrl.pop();
        }, function (error) {
            // console.log(error);
            loading.dismiss();
        });
    };
    // take image 2
    AddAdsPage.prototype.takePicture2 = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 70,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            _this.file2 = imagePath;
            _this.uploadImage(2);
            if (_this.platform.is("android") &&
                sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath).then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf("/") + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf("/") + 1, imagePath.lastIndexOf("?"));
                    _this.picname2 = currentName;
                    _this.path2 = filePath;
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
            _this.file2 = "";
            // this.correctPath = '';
            _this.picname2 = "";
            _this.path2 = "";
        });
    };
    // upload
    AddAdsPage.prototype.uploadImage = function (para) {
        var _this = this;
        if (para == 2) {
            this.file
                .resolveLocalFilesystemUrl(this.file2)
                .then(function (entry) {
                return entry.file(function (file) {
                    // console.log("file local ", file);
                    _this.readfile2(file);
                });
            })
                .catch(function (err) { return _this.presentToast("err " + err); });
        }
    };
    // read form mobile2
    AddAdsPage.prototype.readfile2 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], { type: file.type });
            _this.imageBlob2 = imgBlob;
        };
        reader.readAsArrayBuffer(file);
    };
    AddAdsPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: 'ErrorToast'
        });
        toast.present();
    };
    AddAdsPage.prototype.hasError = function (field, error) {
        var ctrl = this.addadvertismentForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    AddAdsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "addAds-page",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\addAds\addAds.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ \'uplodeAd\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <form [formGroup]="addadvertismentForm">\n\n    <ion-grid>\n\n      <ion-row>\n\n\n\n        <ion-col col-12 class="selectSection">\n\n          <ion-label>{{ \'jobTitle\' | translate }}</ion-label>\n\n          <ion-select interface="popover" formControlName="job" [(ngModel)]="Job" required>\n\n            <ion-option *ngFor="let job of jobTitle" value="{{job.code}}">{{job.value}}</ion-option>\n\n\n\n          </ion-select>\n\n          <p class="validationHint" *ngIf="hasError(\'job\', \'required\')">{{ \'require\' | translate }}</p>\n\n        </ion-col>\n\n\n\n        <ion-col col-12>\n\n          <ion-label stacked>{{ \'jobDescription\' | translate }}</ion-label>\n\n          <ion-textarea formControlName="discription" [(ngModel)]="Discription"></ion-textarea>\n\n          <p class="validationHint" *ngIf="hasError(\'discription\', \'required\')">{{ \'require\' | translate }}</p>\n\n        </ion-col>\n\n\n\n        <ion-list class="fieldTitle">\n\n          <ion-item>\n\n            <p>{{ \'uplodeAd\' | translate }}</p>\n\n          </ion-item>\n\n          <ion-item>\n\n\n\n            <ion-thumbnail item-start>\n\n              <img *ngIf="path2 != \'\'" src="{{path2}}">\n\n              <img *ngIf="path2 == \'\'" src="./assets/imgs/defaultImg.jpg" />\n\n            </ion-thumbnail>\n\n            <button ion-button outline (click)="takePicture2(camera.PictureSourceType.PHOTOLIBRARY)">{{ \'uploadPhoto\' | translate }}</button>\n\n\n\n          </ion-item>\n\n        </ion-list>\n\n\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <button ion-button block class="sendbtn" [disabled]="!addadvertismentForm.valid   || file2 == \'\' " (click)="addAdvertsService()">{{\'send\' | translate}}</button>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\addAds\addAds.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_userprofile_userprofile__["a" /* UserprofileProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], AddAdsPage);
    return AddAdsPage;
}());

//# sourceMappingURL=addAds.js.map

/***/ })

});
//# sourceMappingURL=23.js.map