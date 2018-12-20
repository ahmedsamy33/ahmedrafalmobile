webpackJsonp([21],{

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertifiedTranslationPageModule", function() { return CertifiedTranslationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__certified_translation__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CertifiedTranslationPageModule = /** @class */ (function () {
    function CertifiedTranslationPageModule() {
    }
    CertifiedTranslationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__certified_translation__["a" /* CertifiedTranslationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__certified_translation__["a" /* CertifiedTranslationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], CertifiedTranslationPageModule);
    return CertifiedTranslationPageModule;
}());

//# sourceMappingURL=certified-translation.module.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertifiedTranslationPage; });
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
var CertifiedTranslationPage = /** @class */ (function () {
    function CertifiedTranslationPage(navCtrl, builder, toastCtrl, SharedService, loading, translate, 
        // private camera: Camera,
        // private FileTransfer: FileTransfer,
        file, filePath, fileChooser, // public platform: Platform,
        userProfile) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.builder = builder;
        this.toastCtrl = toastCtrl;
        this.SharedService = SharedService;
        this.loading = loading;
        this.translate = translate;
        this.file = file;
        this.filePath = filePath;
        this.fileChooser = fileChooser;
        this.userProfile = userProfile;
        this.TypeOfTranslate = null;
        this.ToLang = null;
        this.ResponsibleOfRecieving = null;
        this.Others = null;
        this.pleaseWait = null;
        this.file2 = "";
        this.picname2 = "";
        this.fileExtension = "";
        this.path2 = "";
        this.arrayLang = [];
        this.arrayTypeLang = [];
        this.certifiedForm = this.builder.group({
            typeOfTranslate: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            toLang: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            responsibleOfRecieving: [
                "",
                [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(120)]
            ],
            others: [""]
        });
        this.translate.get(["pleaseWait"]).subscribe(function (res) {
            _this.pleaseWait = res.pleaseWait;
        });
        var langLocal = localStorage.getItem("lang");
        if (langLocal == "english") {
            langLocal = "English";
        }
        else {
            langLocal = "Arabic";
        }
        this.userProfile.getPickListCCJ("Language", langLocal).subscribe(function (data) {
            _this.arrayLang = data;
            _this.ToLang = _this.arrayLang[0].code;
        }, function (error) {
            console.log(error);
        });
        this.userProfile.getPickListCCJ("Translation_Type", langLocal).subscribe(function (data) {
            _this.arrayTypeLang = data;
            _this.TypeOfTranslate = _this.arrayTypeLang[0].code;
        }, function (error) {
            console.log(error);
        });
    }
    CertifiedTranslationPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CertifiedTranslationPage");
    };
    CertifiedTranslationPage.prototype.Certified = function () {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.SharedService.CertifiedService(this.TypeOfTranslate, this.ToLang, this.ResponsibleOfRecieving, this.Others, this.fileExtension, this.imageBlob2).subscribe(function (data) {
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
    CertifiedTranslationPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: 'ErrorToast'
        });
        toast.present();
    };
    CertifiedTranslationPage.prototype.openFile = function () {
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
                // console.log("filePath : ", filePath);
                // console.log("name : ", this.picname2);
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
    // upload
    CertifiedTranslationPage.prototype.uploadImage = function (para) {
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
    CertifiedTranslationPage.prototype.readfile2 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], { type: file.type });
            _this.imageBlob2 = imgBlob;
        };
        reader.readAsArrayBuffer(file);
    };
    CertifiedTranslationPage.prototype.hasError = function (field, error) {
        var ctrl = this.certifiedForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    CertifiedTranslationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-certified-translation",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\certified-translation\certified-translation.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'certifiedTranslation\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<!-- Start Certified Translation Service -->\n<ion-content>\n\n  <form [formGroup]="certifiedForm">\n    <ion-grid>\n      <ion-row>\n\n\n\n        <!-- <ion-col col-6>\n          <ion-label stacked>{{ \'typeOfTranslate\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="typeOfTranslate" [(ngModel)]="typeOfTranslate" required></ion-input>\n        </ion-col> -->\n\n        <ion-col col-6 class="selectSection">\n          <ion-label>{{ \'typeOfTranslate\' | translate }}</ion-label>\n          <!-- <ion-select interface="popover" required>\n            <ion-option value="1">option1</ion-option>\n            <ion-option value="1">option2</ion-option>\n            <ion-option value="1">option3</ion-option>\n          </ion-select> -->\n\n          <ion-select interface="popover" formControlName="typeOfTranslate" [(ngModel)]="TypeOfTranslate" required>\n            <ion-option *ngFor="let type of arrayTypeLang" value="{{type.code}}">{{type.value}}</ion-option>\n\n          </ion-select>\n        </ion-col>\n\n        <!-- <ion-col col-6>\n          <ion-label stacked>{{ \'toLang\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="toLang" [(ngModel)]="toLang" required></ion-input>\n        </ion-col> -->\n\n        <ion-col col-6 class="selectSection">\n          <ion-label>{{ \'toLang\' | translate }}</ion-label>\n          <!-- <ion-select interface="popover" required>\n            <ion-option value="1">option1</ion-option>\n            <ion-option value="1">option2</ion-option>\n            <ion-option value="1">option3</ion-option>\n          </ion-select> -->\n\n          <ion-select interface="popover" formControlName="toLang" [(ngModel)]="ToLang" required>\n            <ion-option *ngFor="let type of arrayLang" value="{{type.code}}">{{type.value}}</ion-option>\n\n          </ion-select>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'responsibleOfRecieving\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="responsibleOfRecieving" [(ngModel)]="ResponsibleOfRecieving" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'responsibleOfRecieving\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'responsibleOfRecieving\', \'maxlength\')">{{ \'MaxLenght120\' |\n            translate }}</p>\n        </ion-col>\n\n        <ion-list class="fieldTitle">\n          <ion-item>\n            <p>{{ \'translationFile\' | translate }}</p>\n            <button ion-button outline (click)="openFile()">{{ \'uploadFile\' | translate }}</button>\n            <span>{{ picname2 != \'\'? picname2 : (\'NoFileChosen\' | translate) }}</span>\n          </ion-item>\n        </ion-list>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'others\' | translate }}&nbsp;<span class="optionSpan">{{ \'optional\' | translate }}</span></ion-label>\n          <ion-textarea formControlName="others" [(ngModel)]="Others"></ion-textarea>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <button ion-button block class="sendbtn" [disabled]="!certifiedForm.valid  || file2 == \'\'" (click)="Certified()">{{\'send\'\n      | translate}}</button>\n  </form>\n\n</ion-content>\n<!-- End Certified Translation Service -->\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\certified-translation\certified-translation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_8__providers_userprofile_userprofile__["a" /* UserprofileProvider */]])
    ], CertifiedTranslationPage);
    return CertifiedTranslationPage;
}());

//# sourceMappingURL=certified-translation.js.map

/***/ })

});
//# sourceMappingURL=21.js.map