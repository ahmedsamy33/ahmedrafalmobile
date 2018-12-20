webpackJsonp([6],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_session_data__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_userprofile_userprofile__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authention_service_authention_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_settings__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, loading, navParams, alertCtrl, translate, userDataProfile, autheService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.userDataProfile = userDataProfile;
        this.autheService = autheService;
        this.pleaseWait = null;
        this.ImageURL = __WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* settings */].imageUrl;
        this.userData = {};
        this.translate.get(["pleaseWait"]).subscribe(function (res) {
            _this.pleaseWait = res.pleaseWait;
        });
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        var local = JSON.parse(localStorage.getItem("userSessionData"));
        this.imageTokn = local.userDetails.picture_url;
        console.log("kkkk", this.imageTokn);
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidLoad SettingsPage");
        // sessionData.getDataFromLocalstorage();
        // // console.log(this.userData.userDetails.userName);Language
        // this.userData = sessionData.userSessionData;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.userDataProfile.getUserProfileData().subscribe(function (data) {
            _this.userData = data;
            // this.ImageURL=this.ImageURL+this.userData.profileImageToken
            // console.log(data);
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
        });
    };
    // change language
    SettingsPage.prototype.changeLage = function () {
        var _this = this;
        var trvalue = {
            Language: "",
            arabic: "",
            cancel: "",
            english: "",
            ok: "",
            SelectedLanguage: ""
        };
        var lang = localStorage.getItem("lang");
        this.translate
            .get([
            "Language",
            "ok",
            "cancel",
            "arabic",
            "english",
            "SelectedLanguage"
        ])
            .subscribe(function (value) {
            trvalue = value;
        });
        var alert = this.alertCtrl.create();
        alert.setTitle(trvalue.Language);
        alert.addInput({
            type: "radio",
            label: trvalue.english,
            value: "english",
            checked: lang != "arabic"
        });
        alert.addInput({
            type: "radio",
            label: trvalue.arabic,
            value: "arabic",
            checked: lang != "english"
        });
        alert.addButton({ text: trvalue.cancel });
        alert.addButton({
            text: trvalue.ok,
            handler: function (data) {
                if (data == "english") {
                    if (trvalue.SelectedLanguage != "English") {
                        var loading_1 = _this.loading.create({
                            content: _this.pleaseWait
                        });
                        loading_1.present();
                        _this.autheService.updateLanguage("English").subscribe(function (data) {
                            _this.autheService.validateSession().subscribe(function (data) {
                                _this.translate.use("english");
                                // console.log(data);
                                __WEBPACK_IMPORTED_MODULE_0__app_session_data__["a" /* sessionData */].saveDataInLocalStorage(data);
                                loading_1.dismiss();
                            }, function (error) {
                                loading_1.dismiss();
                            });
                        }, function (error) { });
                    }
                }
                else {
                    if (trvalue.SelectedLanguage != "العربية") {
                        var loading_2 = _this.loading.create({
                            content: _this.pleaseWait
                        });
                        loading_2.present();
                        _this.autheService.updateLanguage("Arabic").subscribe(function (data) {
                            _this.autheService.validateSession().subscribe(function (data) {
                                _this.translate.use("arabic");
                                // console.log(data);
                                __WEBPACK_IMPORTED_MODULE_0__app_session_data__["a" /* sessionData */].saveDataInLocalStorage(data);
                                loading_2.dismiss();
                            }, function (error) {
                                loading_2.dismiss();
                            });
                        }, function (error) { });
                    }
                }
            }
        });
        alert.present();
    };
    SettingsPage.prototype.openEditePage = function (flag) {
        this.navCtrl.push("EditFields", { data: flag });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-settings",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'Setting\' | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="{{\'SettingPage\' | translate}}">\n  <ng-container *ngIf="(userData | json) != \'{}\'">\n    <!-- change img/name -->\n    <ion-card class="animated bounceInUp">\n      <ion-card-content>\n        <ion-list (click)="openEditePage(true)">\n          <ion-item>\n            <ion-thumbnail item-start class="userImg">\n              <img *ngIf="imageTokn != null" src="{{ImageURL+imageTokn}}">\n              <img *ngIf="imageTokn  == null || imageTokn  == \'\' " src="./assets/imgs/editUserImg.png">\n            </ion-thumbnail>\n            <span> {{userData.userName}} </span>\n            <ion-icon name="ios-arrow-back" item-right></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- account details -->\n    <ion-card class="animated bounceInUp">\n      <ion-card-content>\n        <!-- username -->\n        <ion-list>\n          <button ion-item>\n            <ion-label>{{\'UserName\' | translate}}</ion-label>\n            <ion-label item-right class="userNo">{{userData.phoneNumber}}</ion-label>\n          </button>\n        </ion-list>\n\n        <!-- change password -->\n        <ion-list (click)="openEditePage(false)">\n          <button ion-item>\n            {{\'ChangePassword\' | translate}}\n            <ion-icon name="ios-arrow-back" item-right></ion-icon>\n          </button>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- change language -->\n    <ion-card class="animated bounceInUp">\n      <ion-card-content>\n        <ion-list>\n          <ion-item (click)="changeLage()">\n            <ion-label class="selectLabel">\n              <span>{{\'Language\' | translate}}</span>\n              <div class="{{\'SelectedValue\' | translate}}">\n                <span>{{\'SelectedLanguage\' | translate}}</span>&nbsp;&nbsp;&nbsp;&nbsp;\n                <ion-icon name="md-arrow-dropdown"></ion-icon>\n              </div>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- evaluate app -->\n    <ion-card class="animated bounceInUp">\n      <ion-card-content>\n        <ion-list>\n          <button ion-item>\n            {{\'EvalueApp\' | translate}}\n            <ion-icon name="ios-arrow-back" item-right></ion-icon>\n          </button>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- deactivate account -->\n    <ion-card class="animated bounceInUp">\n      <ion-card-content>\n        <ion-list>\n          <button ion-item>\n            {{\'DisableAccount\' | translate}}\n            <ion-icon name="ios-arrow-back" item-right></ion-icon>\n          </button>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <ion-footer no-shadow class="animated bounceInUp">\n      <p>Rafal Group 1.0 @ 19 Oct 18</p>\n    </ion-footer>\n\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_userprofile_userprofile__["a" /* UserprofileProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_authention_service_authention_service__["a" /* AuthentionServiceProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=6.js.map