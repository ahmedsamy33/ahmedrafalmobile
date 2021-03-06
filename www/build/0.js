webpackJsonp([0],{

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function() { return VerifyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VerifyPageModule = /** @class */ (function () {
    function VerifyPageModule() {
    }
    VerifyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verify__["a" /* VerifyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verify__["a" /* VerifyPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], VerifyPageModule);
    return VerifyPageModule;
}());

//# sourceMappingURL=verify.module.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authention_service_authention_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_session_data__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_settings__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the VerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerifyPage = /** @class */ (function () {
    function VerifyPage(navCtrl, navParams, translate, loading, toastCtrl, AuthentionService, builder, app, device) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.AuthentionService = AuthentionService;
        this.builder = builder;
        this.app = app;
        this.device = device;
        this.Code = null;
        this.pleaseWait = null;
        this.code = null;
        this.getSignupData = {
            userName: "",
            password: "",
            countryPhoneCode: ""
        };
        this.myForm = this.builder.group({
            code: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8)])
            ]
        });
        this.translate.get(["pleaseWait"]).subscribe(function (res) {
            _this.pleaseWait = res.pleaseWait;
        });
        this.browerType = this.device.manufacturer + " / " + this.device.model;
        this.osType = this.device.platform + " - " + this.device.version;
    }
    VerifyPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad VerifyPage");
    };
    VerifyPage.prototype.ionViewWillEnter = function () {
        var data = JSON.parse(localStorage.getItem("userSignupData"));
        this.getSignupData = data;
    };
    VerifyPage.prototype.verfiy = function () {
        var _this = this;
        var lang = localStorage.getItem("lang");
        if (lang == "english") {
            lang = "English";
        }
        else {
            lang = "Arabic";
        }
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.AuthentionService.userVerifyCode(this.Code, this.getSignupData.userName, this.getSignupData.password, lang, this.browerType, this.osType, this.getSignupData.countryPhoneCode).subscribe(function (data) {
            // sessionData.signupData.nationalId
            __WEBPACK_IMPORTED_MODULE_5__app_session_data__["a" /* sessionData */].saveDataInLocalStorage(data);
            _this.navCtrl.setRoot("HomePage");
            // console.log("ddddd", data.userDetails.picture_url);
            if (data.userDetails.picture_url != null) {
                _this.app.ImageURL = __WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* settings */].imageUrl + data.userDetails.picture_url;
            }
            else {
                _this.app.ImageURL = null;
            }
            localStorage.removeItem("userSignupData");
            loading.dismiss();
        }, function (error) {
            // console.log(JSON.parse(error._body));
            // Username or Password incorrect
            if (JSON.parse(error._body).errorCode == "4009") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4014") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            loading.dismiss();
        });
    };
    VerifyPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: "ErrorToast"
        });
        toast.present();
    };
    VerifyPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    VerifyPage.prototype.resendCode = function () {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.AuthentionService.ResendCode(this.getSignupData.userName).subscribe(function (data) {
            _this.translate.get(["codeSend"]).subscribe(function (res) {
                _this.presentToast(res.codeSend);
            });
            loading.dismiss();
        }, function (error) {
            // console.log(error._body);
            // Username or Password incorrect
            if (JSON.parse(error._body).errorCode == "4000") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4001") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4002") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4003") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4004") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4005") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4006") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4007") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4009") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4010") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4011") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4012") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4013") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4014") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4015") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4016") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4018") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4023") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4037") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4041") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4043") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4044") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "1013") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "3004") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "3009") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            loading.dismiss();
        });
    };
    VerifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-verify",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\verify\verify.html"*/'<ion-content padding class="Authentication-Form" overflow-scroll="false">\n\n  <div class="logo animated bounceInDown">\n    <img src="./assets/imgs/rafal-logo.png">\n  </div>\n\n  <form class="{{\'ArabicOrEnglishForm\' | translate}}" [formGroup]="myForm" (ngSubmit)="verfiy()">\n    <ion-list>\n\n      <ion-item class="item1 animated bounceInUp">\n        <ion-label floating>\n          <ion-icon name="ios-phone-portrait-outline"></ion-icon>\n          {{\'ConfirmationCode\' | translate}}\n        </ion-label>\n        <ion-input type="text" id="Code" formControlName="code" [(ngModel)]="Code" required></ion-input>\n      </ion-item>\n    </ion-list>\n    <p class="validationHint" *ngIf="hasError(\'code\', \'required\')">{{\n      \'require\' | translate }}</p>\n    <p class="validationHint" *ngIf="hasError(\'code\', \'minlength\')">{{\n      \'MinLenght8\' | translate }}</p>\n    <button ion-button block type="submit" class="animated bounceInUp mainBtn" [disabled]="!myForm.valid">{{\'Button_CheckNumber\'\n      | translate}}</button>\n\n  </form>\n  <!-- <button ion-button clear type="button" class="resendCodeBtn">{{\'ResendCode\' | translate}}</button>\n  <p class="resendCodeBtn">{{\'Wait3Minutes\' | translate}}</p> -->\n  <div class="noRegister animated bounceInUp">\n    <button ion-button clear type="button" (click)="resendCode()">{{\'ResendCode\' | translate}}</button>\n    <p class="resendCodeBtn">{{\'Wait3Minutes\' | translate}}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\verify\verify.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_authention_service_authention_service__["a" /* AuthentionServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_authention_service_authention_service__["a" /* AuthentionServiceProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MyApp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MyApp */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */]) === "function" && _j || Object])
    ], VerifyPage);
    return VerifyPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=verify.js.map

/***/ })

});
//# sourceMappingURL=0.js.map