webpackJsonp([16],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablishingCompaniesPageModule", function() { return EstablishingCompaniesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__establishing_companies__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EstablishingCompaniesPageModule = /** @class */ (function () {
    function EstablishingCompaniesPageModule() {
    }
    EstablishingCompaniesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__establishing_companies__["a" /* EstablishingCompaniesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__establishing_companies__["a" /* EstablishingCompaniesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], EstablishingCompaniesPageModule);
    return EstablishingCompaniesPageModule;
}());

//# sourceMappingURL=establishing-companies.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstablishingCompaniesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_service_shared_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_userprofile_userprofile__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(351);
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









var EstablishingCompaniesPage = /** @class */ (function () {
    function EstablishingCompaniesPage(navCtrl, navParams, toastCtrl, builder, SharedService, usergetpicklist, loading, translate, camera, file, filePath, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.builder = builder;
        this.SharedService = SharedService;
        this.usergetpicklist = usergetpicklist;
        this.loading = loading;
        this.translate = translate;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.platform = platform;
        this.file1 = "";
        this.file2 = "";
        this.file3 = "";
        this.file4 = "";
        this.picname1 = "";
        this.picname2 = "";
        this.picname3 = "";
        this.picname4 = "";
        this.countryArr = [];
        this.RegionArr = [];
        this.Country = null;
        this.Region = null;
        this.Activity = null;
        // private IdNo: string = null;
        this.Capital = null;
        this.Others = null;
        this.pleaseWait = null;
        this.path1 = "";
        this.path2 = "";
        this.path3 = "";
        this.establishingForm = this.builder.group({
            country: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            region: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            activity: [
                "",
                [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z]+$')]
            ],
            // idNo: ["", Validators.required],
            capital: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4)]],
            others: [""]
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
            // console.log("alne", data);
            _this.countryArr = data;
        }, function (error) { });
    }
    EstablishingCompaniesPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad EstablishingCompaniesPage");
    };
    EstablishingCompaniesPage.prototype.establishingService = function () {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.SharedService.establishingService(this.Country, this.Activity, this.Region, this.Capital, this.Others, this.imageBlob1, this.imageBlob2, this.imageBlob3).subscribe(function (data) {
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
    // get region
    EstablishingCompaniesPage.prototype.getRegionValue = function () {
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
    EstablishingCompaniesPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: 'ErrorToast'
        });
        toast.present();
    };
    // take image1
    EstablishingCompaniesPage.prototype.takePicture = function (sourceType) {
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
    // take image 2
    EstablishingCompaniesPage.prototype.takePicture2 = function (sourceType) {
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
                // this.path2 = filePath;
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
    // take image 3
    EstablishingCompaniesPage.prototype.takePicture3 = function (sourceType) {
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
            _this.file3 = imagePath;
            _this.uploadImage(3);
            if (_this.platform.is("android") &&
                sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath).then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf("/") + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf("/") + 1, imagePath.lastIndexOf("?"));
                    _this.picname3 = currentName;
                    _this.path3 = filePath;
                    // this.correctPath = correctPath;
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf("/") + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf("/") + 1);
                // this.picname = currentName;
                // this.path3 = filePath;
                // this.correctPath = correctPath;
            }
        }, function (err) {
            // this.presentToast("Error while selecting image.");
            _this.file3 = "";
            // this.correctPath = '';
            _this.picname3 = "";
            _this.path3 = "";
        });
    };
    // take image 4
    // public takePicture4(sourceType) {
    //   // Create options for the Camera Dialog
    //   var options = {
    //     quality: 70,
    //     sourceType: sourceType,
    //     saveToPhotoAlbum: false,
    //     correctOrientation: true
    //     // allowEdit: true,
    //     // destinationType: this.camera.DestinationType.DATA_URL,
    //     // targetWidth: 50,
    //     // targetHeight: 50
    //   };
    //   // Get the data of an image
    //   this.camera.getPicture(options).then(
    //     imagePath => {
    //       // Special handling for Android library
    //       this.file4 = imagePath;
    //       this.uploadImage(4);
    //       if (
    //         this.platform.is("android") &&
    //         sourceType === this.camera.PictureSourceType.PHOTOLIBRARY
    //       ) {
    //         this.filePath.resolveNativePath(imagePath).then(filePath => {
    //           let correctPath = filePath.substr(0, filePath.lastIndexOf("/") + 1);
    //           let currentName = imagePath.substring(
    //             imagePath.lastIndexOf("/") + 1,
    //             imagePath.lastIndexOf("?")
    //           );
    //           this.picname4 = currentName;
    //           // this.path = filePath;
    //           // this.correctPath = correctPath;
    //         });
    //       } else {
    //         var currentName = imagePath.substr(imagePath.lastIndexOf("/") + 1);
    //         var correctPath = imagePath.substr(0, imagePath.lastIndexOf("/") + 1);
    //         // this.picname = currentName;
    //         // this.path = filePath;
    //         // this.correctPath = correctPath;
    //       }
    //     },
    //     err => {
    //       // this.presentToast("Error while selecting image.");
    //       this.file4 = "";
    //       // this.correctPath = '';
    //       this.picname4 = "";
    //       // this.path = '';
    //     }
    //   );
    // }
    // upload
    EstablishingCompaniesPage.prototype.uploadImage = function (para) {
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
        else if (para == 2) {
            this.file
                .resolveLocalFilesystemUrl(this.file2)
                .then(function (entry) {
                return entry.file(function (file) {
                    _this.readfile2(file);
                });
            })
                .catch(function (err) { return _this.presentToast("err " + err); });
        }
        else if (para == 3) {
            this.file
                .resolveLocalFilesystemUrl(this.file3)
                .then(function (entry) {
                return entry.file(function (file) {
                    _this.readfile3(file);
                });
            })
                .catch(function (err) { return _this.presentToast("err " + err); });
        }
        // else if (para == 4) {
        //   this.file
        //     .resolveLocalFilesystemUrl(this.file4)
        //     .then(entry =>
        //       (<FileEntry>entry).file(file => {
        //         this.readfile4(file);
        //       })
        //     )
        //     .catch(err => this.presentToast("err " + err));
        // }
    };
    // read form mobile1
    EstablishingCompaniesPage.prototype.readfile1 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], { type: file.type });
            _this.imageBlob1 = imgBlob;
        };
        reader.readAsArrayBuffer(file);
    };
    // read form mobile2
    EstablishingCompaniesPage.prototype.readfile2 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], { type: file.type });
            _this.imageBlob2 = imgBlob;
        };
        reader.readAsArrayBuffer(file);
    };
    // read form mobile3
    EstablishingCompaniesPage.prototype.readfile3 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], { type: file.type });
            _this.imageBlob3 = imgBlob;
        };
        reader.readAsArrayBuffer(file);
    };
    // read form mobile4
    // public readfile4(file: any) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     const imgBlob = new Blob([reader.result], { type: file.type });
    //     this.imageBlob4 = imgBlob;
    //   };
    //   reader.readAsArrayBuffer(file);
    // }
    EstablishingCompaniesPage.prototype.hasError = function (field, error) {
        var ctrl = this.establishingForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    EstablishingCompaniesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-establishing-companies",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\establishing-companies\establishing-companies.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'companies\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- Start Establishing Companies Service -->\n<ion-content>\n\n  <form [formGroup]="establishingForm">\n    <ion-grid>\n      <ion-row>\n\n\n\n\n        <ion-col col-6 class="selectSection">\n          <ion-label>{{ \'country\' | translate }}</ion-label>\n          <ion-select interface="popover" formControlName="country" [(ngModel)]="Country" (ngModelChange)="getRegionValue()" required>\n            <ion-option *ngFor="let country of countryArr" value="{{country.code}}">{{country.value}}</ion-option>\n            <!-- <ion-option value="URB">country 2</ion-option>\n            <ion-option value="ENG">country 3</ion-option> -->\n\n          </ion-select>\n        </ion-col>\n\n        <ion-col col-6 class="selectSection">\n          <ion-label>{{ \'region\' | translate }}</ion-label>\n          <ion-select interface="popover" formControlName="region" [(ngModel)]="Region" required>\n            <ion-option *ngFor="let region of RegionArr" value="{{region.code}}">{{region.value}}</ion-option>\n            <!-- <ion-option value="Egypt">region 2</ion-option>\n            <ion-option value="Alex">region 3</ion-option> -->\n\n          </ion-select>\n        </ion-col>\n\n        <ion-col col-6>\n          <ion-label stacked>{{ \'activity\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="activity" [(ngModel)]="Activity" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'activity\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'activity\', \'minlength\')">{{ \'MinLenght4\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'activity\', \'maxlength\')">{{ \'MaxLenght30\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'activity\', \'pattern\')">{{ \'BadNameFormat\' | translate }}</p>\n\n        </ion-col>\n\n        <ion-col col-6>\n          <ion-label stacked>{{ \'capital\' | translate }}</ion-label>\n          <ion-input type="number" formControlName="capital" [(ngModel)]="Capital" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'capital\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'capital\', \'minlength\')">{{ \'MinLenght4\' | translate }}</p>\n\n\n        </ion-col>\n\n        <!-- <ion-col col-12>\n          <ion-label stacked>{{ \'idNo\' | translate }}</ion-label>\n          <ion-input type="number" formControlName="idNo" [(ngModel)]="IdNo" required></ion-input>\n        </ion-col> -->\n\n        <ion-col col-12>\n          <ion-list class="fieldTitle">\n            <ion-label stacked>{{ "idCard" | translate }}</ion-label>\n            <ion-item class="changeImg">\n              <!-- <p>{{ \'idCard\' | translate }}</p>\n            <button ion-button outline (click)="takePicture(camera.PictureSourceType.PHOTOLIBRARY)">{{ \'uploadFile\' |\n              translate }}</button>\n            <span>{{ picname1 != \'\'? picname1 : (\'NoFileChosen\' | translate) }}</span> -->\n\n              <ion-thumbnail item-start>\n                <img *ngIf="path1 != \'\'" src="{{path1}}" />\n                <img *ngIf="path1 == \'\'" src="./assets/imgs/defaultImg.jpg" />\n\n              </ion-thumbnail>\n              <button ion-button outline (click)="takePicture(camera.PictureSourceType.PHOTOLIBRARY)">\n                {{ "uploadPhoto" | translate }}\n              </button>\n\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-list class="fieldTitle">\n            <ion-label stacked>{{ "authCopy" | translate }}</ion-label>\n            <ion-item class="changeImg">\n              <!-- <p>{{ \'authCopy\' | translate }}</p>\n            <button ion-button outline (click)="takePicture3(camera.PictureSourceType.PHOTOLIBRARY)">{{ \'uploadFile\' |\n              translate }}</button>\n            <span>{{ picname3 != \'\'? picname3 : (\'NoFileChosen\' | translate) }}</span> -->\n\n              <ion-thumbnail item-start>\n                <img *ngIf="path2 != \'\'" src="{{path2}}" />\n                <img *ngIf="path2 == \'\'" src="./assets/imgs/defaultImg.jpg" />\n\n              </ion-thumbnail>\n              <button ion-button outline (click)="takePicture2(camera.PictureSourceType.PHOTOLIBRARY)">\n                {{ "uploadPhoto" | translate }}\n              </button>\n\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-list class="fieldTitle">\n            <ion-label stacked>{{ "rentalAgreement" | translate }}</ion-label>\n            <ion-item class="changeImg">\n              <!-- <p>{{ \'rentalAgreement\' | translate }}</p>\n            <button ion-button outline (click)="takePicture4(camera.PictureSourceType.PHOTOLIBRARY)">{{ \'uploadFile\' |\n              translate }}</button>\n            <span>{{ picname4 != \'\'? picname4 : (\'NoFileChosen\' | translate) }}</span> -->\n\n              <ion-thumbnail item-start>\n                <img *ngIf="path3 != \'\'" src="{{path3}}" />\n                <img *ngIf="path3 == \'\'" src="./assets/imgs/defaultImg.jpg" />\n\n              </ion-thumbnail>\n              <button ion-button outline (click)="takePicture3(camera.PictureSourceType.PHOTOLIBRARY)">\n                {{ "uploadPhoto" | translate }}\n              </button>\n\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'others\' | translate }}&nbsp;<span class="optionSpan">{{ \'optional\' | translate }}</span></ion-label>\n          <ion-textarea formControlName="others" [(ngModel)]="Others"></ion-textarea>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <button ion-button block class="sendbtn" (click)="establishingService()" [disabled]="!establishingForm.valid || file1 ==\'\' || file2 == \'\' || file3 == \'\'  ">{{\'send\'\n      | translate}}</button>\n  </form>\n\n</ion-content>\n<!-- End Establishing Companies Service -->\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\establishing-companies\establishing-companies.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_userprofile_userprofile__["a" /* UserprofileProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], EstablishingCompaniesPage);
    return EstablishingCompaniesPage;
}());

//# sourceMappingURL=establishing-companies.js.map

/***/ })

});
//# sourceMappingURL=16.js.map