webpackJsonp([17],{

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentPageModule", function() { return EmploymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employment__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EmploymentPageModule = /** @class */ (function () {
    function EmploymentPageModule() {
    }
    EmploymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__employment__["a" /* EmploymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__employment__["a" /* EmploymentPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], EmploymentPageModule);
    return EmploymentPageModule;
}());

//# sourceMappingURL=employment.module.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmploymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_service_shared_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_userprofile_userprofile__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { FileTransfer } from "@ionic-native/file-transfer";


// import { Camera } from "@ionic-native/camera";
var EmploymentPage = /** @class */ (function () {
    function EmploymentPage(navCtrl, navParams, toastCtrl, builder, SharedService, loading, translate, fileChooser, 
        // private camera: Camera,
        // private FileTransfer: FileTransfer,
        usergetpicklist, file, filePath // public platform: Platform
    ) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.builder = builder;
        this.SharedService = SharedService;
        this.loading = loading;
        this.translate = translate;
        this.fileChooser = fileChooser;
        this.usergetpicklist = usergetpicklist;
        this.file = file;
        this.filePath = filePath; // public platform: Platform
        this.Activity = null;
        this.job = null;
        this.Salary = null;
        // private Others: string = null;
        this.pleaseWait = null;
        this.file2 = "";
        this.picname2 = "";
        this.path2 = "";
        this.fileExtension = "";
        this.jobTitle = [];
        this.employmentForm = this.builder.group({
            activity: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z]+$')]],
            job: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            salary: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
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
        this.usergetpicklist.getPickListCCJ("Job_Title", lang).subscribe(function (data) {
            // console.log(data[0].code);
            _this.jobTitle = data;
        }, function (error) { });
    }
    EmploymentPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad EmploymentPage");
    };
    EmploymentPage.prototype.employmentService = function () {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.SharedService.EmploymentService(this.Activity, this.job, this.Salary, this.fileExtension, this.imageBlob2).subscribe(function (data) {
            _this.navCtrl.pop();
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
    EmploymentPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: 'ErrorToast'
        });
        toast.present();
    };
    // public fileName: string;
    EmploymentPage.prototype.openFile = function () {
        var _this = this;
        this.file2 = "";
        // this.correctPath = '';
        this.picname2 = "";
        this.path2 = "";
        this.fileChooser
            .open()
            .then(function (uri) {
            _this.file2 = uri;
            _this.uploadImage(2);
            _this.filePath.resolveNativePath(uri).then(function (filePath) {
                var correctPath = filePath.substr(0, filePath.lastIndexOf("/") + 1);
                var currentName = filePath.substring(filePath.lastIndexOf("/") + 1, filePath.length);
                _this.picname2 = currentName;
                _this.path2 = filePath;
                _this.fileExtension = currentName.substr(currentName.lastIndexOf(".") + 1);
                // this.correctPath = correctPath;
            });
        })
            .catch(function (e) {
            // console.log(e);
            _this.file2 = "";
            // this.correctPath = '';
            _this.picname2 = "";
            _this.path2 = "";
        });
    };
    // // take image 2
    // public takePicture2(sourceType) {
    //   // Create options for the Camera Dialog
    //   var options = {
    //     quality: 70,
    //     sourceType: sourceType,
    //     saveToPhotoAlbum: false,
    //     correctOrientation: true
    //   };
    //   // Get the data of an image
    //   this.camera.getPicture(options).then(
    //     imagePath => {
    //       // Special handling for Android library
    //       this.file2 = imagePath;
    //       this.uploadImage(2);
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
    //           this.picname2 = currentName;
    //           this.path2 = filePath;
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
    //       this.file2 = "";
    //       // this.correctPath = '';
    //       this.picname2 = "";
    //       this.path2 = "";
    //     }
    //   );
    // }
    // upload
    EmploymentPage.prototype.uploadImage = function (para) {
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
    EmploymentPage.prototype.readfile2 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], { type: file.type });
            _this.imageBlob2 = imgBlob;
        };
        reader.readAsArrayBuffer(file);
    };
    EmploymentPage.prototype.hasError = function (field, error) {
        var ctrl = this.employmentForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    EmploymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-employment",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\employment\employment.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'employment\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<!-- Start Employment Service -->\n<ion-content>\n\n  <form [formGroup]="employmentForm">\n    <ion-grid>\n      <ion-row>\n\n\n\n        <ion-col col-6>\n          <ion-label stacked>{{ \'activity\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="activity" [(ngModel)]="Activity" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'activity\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'activity\', \'maxlength\')">{{ \'MaxLenght30\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'activity\', \'pattern\')">{{ \'BadNameFormat\' | translate }}</p>\n\n        </ion-col>\n\n        <ion-col col-6 class="selectSection">\n          <ion-label>{{ \'jobTitle\' | translate }}</ion-label>\n          <ion-select interface="popover" formControlName="job" [(ngModel)]="Job" required>\n            <ion-option *ngFor="let job of jobTitle" value="{{job.code}}">{{job.value}}</ion-option>\n\n          </ion-select>\n        </ion-col>\n\n        <ion-col col-6>\n          <ion-label stacked>{{ \'salary\' | translate }}</ion-label>\n          <ion-input type="number" formControlName="salary" [(ngModel)]="Salary" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'salary\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'salary\', \'minlength\')">{{ \'MinLenght3\' | translate }}</p>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-list class="fieldTitle">\n            <ion-item>\n              <p>{{ \'cv\' | translate }}</p>\n              <button ion-button outline (click)="openFile()">{{ \'uploadFile\' | translate }}</button>\n              <span>{{ picname2 != \'\'? picname2 : (\'NoFileChosen\' | translate) }}</span>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n        <ion-col col-12>\n          <ion-label stacked>{{ \'others\' | translate }}&nbsp;<span class="optionSpan">{{ \'optional\' | translate }}</span></ion-label>\n          <ion-textarea formControlName="others" [(ngModel)]="Others"></ion-textarea>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <button ion-button block class="sendbtn" [disabled]="!employmentForm.valid|| file2 == \'\' " (click)="employmentService()">{{\'send\'\n      | translate}}</button>\n  </form>\n\n</ion-content>\n<!-- End Employment Service -->\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\employment\employment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_8__providers_userprofile_userprofile__["a" /* UserprofileProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */] // public platform: Platform
        ])
    ], EmploymentPage);
    return EmploymentPage;
}());

//# sourceMappingURL=employment.js.map

/***/ })

});
//# sourceMappingURL=17.js.map