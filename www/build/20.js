webpackJsonp([20],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharterAccountingPageModule", function() { return CharterAccountingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charter_accounting__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CharterAccountingPageModule = /** @class */ (function () {
    function CharterAccountingPageModule() {
    }
    CharterAccountingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__charter_accounting__["a" /* CharterAccountingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__charter_accounting__["a" /* CharterAccountingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], CharterAccountingPageModule);
    return CharterAccountingPageModule;
}());

//# sourceMappingURL=charter-accounting.module.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharterAccountingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_service_shared_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CharterAccountingPage = /** @class */ (function () {
    function CharterAccountingPage(navCtrl, builder, toastCtrl, SharedService, loading, translate, camera, FileTransfer, file, filePath, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.builder = builder;
        this.toastCtrl = toastCtrl;
        this.SharedService = SharedService;
        this.loading = loading;
        this.translate = translate;
        this.camera = camera;
        this.FileTransfer = FileTransfer;
        this.file = file;
        this.filePath = filePath;
        this.platform = platform;
        this.YearBudget = null;
        // private Others: string = null;
        this.pleaseWait = null;
        this.file1 = "";
        this.file2 = "";
        this.file3 = "";
        this.picname1 = "";
        this.picname2 = "";
        this.picname3 = "";
        this.path1 = "";
        this.path2 = "";
        this.path3 = "";
        this.charterForm = this.builder.group({
            yearBudget: [
                "",
                [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]
            ],
            others: [""]
        });
        this.translate.get(["pleaseWait"]).subscribe(function (res) {
            _this.pleaseWait = res.pleaseWait;
        });
    }
    CharterAccountingPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CharterAccountingPage");
    };
    CharterAccountingPage.prototype.charterService = function () {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.SharedService.charterService(this.imageBlob1, this.imageBlob2, this.imageBlob3, this.YearBudget).subscribe(function (data) {
            _this.navCtrl.setRoot("HomePage");
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
        });
    };
    CharterAccountingPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: 'ErrorToast'
        });
        toast.present();
    };
    // take image1
    CharterAccountingPage.prototype.takePicture = function (sourceType) {
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
            _this.file1 = imagePath;
            // this.uploadImage(1);
            if (_this.platform.is("android") &&
                sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath).then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf("/") + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf("/") + 1, imagePath.lastIndexOf("?"));
                    _this.picname1 = currentName;
                    _this.path1 = filePath;
                    // console.log("imagePath : ", imagePath);
                    // console.log("filePath : ", filePath);
                    // console.log("correctPath : ", correctPath);
                    // console.log("currentName : ", currentName);
                    _this.correctPathTest = correctPath;
                    _this.test(_this.correctPathTest);
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
    CharterAccountingPage.prototype.takePicture2 = function (sourceType) {
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
    // take image 3
    CharterAccountingPage.prototype.takePicture3 = function (sourceType) {
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
                // this.path = filePath;
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
    // upload
    CharterAccountingPage.prototype.uploadImage = function (para) {
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
                    // console.log("file local ", file);
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
    };
    // read form mobile1
    CharterAccountingPage.prototype.readfile1 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], { type: file.type });
            _this.imageBlob1 = imgBlob;
        };
        reader.readAsArrayBuffer(file);
    };
    // read form mobile2
    CharterAccountingPage.prototype.readfile2 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], { type: file.type });
            _this.imageBlob2 = imgBlob;
        };
        reader.readAsArrayBuffer(file);
    };
    // read form mobile3
    CharterAccountingPage.prototype.readfile3 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], { type: file.type });
            _this.imageBlob3 = imgBlob;
        };
        reader.readAsArrayBuffer(file);
    };
    CharterAccountingPage.prototype.test = function (directrory) {
        var _this = this;
        this.file.resolveDirectoryUrl(directrory).then(function (directoryUrl) {
            _this.file.getFile(directoryUrl, _this.picname1, {}).then(function (fileEntry) {
                // this.readfile1(fileEntry);
                fileEntry.file(function (file) {
                    // console.log("file local2 ", file);
                    _this.readfile1(file);
                });
                // console.log("get file2 :", fileEntry);
            });
        });
    };
    CharterAccountingPage.prototype.hasError = function (field, error) {
        var ctrl = this.charterForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    CharterAccountingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-charter-accounting",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\charter-accounting\charter-accounting.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'accounting\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<!-- Start Charter Accounting Service -->\n<ion-content>\n\n  <form [formGroup]="charterForm">\n    <ion-grid>\n      <ion-row>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'yearBudget\' | translate }}</ion-label>\n          <ion-input type="number" formControlName="yearBudget" [(ngModel)]="YearBudget" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'yearBudget\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'yearBudget\', \'minlength\')">{{ \'MinLenght3\' | translate }}</p>\n          <!-- <p class="validationHint" *ngIf="hasError(\'yearBudget\', \'maxlength\')">{{ \'MaxLength4\' | translate }}</p> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n\n        <ion-col col-12>\n          <ion-list class="fieldTitle">\n            <ion-label stacked>{{ "yearAccounting" | translate }}</ion-label>\n            <ion-item class="changeImg">\n              <!-- <p>{{ \'yearAccounting\' | translate }}</p>\n        <button ion-button outline (click)="takePicture(camera.PictureSourceType.PHOTOLIBRARY)">{{ \'uploadFile\' |\n          translate }}</button>\n        <span>{{ picname1 != \'\'? picname1 : (\'NoFileChosen\' | translate) }}</span> -->\n\n              <ion-thumbnail item-start>\n                <img *ngIf="path1 != \'\'" src="{{path1}}" />\n                <img *ngIf="path1 == \'\'" src="./assets/imgs/defaultImg.jpg" />\n\n              </ion-thumbnail>\n              <button ion-button outline (click)="takePicture(camera.PictureSourceType.PHOTOLIBRARY)">\n                {{ "uploadPhoto" | translate }}\n              </button>\n\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-list class="fieldTitle">\n\n            <ion-label stacked>{{ "bankStatement" | translate }}</ion-label>\n            <ion-item class="changeImg">\n              <!-- <p>{{ \'bankStatement\' | translate }}</p>\n        <button ion-button outline (click)="takePicture2(camera.PictureSourceType.PHOTOLIBRARY)">{{ \'uploadFile\' |\n          translate }}</button>\n        <span>{{ picname2 != \'\'? picname2 : (\'NoFileChosen\' | translate) }}</span> -->\n\n              <ion-thumbnail item-start>\n                <img *ngIf="path2 != \'\'" src="{{path2}}" />\n                <img *ngIf="path2 == \'\'" src="./assets/imgs/defaultImg.jpg" />\n              </ion-thumbnail>\n              <button ion-button outline (click)="takePicture2(camera.PictureSourceType.PHOTOLIBRARY)">\n                {{ "uploadPhoto" | translate }}\n              </button>\n\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-list class="fieldTitle">\n            <ion-label stacked>{{ "companyAccounts" | translate }}</ion-label>\n            <ion-item class="changeImg">\n              <!--<p>{{ \'companyAccounts\' | translate }}</p>\n         <button ion-button outline (click)="takePicture3(camera.PictureSourceType.PHOTOLIBRARY)">{{ \'uploadFile\' |\n          translate }}</button>\n        <span>{{ picname3 != \'\'? picname3 : (\'NoFileChosen\' | translate) }}</span> -->\n\n              <ion-thumbnail item-start>\n                <img *ngIf="path3 != \'\'" src="{{path3}}" />\n                <img *ngIf="path3 == \'\'" src="./assets/imgs/defaultImg.jpg" />\n              </ion-thumbnail>\n              <button ion-button outline (click)="takePicture3(camera.PictureSourceType.PHOTOLIBRARY)">\n                {{ "uploadPhoto" | translate }}\n              </button>\n\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <ion-label stacked>{{ \'others\' | translate }}&nbsp;<span class="optionSpan">{{ \'optional\' | translate }}</span></ion-label>\n          <ion-textarea formControlName="others" [(ngModel)]="Others"></ion-textarea>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <button ion-button block class="sendbtn" (click)="charterService()" [disabled]="!charterForm.valid || file1 ==\'\' || file2 == \'\' || file3 == \'\'">{{\'send\'\n      | translate}}</button>\n  </form>\n\n</ion-content>\n<!-- End Charter Accounting Service -->\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\charter-accounting\charter-accounting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], CharterAccountingPage);
    return CharterAccountingPage;
}());

//# sourceMappingURL=charter-accounting.js.map

/***/ })

});
//# sourceMappingURL=20.js.map