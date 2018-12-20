webpackJsonp([13],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpasswordPageModule", function() { return ForgetpasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgetpassword__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ForgetpasswordPageModule = /** @class */ (function () {
    function ForgetpasswordPageModule() {
    }
    ForgetpasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgetpassword__["a" /* ForgetpasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgetpassword__["a" /* ForgetpasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], ForgetpasswordPageModule);
    return ForgetpasswordPageModule;
}());

//# sourceMappingURL=forgetpassword.module.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authention_service_authention_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(158);
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
 * Generated class for the ForgetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetpasswordPage = /** @class */ (function () {
    function ForgetpasswordPage(navCtrl, toastCtrl, AuthentionService, loading, translate, navParams, builder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.AuthentionService = AuthentionService;
        this.loading = loading;
        this.translate = translate;
        this.navParams = navParams;
        this.builder = builder;
        this.phoneNumber = null;
        this.pleaseWait = null;
        this.translate.get(["pleaseWait"]).subscribe(function (res) {
            _this.pleaseWait = res.pleaseWait;
        });
        this.myForm = this.builder.group({
            phonenumber: ["", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required])]
        });
    }
    ForgetpasswordPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ForgetpasswordPage");
    };
    ForgetpasswordPage.prototype.GoToResetPassword = function () {
        this.navCtrl.push("ResetpasswordPage");
    };
    ForgetpasswordPage.prototype.forgetpassword = function () {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.AuthentionService.forgetPassword(this.phoneNumber).subscribe(function (data) {
            // sessionData.singinSaveData(this.phoneNumber, "", "");
            localStorage.setItem("phoneNum", _this.phoneNumber);
            _this.navCtrl.push("ResetpasswordPage");
            loading.dismiss();
        }, function (error) {
            // console.log(JSON.parse(error._body));
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
    ForgetpasswordPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: "ErrorToast"
        });
        toast.present();
    };
    ForgetpasswordPage.prototype.hasError = function (field, error) {
        var ctrl = this.myForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    ForgetpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-forgetpassword",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\forgetpassword\forgetpassword.html"*/'<ion-content padding class="Authentication-Form" overflow-scroll="false">\n\n  <div class="logo animated bounceInDown">\n    <img src="./assets/imgs/rafal-logo.png">\n  </div>\n\n  <form class="{{\'ArabicOrEnglishForm\' | translate}}" [formGroup]="myForm" (ngSubmit)="forgetpassword()">\n    <ion-list>\n\n      <ion-item class="item1 animated bounceInUp">\n        <ion-label floating>\n          <ion-icon name="ios-phone-portrait-outline"></ion-icon>\n          {{\'PhoneNumper\' | translate}}\n        </ion-label>\n        <ion-input type="tel" id="PhoneNumber" formControlName="phonenumber" [(ngModel)]="phoneNumber" required></ion-input>\n      </ion-item>\n      <p class="hintNo animated bounceInUp">EX: (20) 102 754 3010</p>\n      <p class="validationHint" *ngIf="hasError(\'phonenumber\', \'required\')">{{\n        \'require\' | translate }}</p>\n    </ion-list>\n\n    <button ion-button block type="submit" class="animated bounceInUp mainBtn" [disabled]="!myForm.valid ">{{\'Button_RequestCode\'\n      | translate}}</button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\forgetpassword\forgetpassword.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_authention_service_authention_service__["a" /* AuthentionServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_authention_service_authention_service__["a" /* AuthentionServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object])
    ], ForgetpasswordPage);
    return ForgetpasswordPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=forgetpassword.js.map

/***/ })

});
//# sourceMappingURL=13.js.map