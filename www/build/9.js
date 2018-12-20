webpackJsonp([9],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authention_service_authention_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_session_data__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_settings__ = __webpack_require__(64);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, toastCtrl, navParams, builder, AuthentionService, loading, translate, app, device) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.builder = builder;
        this.AuthentionService = AuthentionService;
        this.loading = loading;
        this.translate = translate;
        this.app = app;
        this.device = device;
        this.Password = null;
        this.phoneNumber = null;
        this.pleaseWait = null;
        this.getcountriescodes = [];
        this.myForm = this.builder.group({
            // 'username': ['', [Validators.required, Validators.minLength(11), Validators.pattern('^01[0-2]{1}[0-9]{8}$')]],
            phonenumber: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            password: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            countryphoneCode: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.translate.get(["pleaseWait"]).subscribe(function (res) {
            _this.pleaseWait = res.pleaseWait;
        });
        this.browerType = this.device.manufacturer + " / " + this.device.model;
        this.osType = this.device.platform + " - " + this.device.version;
        this.uuid = this.device.uuid;
        this.language = localStorage.getItem("lang");
        // console.log(this.language);
        // let idnumber = JSON.parse(localStorage.getItem("nationalId"));
        // console.log("ddddd   fffff   ", idnumber);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidLoad LoginPage");
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
    LoginPage.prototype.ionViewWillEnter = function () {
        this.passwordTypeStyle = "password";
    };
    LoginPage.prototype.ChangePasswordStyle = function (PasswordStyle) {
        if (PasswordStyle === "text") {
            this.passwordTypeStyle = "text";
        }
        else if (PasswordStyle === "password") {
            this.passwordTypeStyle = "password";
        }
    };
    LoginPage.prototype.openPage = function (pageName) {
        this.navCtrl.push(pageName);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        //////////////////////////////// in side /////////////////////////////////////////////////
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
        this.AuthentionService.userLogin(this.phoneNumber, this.Password, lang, this.countryPhoneCode, this.browerType, this.osType, this.uuid).subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_5__app_session_data__["a" /* sessionData */].saveDataInLocalStorage(data);
            // console.log("ddddd", data.userDetails.picture_url);
            _this.app.userData.is_log = true;
            if (data.userDetails.picture_url != null) {
                _this.app.ImageURL = __WEBPACK_IMPORTED_MODULE_7__app_settings__["a" /* settings */].imageUrl + data.userDetails.picture_url;
            }
            else {
                _this.app.ImageURL = null;
            }
            _this.navCtrl.setRoot("HomePage");
            loading.dismiss();
        }, function (error) {
            // console.log(JSON.parse(error._body));
            // Username or Password incorrect
            if (JSON.parse(error._body).errorCode == "4000") {
                __WEBPACK_IMPORTED_MODULE_5__app_session_data__["a" /* sessionData */].singinSaveData(_this.phoneNumber, _this.Password, _this.countryPhoneCode);
                _this.navCtrl.setRoot("VerifyPage");
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
    LoginPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: "ErrorToast"
        });
        toast.present();
    };
    LoginPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return ctrl.dirty && ctrl.hasError(error);
    };
    LoginPage.prototype.changeLang = function (lang) {
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
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\login\login.html"*/'<ion-content padding class="Authentication-Form" overflow-scroll="false">\n  <ng-container *ngIf="getcountriescodes.length != 0">\n    <div class="logo animated bounceInDown">\n      <img src="./assets/imgs/rafal-logo.png">\n    </div>\n\n    <form class="{{\'ArabicOrEnglishForm\' | translate}}" [formGroup]="myForm" (ngSubmit)="login()">\n      <ion-list>\n\n        <!-- <ion-item class="item1 animated bounceInUp">\n        <ion-label floating>\n          <ion-icon name="ios-phone-portrait-outline"></ion-icon>\n          {{\'PhoneNumper\' | translate}}\n        </ion-label>\n        <ion-input type="tel" id="PhoneNumber" formControlName="phonenumber" [(ngModel)]="phoneNumber" required></ion-input>\n      </ion-item>\n      <p class="validationHint" *ngIf="hasError(\'phonenumber\', \'required\')">{{ \'require\' | translate }}</p> -->\n\n\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-3>\n              <ion-select interface="popover" class="countryCodeSelect animated bounceInUp" formControlName="countryphoneCode" [(ngModel)]="countryPhoneCode">\n                <ion-option *ngFor="let item of getcountriescodes" value="{{item}}">{{item}}</ion-option>\n\n              </ion-select>\n            </ion-col>\n            <ion-col col-9>\n              <ion-item class="animated bounceInUp">\n                <!-- <ion-label floating>\n                  <ion-icon name="ios-phone-portrait-outline"></ion-icon>\n                  {{\'PhoneNumper\' | translate}}\n                </ion-label> -->\n                <ion-input type="tel" id="PhoneNumber" placeholder="{{\'PhoneNumper\' | translate}}" formControlName="phonenumber" [(ngModel)]="phoneNumber" required></ion-input>\n\n              </ion-item>\n              <p class="validationHint" *ngIf="hasError(\'phonenumber\', \'required\')">{{ \'require\' | translate }}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <ion-grid no-padding>\n          <ion-item class="item2 animated bounceInUp">\n            <!-- <ion-label floating>\n          <ion-icon name="ios-lock-outline"></ion-icon>\n          {{\'Password\' | translate}}\n        </ion-label> -->\n            <ion-input type="{{passwordTypeStyle}}" placeholder="{{\'Password\' | translate}}" id="PasswordControl" formControlName="password" [(ngModel)]="Password" required></ion-input>\n          </ion-item>\n        </ion-grid>\n\n      </ion-list>\n      <!-- show/hide password Icons -->\n      <div class="{{\'showPassword\' | translate}} animated bounceInUp">\n        <ion-icon name="ios-eye-outline" class="showPass" (click)="ChangePasswordStyle(\'text\')" *ngIf="passwordTypeStyle === \'password\'"></ion-icon>\n        <ion-icon name="ios-eye-off-outline" class="showPass" (click)="ChangePasswordStyle(\'password\')" *ngIf="passwordTypeStyle === \'text\'"></ion-icon>\n      </div>\n\n      <button ion-button block type="submit" class="animated bounceInUp mainBtn" [disabled]="!myForm.valid ">{{\'Button_Login\'\n        | translate}} </button>\n\n    </form>\n\n    <p class="noRegister animated bounceInUp">\n      <button ion-button clear type="button" (click)="openPage(\'ForgetpasswordPage\')" class="animated bounceInUp">{{\'DoYouForgetPassword\'\n        | translate}}</button>\n      &nbsp;|&nbsp;\n      <button ion-button clear (click)="openPage(\'SignupPage\')" class="animated bounceInUp">{{\'SignUp\' |\n        translate}}</button>\n    </p>\n\n\n  </ng-container>\n</ion-content>\n\n<ion-footer class="changeLangBtns">\n  <p>\n    <button ion-button clear [class.selectedLang]="language != \'arabic\' " (click)="changeLang(\'arabic\')">العربية</button>\n    &nbsp;|&nbsp;\n    <button ion-button clear [class.selectedLang]="language != \'english\' " (click)="changeLang(\'english\')">English</button>\n  </p>\n\n</ion-footer>\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__providers_authention_service_authention_service__["a" /* AuthentionServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_authention_service_authention_service__["a" /* AuthentionServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* MyApp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* MyApp */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */]) === "function" && _j || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=9.js.map