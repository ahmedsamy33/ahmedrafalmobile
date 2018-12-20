webpackJsonp([7],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPageModule", function() { return ResetpasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetpassword__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ResetpasswordPageModule = /** @class */ (function () {
    function ResetpasswordPageModule() {
    }
    ResetpasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resetpassword__["a" /* ResetpasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resetpassword__["a" /* ResetpasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], ResetpasswordPageModule);
    return ResetpasswordPageModule;
}());

//# sourceMappingURL=resetpassword.module.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_session_data__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authention_service_authention_service__ = __webpack_require__(159);
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
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetpasswordPage = /** @class */ (function () {
    function ResetpasswordPage(navCtrl, AuthentionService, loading, translate, toastCtrl, navParams, builder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.AuthentionService = AuthentionService;
        this.loading = loading;
        this.translate = translate;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.builder = builder;
        this.codeNumber = null;
        this.Password = null;
        this.resetPassword = null;
        this.pleaseWait = null;
        // Validators.pattern('/^.*(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/')
        this.myForm = this.builder.group({
            codenumber: ["", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required])],
            password: ["", [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required]],
            resetpassword: ["", [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required]]
        });
        this.translate.get(["pleaseWait"]).subscribe(function (res) {
            _this.pleaseWait = res.pleaseWait;
        });
    }
    ResetpasswordPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ResetpasswordPage", __WEBPACK_IMPORTED_MODULE_3__app_session_data__["a" /* sessionData */].signupData.userName);
    };
    ResetpasswordPage.prototype.ionViewWillEnter = function () {
        this.passwordTypeStyle = "password";
        this.passwordTypeStyle2 = "password";
    };
    ResetpasswordPage.prototype.resetpassowrd = function () {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        var getUserPhone = localStorage.getItem("phoneNum");
        console.log(getUserPhone);
        this.AuthentionService.requestForgetPassword(this.codeNumber, getUserPhone, this.Password).subscribe(function (data) {
            // sessionData.saveDataInLocalStorage(data);
            _this.navCtrl.setRoot("LoginPage");
            localStorage.removeItem("phoneNum");
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
    ResetpasswordPage.prototype.ChangePasswordStyle = function (PasswordStyle) {
        if (PasswordStyle === "text") {
            this.passwordTypeStyle = "text";
        }
        else if (PasswordStyle === "password") {
            this.passwordTypeStyle = "password";
        }
    };
    ResetpasswordPage.prototype.ChangePasswordStyle2 = function (PasswordStyle) {
        if (PasswordStyle === "text") {
            this.passwordTypeStyle2 = "text";
        }
        else if (PasswordStyle === "password") {
            this.passwordTypeStyle2 = "password";
        }
    };
    ResetpasswordPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: "ErrorToast"
        });
        toast.present();
    };
    ResetpasswordPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    ResetpasswordPage.prototype.resendCode = function () {
        var _this = this;
        // console.log(sessionData.signupData.userName);
        var getUserPhone = localStorage.getItem("phoneNum");
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.AuthentionService.ResendCode(getUserPhone).subscribe(function (data) {
            _this.translate.get(["codeSend"]).subscribe(function (res) {
                _this.presentToast(res.codeSend);
            });
            loading.dismiss();
        }, function (error) {
            // console.log(error._body);
            // Username or Password incorrect
            if (JSON.parse(error._body).errorCode == "4009") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            else if (JSON.parse(error._body).errorCode == "4004") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            loading.dismiss();
        });
    };
    ResetpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-resetpassword",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\resetpassword\resetpassword.html"*/'<ion-content padding class="Authentication-Form" overflow-scroll="false">\n\n  <div class="logo animated bounceInDown">\n    <img src="./assets/imgs/rafal-logo.png">\n  </div>\n\n  <form class="{{\'ArabicOrEnglishForm\' | translate}}" [formGroup]="myForm" (ngSubmit)="resetpassowrd()">\n    <ion-list>\n\n      <ion-item class="item1 animated bounceInUp">\n        <ion-label floating>\n          <ion-icon name="ios-phone-portrait-outline"></ion-icon>\n          {{\'ConfirmationCode\' | translate}}\n        </ion-label>\n        <ion-input type="text" id="Code" formControlName="codenumber" [(ngModel)]="codeNumber" required></ion-input>\n      </ion-item>\n      <p class="validationHint" *ngIf="hasError(\'codenumber\', \'required\')">{{ \'require\' | translate }}</p>\n      <ion-item class="animated bounceInUp">\n        <ion-label floating>\n          <ion-icon name="ios-lock-outline"></ion-icon>\n          {{\'Password\' | translate}}\n        </ion-label>\n        <ion-input id="Password" type="{{passwordTypeStyle}}" formControlName="password" [(ngModel)]="Password"></ion-input>\n\n      </ion-item>\n      <p class="validationHint" *ngIf="hasError(\'password\', \'pattern\')">{{ \'passMissMatch\' | translate }}</p>\n      <p class="validationHint" *ngIf="hasError(\'password\', \'required\')">{{ \'require\' | translate }}</p>\n      <!-- show/hide password Icons -->\n      <div class="{{\'showPassword\' | translate}} animated bounceInUp">\n        <ion-icon name="ios-eye-outline" class="showPass" (click)="ChangePasswordStyle(\'text\')" *ngIf="passwordTypeStyle === \'password\'"></ion-icon>\n        <ion-icon name="ios-eye-off-outline" class="showPass" (click)="ChangePasswordStyle(\'password\')" *ngIf="passwordTypeStyle === \'text\'"></ion-icon>\n      </div>\n\n      <ion-item class="animated bounceInUp">\n        <ion-label floating>\n          <ion-icon name="ios-lock-outline"></ion-icon>\n          {{\'ConfirmePassword\' | translate}}\n        </ion-label>\n        <ion-input id="repeatPassword" formControlName="resetpassword" [(ngModel)]="resetPassword" type="{{passwordTypeStyle2}}"></ion-input>\n        <!-- <p class="validationHint" *ngIf="hasError(\'resetpassword\', \'minlength\')">{{ \'MinLenght3\' | translate }}</p> -->\n\n      </ion-item>\n      <p class="validationHint" *ngIf="hasError(\'resetpassword\', \'pattern\')">{{ \'passMissMatch\' | translate }}</p>\n      <p class="validationHint" *ngIf="hasError(\'resetpassword\', \'required\')">{{ \'require\' | translate }}</p>\n\n      <!-- show/hide password Icons -->\n      <div class="{{\'showPassword\' | translate}} animated bounceInUp">\n        <ion-icon name="ios-eye-outline" class="showPass" (click)="ChangePasswordStyle2(\'text\')" *ngIf="passwordTypeStyle2 === \'password\'"></ion-icon>\n        <ion-icon name="ios-eye-off-outline" class="showPass" (click)="ChangePasswordStyle2(\'password\')" *ngIf="passwordTypeStyle2 === \'text\'"></ion-icon>\n      </div>\n\n    </ion-list>\n\n    <button ion-button block type="submit" [disabled]="!myForm.valid ||(myForm.value.password !== myForm.value.resetpassword) "\n      class="animated bounceInUp mainBtn">{{\'ChangePassword\'\n      | translate}}</button>\n\n  </form>\n\n  <div class="noRegister animated bounceInUp">\n    <button ion-button clear type="button" (click)="resendCode()">{{\'ResendCode\' | translate}}</button>\n    <p class="resendCodeBtn">{{\'Wait3Minutes\' | translate}}</p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\resetpassword\resetpassword.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers_authention_service_authention_service__["a" /* AuthentionServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_authention_service_authention_service__["a" /* AuthentionServiceProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object])
    ], ResetpasswordPage);
    return ResetpasswordPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=resetpassword.js.map

/***/ })

});
//# sourceMappingURL=7.js.map