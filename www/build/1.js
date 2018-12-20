webpackJsonp([1],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeAccountPageModule", function() { return UpgradeAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upgradeAccount__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UpgradeAccountPageModule = /** @class */ (function () {
    function UpgradeAccountPageModule() {
    }
    UpgradeAccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__upgradeAccount__["a" /* UpgradeAccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__upgradeAccount__["a" /* UpgradeAccountPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], UpgradeAccountPageModule);
    return UpgradeAccountPageModule;
}());

//# sourceMappingURL=upgradeAccount.module.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeAccountPage; });
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










var UpgradeAccountPage = /** @class */ (function () {
    function UpgradeAccountPage(navCtrl, navParams, builder, SharedService, usergetpicklist, toastCtrl, loading, translate, camera, FileTransfer, file, filePath, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.builder = builder;
        this.SharedService = SharedService;
        this.usergetpicklist = usergetpicklist;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.translate = translate;
        this.camera = camera;
        this.FileTransfer = FileTransfer;
        this.file = file;
        this.filePath = filePath;
        this.platform = platform;
        // inStepOne: boolean = true;
        this.pleaseWait = null;
        this.CompanyArr = [];
        this.RegionArr = [];
        this.RegionArr2 = [];
        // picklists
        this.countryArrStab = [];
        this.countryArrNew = [];
        this.CompanyArrInter = [];
        // variable for stablish form
        this.countryEstablish = null;
        this.companyEstablish = null;
        this.websiteEstablish = null;
        // public adminNameEstablish: string = null;
        this.expireDateEstablish = null;
        // public crNumberEstablish: string = null;
        this.emailEstablish = null;
        // variable for investor form
        this.countryArrNewInvestor = null;
        // public yourNameNew: string = null;
        this.InvestmentTypeNew = null;
        this.CaptialNew = null;
        this.CountryNewWantToVisit = null;
        this.emailNew = null;
        // variable for internal form
        this.CompanyArrInternalShip = null;
        this.companyNameInternal = null;
        this.websiteInternal = null;
        this.activityInternal = null;
        this.countryYounWantInternal = null;
        // public crNumberInternal: string = null;
        this.emailInternal = null;
        // picture image
        this.file2 = "";
        this.file3 = "";
        this.picname2 = "";
        this.picname3 = "";
        this.path2 = "";
        this.path3 = "";
        this.stapForm = this.builder.group({
            countryestablish: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            companyestablish: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)]],
            websiteestablish: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)]],
            // adminNameestablish: ["", Validators.required],
            expireDateestablish: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            // crnumberestablish: ["", Validators.required],
            emailestablish: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)
                ])
            ]
        });
        this.InvestorForm = this.builder.group({
            countryArrNewInvestor: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            // yournameNew: ["", Validators.required],
            investmentTypeNew: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)]],
            captialNew: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4)]],
            countryNewWantToVisit: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            emailnew: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)
                ])
            ]
        });
        this.companyForm = this.builder.group({
            CompanyarrinternalShip: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            companynameInternal: [
                "",
                [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)]
            ],
            websiteinternal: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            activityinternal: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z]+$')]],
            countryYounWantinternal: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            // crNumberinternal: ["", Validators.required],
            emailinternal: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)
                ])
            ]
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
            _this.countryArrStab = data;
            _this.countryArrNew = data;
            _this.CompanyArrInter = data;
            _this.RegionArr = data;
        }, function (error) { });
        this.usergetpicklist.getPickListCCJ("Company", lang).subscribe(function (data) {
            _this.CompanyArr = data;
            _this.upgradeTo = _this.CompanyArr[0].code;
        }, function (error) { });
    }
    UpgradeAccountPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad UpgradeAccountPage");
    };
    // get region for new
    // getRegionValue() {
    //   let lang = localStorage.getItem("lang");
    //   if (lang == "english") {
    //     lang = "English";
    //   } else {
    //     lang = "Arabic";
    //   }
    //   this.RegionArr = [];
    //   this.CountryNewWantToVisit = "";
    //   if (this.countryArrNewInvestor != null) {
    //     let loading = this.loading.create({ content: this.pleaseWait });
    //     loading.present();
    //     this.usergetpicklist
    //       .getPickListRegion(this.countryArrNewInvestor, lang)
    //       .subscribe(
    //         data => {
    //           this.RegionArr = data;
    //           loading.dismiss();
    //         },
    //         error => {
    //           loading.dismiss();
    //         }
    //       );
    //   }
    // }
    // get region for new
    UpgradeAccountPage.prototype.getRegionValue2 = function () {
        var _this = this;
        var lang = localStorage.getItem("lang");
        if (lang == "english") {
            lang = "English";
        }
        else {
            lang = "Arabic";
        }
        this.RegionArr2 = [];
        this.countryYounWantInternal = "";
        if (this.CompanyArrInternalShip != null) {
            var loading_1 = this.loading.create({ content: this.pleaseWait });
            loading_1.present();
            this.usergetpicklist
                .getPickListRegion(this.CompanyArrInternalShip, lang)
                .subscribe(function (data) {
                _this.RegionArr2 = data;
                // console.log(this.RegionArr2);
                loading_1.dismiss();
            }, function (error) {
                loading_1.dismiss();
            });
        }
    };
    // stablish From
    UpgradeAccountPage.prototype.Established = function () {
        var _this = this;
        // console.log(this.stapForm);
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        var data = {
            companyName: this.companyEstablish,
            countryCode: this.countryEstablish,
            investmentCountryCode: "",
            websiteLink: this.websiteEstablish,
            investnentType: "",
            type: this.upgradeTo,
            expireDate: this.expireDateEstablish,
            capital: "",
            mail: this.emailEstablish
        };
        this.SharedService.companyupgradeservices(data).subscribe(function (data) {
            // console.log(data.id);
            _this.SharedService.UploadCompanyCR(_this.imageBlob2, data.id).subscribe(function (data) {
                // console.log(data);
                loading.dismiss();
                _this.navCtrl.pop();
            }, function (error) {
                // console.log(error);
                loading.dismiss();
            });
        }, function (error) {
            // console.log(error);
            loading.dismiss();
        });
    };
    // Investor form
    UpgradeAccountPage.prototype.Investor = function () {
        var _this = this;
        // console.log(this.InvestorForm);
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        var data = {
            companyName: "",
            countryCode: this.InvestmentTypeNew,
            investmentCountryCode: this.CountryNewWantToVisit,
            websiteLink: "",
            investnentType: this.InvestmentTypeNew,
            type: this.upgradeTo,
            expireDate: null,
            capital: this.CaptialNew,
            mail: this.emailNew
        };
        this.SharedService.companyupgradeservices(data).subscribe(function (data) {
            // console.log(data.id);
            loading.dismiss();
            _this.navCtrl.pop();
        }, function (error) {
            // console.log(error);
            loading.dismiss();
        });
    };
    // inter compny form
    UpgradeAccountPage.prototype.International = function () {
        var _this = this;
        // console.log(this.companyForm);
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        var data = {
            companyName: this.companyNameInternal,
            countryCode: this.CompanyArrInternalShip,
            investmentCountryCode: this.countryYounWantInternal,
            websiteLink: this.websiteInternal,
            investnentType: this.activityInternal,
            type: this.upgradeTo,
            expireDate: null,
            capital: "",
            mail: this.emailInternal
        };
        this.SharedService.companyupgradeservices(data).subscribe(function (data) {
            // console.log(data.id);
            _this.SharedService.UploadCompanyCR(_this.imageBlob3, data.id).subscribe(function (data) {
                // console.log(data);
                loading.dismiss();
                _this.navCtrl.pop();
            }, function (error) {
                console.log(error);
                loading.dismiss();
            });
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    // take image 2
    UpgradeAccountPage.prototype.takePicture2 = function (sourceType) {
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
    UpgradeAccountPage.prototype.takePicture3 = function (sourceType) {
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
    UpgradeAccountPage.prototype.uploadImage = function (para) {
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
    // read form mobile2
    UpgradeAccountPage.prototype.readfile2 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], { type: file.type });
            _this.imageBlob2 = imgBlob;
        };
        reader.readAsArrayBuffer(file);
    };
    // read form mobile3
    UpgradeAccountPage.prototype.readfile3 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], { type: file.type });
            _this.imageBlob3 = imgBlob;
        };
        reader.readAsArrayBuffer(file);
    };
    UpgradeAccountPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: 'ErrorToast'
        });
        toast.present();
    };
    UpgradeAccountPage.prototype.hasError = function (field, error, form) {
        var ctrl = this.stapForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    UpgradeAccountPage.prototype.hasError2 = function (field, error, form) {
        var ctrl = this.InvestorForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    UpgradeAccountPage.prototype.hasError3 = function (field, error, form) {
        var ctrl = this.companyForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    UpgradeAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "upgradeAccount-page",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\upgradeAccount\upgradeAccount.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ "upgradeTo" | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 class="selectSection">\n\n        <ion-label>{{ "upgradeTo" | translate }}</ion-label>\n\n        <!--\n\n          <ion-select interface="popover" [(ngModel)]="upgradeTo">\n\n            <ion-option value="com">{{ "companies" | translate }}</ion-option>\n\n            <ion-option value="new">{{ "NewInvestor" | translate }}</ion-option>\n\n            <ion-option value="inter">{{\n\n              "InterCompant" | translate\n\n              }}</ion-option>\n\n          </ion-select>\n\n        -->\n\n\n\n        <ion-select interface="popover" [(ngModel)]="upgradeTo">\n\n          <ion-option *ngFor="let company of CompanyArr" value="{{company.code}}">{{ company.value }}</ion-option>\n\n        </ion-select>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <!-- Start Established company Form -->\n\n  <form *ngIf="upgradeTo == \'Esta\'" [formGroup]="stapForm">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12 class="selectSection">\n\n          <ion-label>{{ "country" | translate }}</ion-label>\n\n          <ion-select interface="popover" formControlName="countryestablish" [(ngModel)]="countryEstablish">\n\n            <ion-option *ngFor="let country of countryArrStab" value="{{country.code}}">{{ country.value }}</ion-option>\n\n          </ion-select>\n\n        </ion-col>\n\n\n\n        <ion-col col-6>\n\n          <ion-label stacked>{{ "compName" | translate }}</ion-label>\n\n          <ion-input type="text" formControlName="companyestablish" [(ngModel)]="companyEstablish"></ion-input>\n\n          <p class="validationHint" *ngIf="hasError(\'companyestablish\', \'required\')">\n\n            {{ "require" | translate }}\n\n          </p>\n\n          <p class="validationHint" *ngIf="hasError(\'companyestablish\', \'maxlength\')">\n\n            {{ "MaxLenght30" | translate }}\n\n          </p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-label stacked>{{ "compWebsite" | translate }}</ion-label>\n\n          <ion-input type="text" formControlName="websiteestablish" [(ngModel)]="websiteEstablish"></ion-input>\n\n          <p class="validationHint" *ngIf="hasError(\'websiteestablish\', \'required\')">\n\n            {{ "require" | translate }}\n\n          </p>\n\n          <p class="validationHint" *ngIf="hasError(\'websiteestablish\', \'maxlength\')">\n\n            {{ "MaxLenght30" | translate }}\n\n          </p>\n\n        </ion-col>\n\n\n\n        <!--\n\n          <ion-col col-6>\n\n            <ion-label stacked>{{ "adminName" | translate }}</ion-label>\n\n            <ion-input type="text" formControlName="adminNameestablish" [(ngModel)]="adminNameEstablish"></ion-input>\n\n          </ion-col>\n\n        -->\n\n\n\n        <ion-col col-12>\n\n          <ion-label>{{ "expiryDate" | translate }}</ion-label>\n\n          <ion-datetime displayFormat="DD/MM/YYYY" max="3020-10-31" doneText="{{\'Button_Confirm\' | translate}}" cancelText="{{\'Button_Cancle\' | translate}}" formControlName="expireDateestablish" [(ngModel)]="expireDateEstablish" required></ion-datetime>\n\n          <p class="validationHint" *ngIf="hasError(\'expireDateestablish\', \'required\')">\n\n            {{ "require" | translate }}\n\n          </p>\n\n        </ion-col>\n\n        <!--\n\n          <ion-col col-12>\n\n            <ion-label stacked>{{ "crNo" | translate }}</ion-label>\n\n            <ion-input type="number" formControlName="crnumberestablish" [(ngModel)]="crNumberEstablish"></ion-input>\n\n          </ion-col>\n\n        -->\n\n\n\n        <ion-col col-12>\n\n          <ion-label stacked>{{ "email" | translate }}</ion-label>\n\n          <ion-input type="email" formControlName="emailestablish" [(ngModel)]="emailEstablish"></ion-input>\n\n          <p class="validationHint" *ngIf="hasError(\'emailestablish\', \'required\')">\n\n            {{ "require" | translate }}\n\n          </p>\n\n          <p class="validationHint" *ngIf="hasError(\'emailestablish\', \'maxlength\')">\n\n            {{ "MaxLenght30" | translate }}\n\n          </p>\n\n          <p class="validationHint" *ngIf="hasError(\'emailestablish\', \'pattern\')">\n\n            {{ "ErrorEmailPattern" | translate }}\n\n          </p>\n\n        </ion-col>\n\n        <!--\n\n          <ion-col col-12>\n\n            <ion-label stacked>{{ \'confEmail\' | translate }}</ion-label>\n\n            <ion-input type="email"></ion-input>\n\n          </ion-col>\n\n        -->\n\n\n\n        <ion-col col-12>\n\n          <ion-list class="changeImg">\n\n            <ion-label stacked>{{ "crImg" | translate }}</ion-label>\n\n            <ion-item>\n\n              <ion-thumbnail item-start>\n\n                <img *ngIf="path2 != \'\'" src="{{path2}}" />\n\n                <img *ngIf="path2 == \'\'" src="./assets/imgs/defaultImg.jpg" />\n\n              </ion-thumbnail>\n\n              <button ion-button outline (click)="takePicture2(camera.PictureSourceType.PHOTOLIBRARY)">\n\n                {{ "uploadPhoto" | translate }}\n\n              </button>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <button ion-button block class="sendbtn" [disabled]="!stapForm.valid || file2 == \'\'" (click)="Established()">\n\n      {{ "send" | translate }}\n\n    </button>\n\n  </form>\n\n  <!-- End Established company Form -->\n\n\n\n  <!-- Start New Investor Form -->\n\n  <form *ngIf="upgradeTo == \'Inverst\'" [formGroup]="InvestorForm">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <!--\n\n          <ion-col col-6>\n\n                    <ion-label stacked>{{ "yourName" | translate }}</ion-label>\n\n                    <ion-input type="text" formControlName="yournameNew" [(ngModel)]="yourNameNew"></ion-input>\n\n          </ion-col> (ngModelChange)="getRegionValue()"\n\n        -->\n\n\n\n        <ion-col col-6 class="selectSection">\n\n          <ion-label>{{ "nationality" | translate }}</ion-label>\n\n          <ion-select interface="popover" formControlName="countryArrNewInvestor" [(ngModel)]="countryArrNewInvestor">\n\n            <ion-option *ngFor="let country of countryArrNew" value="{{country.code}}">{{ country.value }}</ion-option>\n\n          </ion-select>\n\n          <p class="validationHint" *ngIf="hasError2(\'countryArrNewInvestor\', \'required\')">\n\n            {{ "require" | translate }}\n\n          </p>\n\n        </ion-col>\n\n\n\n        <ion-col col-6>\n\n          <ion-label stacked>{{ "invetType" | translate }}</ion-label>\n\n          <ion-input type="text" formControlName="investmentTypeNew" [(ngModel)]="InvestmentTypeNew"></ion-input>\n\n          <p class="validationHint" *ngIf="hasError2(\'investmentTypeNew\', \'required\')">\n\n            {{ "require" | translate }}\n\n          </p>\n\n          <p class="validationHint" *ngIf="hasError2(\'investmentTypeNew\', \'maxlength\')">\n\n            {{ "MaxLenght30" | translate }}\n\n          </p>\n\n        </ion-col>\n\n\n\n        <ion-col col-12>\n\n          <ion-label stacked>{{ "capital" | translate }}</ion-label>\n\n          <ion-input type="number" formControlName="captialNew" [(ngModel)]="CaptialNew"></ion-input>\n\n          <p class="validationHint" *ngIf="hasError2(\'captialNew\', \'required\')">\n\n            {{ "require" | translate }}\n\n          </p>\n\n          <p class="validationHint" *ngIf="hasError2(\'captialNew\', \'minlength\')">\n\n            {{ "MinLenght4" | translate }}\n\n          </p>\n\n        </ion-col>\n\n\n\n        <ion-col col-12 class="selectSection">\n\n          <ion-label stacked>{{ "investCountry" | translate }}</ion-label>\n\n          <!--\n\n            <ion-input type="text" formControlName="countryNewWantToVisit" [(ngModel)]="CountryNewWantToVisit"></ion-input>\n\n          -->\n\n\n\n          <ion-select interface="popover" formControlName="countryNewWantToVisit" [(ngModel)]="CountryNewWantToVisit">\n\n            <ion-option *ngFor="let region of RegionArr" value="{{region.code}}">{{ region.value }}</ion-option>\n\n          </ion-select>\n\n          <p class="validationHint" *ngIf="hasError2(\'countryNewWantToVisit\', \'required\')">\n\n            {{ "require" | translate }}\n\n          </p>\n\n        </ion-col>\n\n\n\n        <ion-col col-12>\n\n          <ion-label stacked>{{ "email" | translate }}</ion-label>\n\n          <ion-input type="email" formControlName="emailnew" [(ngModel)]="emailNew"></ion-input>\n\n          <p class="validationHint" *ngIf="hasError2(\'emailnew\', \'required\')">\n\n            {{ "require" | translate }}\n\n          </p>\n\n          <p class="validationHint" *ngIf="hasError2(\'emailnew\', \'maxlength\')">\n\n            {{ "MaxLenght30" | translate }}\n\n          </p>\n\n          <p class="validationHint" *ngIf="hasError2(\'emailnew\', \'pattern\')">\n\n            {{ "ErrorEmailPattern" | translate }}\n\n          </p>\n\n        </ion-col>\n\n        <!--\n\n          <ion-col col-12>\n\n            <ion-label stacked>{{ \'confEmail\' | translate }}</ion-label>\n\n            <ion-input type="email"></ion-input>\n\n          </ion-col>\n\n        -->\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <button ion-button block class="sendbtn" [disabled]="!InvestorForm.valid" (click)="Investor()">\n\n      {{ "send" | translate }}\n\n    </button>\n\n  </form>\n\n  <!-- End New Investor Form -->\n\n\n\n  <!-- Start International company Form -->\n\n  <form *ngIf="upgradeTo == \'Inter\'" [formGroup]="companyForm">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <ion-label stacked>{{ "compName" | translate }}</ion-label>\n\n          <ion-input type="text" formControlName="companynameInternal" [(ngModel)]="companyNameInternal"></ion-input>\n\n          <p class="validationHint" *ngIf="hasError3(\'companynameInternal\', \'required\')">\n\n            {{ "require" | translate }}\n\n          </p>\n\n          <p class="validationHint" *ngIf="hasError3(\'companynameInternal\', \'maxlength\')">\n\n            {{ "MaxLenght30" | translate }}\n\n          </p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-label stacked>{{ "compWebsite" | translate }}</ion-label>\n\n          <ion-input type="text" formControlName="websiteinternal" [(ngModel)]="websiteInternal"></ion-input>\n\n          <p class="validationHint" *ngIf="hasError3(\'websiteinternal\', \'required\')">\n\n            {{ "require" | translate }}\n\n          </p>\n\n          <p class="validationHint" *ngIf="hasError3(\'websiteinternal\', \'maxlength\')">\n\n            {{ "MaxLenght30" | translate }}\n\n          </p>\n\n        </ion-col>\n\n\n\n        <ion-col col-6 class="selectSection">\n\n          <ion-label>{{ "nationality" | translate }}</ion-label>\n\n          <ion-select interface="popover" formControlName="CompanyarrinternalShip" [(ngModel)]="CompanyArrInternalShip" (ngModelChange)="getRegionValue2()">\n\n            <ion-option *ngFor="let country of CompanyArrInter" value="{{country.code}}">{{ country.value }}</ion-option>\n\n          </ion-select>\n\n          <p class="validationHint" *ngIf="hasError3(\'CompanyarrinternalShip\', \'required\')">\n\n            {{ "require" | translate }}\n\n          </p>\n\n        </ion-col>\n\n\n\n        <ion-col col-6>\n\n          <ion-label stacked>{{ "activity" | translate }}</ion-label>\n\n          <ion-input type="text" formControlName="activityinternal" [(ngModel)]="activityInternal"></ion-input>\n\n          <p class="validationHint" *ngIf="hasError3(\'activityinternal\', \'required\')">\n\n            {{ "require" | translate }}\n\n          </p>\n\n          <p class="validationHint" *ngIf="hasError3(\'activityinternal\', \'maxlength\')">\n\n            {{ "MaxLenght30" | translate }}\n\n          </p>\n\n          <p class="validationHint" *ngIf="hasError(\'activityinternal\', \'pattern\')">{{ \'BadNameFormat\' | translate }}</p>\n\n\n\n        </ion-col>\n\n\n\n        <ion-col col-12 class="selectSection">\n\n          <ion-label stacked>{{ "investCountry" | translate }}</ion-label>\n\n          <ion-select interface="popover" formControlName="countryYounWantinternal" [(ngModel)]="countryYounWantInternal">\n\n            <ion-option *ngFor="let region of RegionArr2" value="{{region.code}}">{{ region.value }}</ion-option>\n\n          </ion-select>\n\n          <p class="validationHint" *ngIf="hasError3(\'countryYounWantinternal\', \'required\')">\n\n            {{ "require" | translate }}\n\n          </p>\n\n        </ion-col>\n\n        <!--\n\n          <ion-col col-12>\n\n            <ion-label stacked>{{ "crNo" | translate }}</ion-label>\n\n            <ion-input type="number" formControlName="crNumberinternal" [(ngModel)]="crNumberInternal"></ion-input>\n\n          </ion-col>\n\n        -->\n\n\n\n        <ion-col col-12>\n\n          <ion-label stacked>{{ "email" | translate }}</ion-label>\n\n          <ion-input type="email" formControlName="emailinternal" [(ngModel)]="emailInternal"></ion-input>\n\n\n\n          <p class="validationHint" *ngIf="hasError3(\'emailinternal\', \'required\')">\n\n            {{ "require" | translate }}\n\n          </p>\n\n          <p class="validationHint" *ngIf="hasError3(\'emailinternal\', \'maxlength\')">\n\n            {{ "MaxLenght30" | translate }}\n\n          </p>\n\n          <p class="validationHint" *ngIf="hasError3(\'emailinternal\', \'pattern\')">\n\n            {{ "ErrorEmailPattern" | translate }}\n\n          </p>\n\n        </ion-col>\n\n        <!--\n\n          <ion-col col-12>\n\n            <ion-label stacked>{{ \'confEmail\' | translate }}</ion-label>\n\n            <ion-input type="email"></ion-input>\n\n          </ion-col>\n\n        -->\n\n\n\n        <ion-col col-12>\n\n          <ion-list class="changeImg">\n\n            <ion-label stacked>{{ "crImg" | translate }}</ion-label>\n\n            <ion-item>\n\n              <ion-thumbnail item-start>\n\n                <img *ngIf="path3 != \'\'" src="{{path3}}" />\n\n                <img *ngIf="path3 == \'\'" src="./assets/imgs/defaultImg.jpg" />\n\n              </ion-thumbnail>\n\n              <button ion-button outline (click)="takePicture3(camera.PictureSourceType.PHOTOLIBRARY)">\n\n                {{ "uploadPhoto" | translate }}\n\n              </button>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <button ion-button block class="sendbtn" [disabled]="!companyForm.valid || file3 == \'\'" (click)="International()">\n\n      {{ "send" | translate }}\n\n    </button>\n\n  </form>\n\n  <!-- End International company Form -->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\upgradeAccount\upgradeAccount.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_userprofile_userprofile__["a" /* UserprofileProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], UpgradeAccountPage);
    return UpgradeAccountPage;
}());

//# sourceMappingURL=upgradeAccount.js.map

/***/ })

});
//# sourceMappingURL=1.js.map