webpackJsonp([4],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authention_service_authention_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_session_data__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(355);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, translate, loading, toastCtrl, AuthentionService, builder, device) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.AuthentionService = AuthentionService;
        this.builder = builder;
        this.device = device;
        this.userName = null;
        this.phoneNumber = null;
        this.idNumber = null;
        this.Password = null;
        this.confirmPass = null;
        this.pleaseWait = null;
        this.getcountriescodes = [];
        this.myForm = this.builder.group({
            username: [
                "",
                [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].maxLength(30)]
            ],
            phonenumber: ["", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required],
            idnumber: ["", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required],
            password: ["", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required],
            confirmpass: ["", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required],
            countryphoneCode: ["", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required]
        });
        this.translate.get(["pleaseWait"]).subscribe(function (res) {
            _this.pleaseWait = res.pleaseWait;
        });
        this.uuid = this.device.uuid;
        this.language = localStorage.getItem("lang");
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidLoad SignupPage");
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.AuthentionService.getcountriesphpicklistcodes().subscribe(function (data) {
            // console.log(data);
            _this.getcountriescodes = data;
            _this.countryPhoneCode = _this.getcountriescodes[0];
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
        });
    };
    SignupPage.prototype.ionViewWillEnter = function () {
        this.passwordTypeStyle = "password";
        this.passwordTypeStyle2 = "password";
    };
    SignupPage.prototype.ChangePasswordStyle = function (PasswordStyle) {
        if (PasswordStyle === "text") {
            this.passwordTypeStyle = "text";
        }
        else if (PasswordStyle === "password") {
            this.passwordTypeStyle = "password";
        }
    };
    SignupPage.prototype.ChangePasswordStyle2 = function (PasswordStyle) {
        if (PasswordStyle === "text") {
            this.passwordTypeStyle2 = "text";
        }
        else if (PasswordStyle === "password") {
            this.passwordTypeStyle2 = "password";
        }
    };
    // GoToVerify() {
    //   this.navCtrl.push('VerifyPage');
    // }
    SignupPage.prototype.signup = function () {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.AuthentionService.userSignUp(this.phoneNumber, this.Password, this.userName, this.idNumber, this.uuid, this.countryPhoneCode).subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_5__app_session_data__["a" /* sessionData */].singinSaveData(_this.phoneNumber, _this.Password, _this.countryPhoneCode);
            _this.navCtrl.setRoot("VerifyPage");
            loading.dismiss();
        }, function (error) {
            // console.log(JSON.parse(error._body));
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
                // sessionData.singinSaveData(this.phoneNumber, this.Password, this.countryPhoneCode);
                _this.navCtrl.setRoot("VerifyPage");
                _this.presentToast(JSON.parse(error._body).message);
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
    SignupPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: "ErrorToast"
        });
        toast.present();
    };
    SignupPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    SignupPage.prototype.changeLang = function (lang) {
        var langLocal = localStorage.getItem("lang");
        if (langLocal != lang) {
            this.language = langLocal;
            if (lang == "english") {
                this.translate.use("english");
            }
            else {
                this.translate.use("arabic");
            }
            localStorage.setItem("lang", lang);
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-signup",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\signup\signup.html"*/'<ion-content padding class="Authentication-Form" overflow-scroll="false">\n  <ng-container *ngIf="getcountriescodes.length != 0">\n\n    <div class="logo animated bounceInDown">\n      <img src="./assets/imgs/rafal-logo.png">\n    </div>\n\n    <form class="{{\'ArabicOrEnglishForm\' | translate}}" [formGroup]="myForm" (ngSubmit)="signup()">\n\n      <ion-list>\n        <ion-item class="animated bounceInUp">\n          <ion-label floating>\n            <ion-icon name="ios-contact"></ion-icon>\n            {{\'UserName\' | translate}}\n          </ion-label>\n          <ion-input id="UserName" type="text" formControlName="username" [(ngModel)]="userName"></ion-input>\n\n        </ion-item>\n        <p class="validationHint" *ngIf="hasError(\'username\', \'required\')">{{\n          \'require\' | translate }}</p>\n        <p class="validationHint" *ngIf="hasError(\'username\', \'minlength\')">{{\n          \'MinLenght3\' | translate }}</p>\n        <p class="validationHint" *ngIf="hasError(\'username\', \'maxlength\')">{{\n          \'MaxLenght30\' | translate }}</p>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-3>\n              <ion-select interface="popover" class="countryCodeSelect animated bounceInUp" formControlName="countryphoneCode" [(ngModel)]="countryPhoneCode">\n                <ion-option *ngFor="let item of getcountriescodes" value="{{item}}">{{item}}</ion-option>\n\n              </ion-select>\n            </ion-col>\n            <ion-col col-9>\n\n              <ion-item class="animated bounceInUp">\n                <!-- <ion-label floating>\n                <ion-icon name="ios-phone-portrait-outline"></ion-icon>\n                {{\'PhoneNumper\' | translate}}\n              </ion-label> -->\n                <ion-input id="PhoneNumber" type="tel" placeholder="{{\'PhoneNumper\' | translate}}" formControlName="phonenumber" [(ngModel)]="phoneNumber"></ion-input>\n\n              </ion-item>\n              <p class="validationHint" *ngIf="hasError(\'phonenumber\', \'required\')">{{\n                \'require\' | translate }}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <ion-item class="animated bounceInUp">\n          <ion-label floating>\n            <i class="icon fa fa-id-card-o" aria-hidden="true"></i>\n            {{\'IdNo\' | translate}}\n          </ion-label>\n          <ion-input id="IdNo" type="number" formControlName="idnumber" [(ngModel)]="idNumber"></ion-input>\n        </ion-item>\n        <p class="validationHint" *ngIf="hasError(\'idnumber\', \'required\')">{{\n          \'require\' | translate }}</p>\n        <ion-item class="animated bounceInUp">\n          <ion-label floating>\n            <ion-icon name="ios-lock-outline"></ion-icon>\n            {{\'Password\' | translate}}\n          </ion-label>\n          <ion-input id="Password" type="{{passwordTypeStyle}}" formControlName="password" [(ngModel)]="Password"></ion-input>\n        </ion-item>\n        <p class="validationHint" *ngIf="hasError(\'password\', \'required\')">{{\n          \'require\' | translate }}</p>\n        <!-- show/hide password Icons -->\n        <div class="{{\'showPassword\' | translate}} animated bounceInUp">\n          <ion-icon name="ios-eye-outline" class="showPass" (click)="ChangePasswordStyle(\'text\')" *ngIf="passwordTypeStyle === \'password\'"></ion-icon>\n          <ion-icon name="ios-eye-off-outline" class="showPass" (click)="ChangePasswordStyle(\'password\')" *ngIf="passwordTypeStyle === \'text\'"></ion-icon>\n        </div>\n\n        <ion-item class="animated bounceInUp">\n          <ion-label floating>\n            <ion-icon name="ios-lock-outline"></ion-icon>\n            {{\'ConfirmePassword\' | translate}}\n          </ion-label>\n          <ion-input id="repeatPassword" type="{{passwordTypeStyle2}}" formControlName="confirmpass" [(ngModel)]="confirmPass"></ion-input>\n        </ion-item>\n        <p class="validationHint" *ngIf="hasError(\'confirmpass\', \'required\')">{{\n          \'require\' | translate }}</p>\n        <p class="validationHint" *ngIf="myForm.value.password !== myForm.value.confirmpass">Password Don\'t Match</p>\n\n        <!-- show/hide password Icons -->\n        <div class="{{\'showPassword\' | translate}} animated bounceInUp">\n          <ion-icon name="ios-eye-outline" class="showPass" (click)="ChangePasswordStyle2(\'text\')" *ngIf="passwordTypeStyle2 === \'password\'"></ion-icon>\n          <ion-icon name="ios-eye-off-outline" class="showPass" (click)="ChangePasswordStyle2(\'password\')" *ngIf="passwordTypeStyle2 === \'text\'"></ion-icon>\n        </div>\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid ||(myForm.value.password !== myForm.value.confirmpass) " class="animated bounceInUp mainBtn">{{\'SignUp\'\n        |\n        translate}}</button>\n    </form>\n  </ng-container>\n\n</ion-content>\n\n<ion-footer class="changeLangBtns">\n  <p>\n    <button ion-button clear [class.selectedLang]="language != \'arabic\' " (click)="changeLang(\'arabic\')">العربية</button>\n    &nbsp;|&nbsp;\n    <button ion-button clear [class.selectedLang]="language != \'english\' " (click)="changeLang(\'english\')">English</button>\n  </p>\n</ion-footer>\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_authention_service_authention_service__["a" /* AuthentionServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_authention_service_authention_service__["a" /* AuthentionServiceProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */]) === "function" && _h || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=4.js.map