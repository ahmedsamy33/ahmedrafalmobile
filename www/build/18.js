webpackJsonp([18],{

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFieldsModule", function() { return EditFieldsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_fields__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditFieldsModule = /** @class */ (function () {
    function EditFieldsModule() {
    }
    EditFieldsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_fields__["a" /* EditFields */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_fields__["a" /* EditFields */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], EditFieldsModule);
    return EditFieldsModule;
}());

//# sourceMappingURL=edit-fields.module.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFields; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authention_service_authention_service__ = __webpack_require__(159);
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









var EditFields = /** @class */ (function () {
    function EditFields(navCtrl, toastCtrl, navParams, builder, AuthentionService, loading, translate, camera, platform, FileTransfer, file, filePath, actionSheetCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.builder = builder;
        this.AuthentionService = AuthentionService;
        this.loading = loading;
        this.translate = translate;
        this.camera = camera;
        this.platform = platform;
        this.FileTransfer = FileTransfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.pleaseWait = null;
        this.lastImage = "";
        this.correctPath = "";
        this.picname = "";
        this.path = "";
        this.flag = this.navParams.get("data");
        this.editForm = this.builder.group({
            fullname: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.editFormPass = this.builder.group({
            oldpass: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            newpass: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            confirmnewpass: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.translate.get(["pleaseWait"]).subscribe(function (res) {
            _this.pleaseWait = res.pleaseWait;
        });
    }
    EditFields.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad HomePage");
    };
    EditFields.prototype.openSettingPage = function () {
        this.navCtrl.pop();
    };
    EditFields.prototype.changeUserData = function () {
        // changePassword
        // console.log("data");
    };
    EditFields.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            // title: "Select Image Source",
            buttons: [
                {
                    text: "Select a photo from gallery",
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                }
                // {
                //   text: 'Use Camera',
                //   handler: () => {
                //     this.takePicture(this.camera.PictureSourceType.CAMERA);
                //   }
                // },
                // {
                //   text: "Cancel",
                //   role: "cancel"
                // }
            ]
        });
        actionSheet.present();
    };
    EditFields.prototype.takePicture = function (sourceType) {
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
            _this.imageValue = imagePath;
            _this.uploadImage2();
            if (_this.platform.is("android") &&
                sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath).then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf("/") + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf("/") + 1, imagePath.lastIndexOf("?"));
                    _this.picname = currentName;
                    _this.path = filePath;
                    _this.correctPath = correctPath;
                    // console.log(this.path);
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf("/") + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf("/") + 1);
                _this.picname = currentName;
                // this.path = filePath;
                _this.correctPath = correctPath;
            }
        }, function (err) {
            _this.presentToast("Error while selecting image.");
            _this.imageValue = "";
            _this.correctPath = "";
            _this.picname = "";
            _this.path = "";
        });
    };
    EditFields.prototype.uploadImage2 = function () {
        var _this = this;
        this.file
            .resolveLocalFilesystemUrl(this.imageValue)
            .then(function (entry) {
            return entry.file(function (file) {
                _this.readfile(file);
                // console.log("readfile ", file);
            });
        })
            .catch(function (err) { return _this.presentToast("err " + err); });
    };
    // Always get the accurate path to your apps folder
    EditFields.prototype.readfile = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], { type: file.type });
            _this.imgBlobprofile = imgBlob;
        };
        reader.readAsArrayBuffer(file);
    };
    // change image(){}
    EditFields.prototype.changeProfileImage = function () {
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.AuthentionService.uploadImage(this.imgBlobprofile).subscribe(function (data) {
            var value = JSON.parse(localStorage.getItem("userSessionData"));
            value.userDetails.picture_url = data.imageToken;
            loading.dismiss();
            localStorage.setItem("userSessionData", JSON.stringify(value));
            _this.navCtrl.pop();
            _this.presentToast("succus to upload image");
        }, function (err) {
            loading.dismiss();
            // this.error = err;
        });
    };
    EditFields.prototype.changePass = function () {
        // changePassword
        // console.log("pass");
        var _this = this;
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.AuthentionService.changePassword(this.Oldpass, this.Newpass).subscribe(function (data) {
            var value = JSON.parse(localStorage.getItem("userSessionData"));
            value.tkn = data.tkn;
            localStorage.setItem("userSessionData", JSON.stringify(value));
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
            else if (JSON.parse(error._body).errorCode == "4003") {
                _this.presentToast(JSON.parse(error._body).message);
            }
            loading.dismiss();
        });
    };
    EditFields.prototype.hasError = function (field, error) {
        var ctrl = this.editFormPass.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    EditFields.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: 'ErrorToast'
        });
        toast.present();
    };
    EditFields = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "edit-fields-page",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\edit-fields\edit-fields.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'EditData\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n  <form [formGroup]="editForm" *ngIf="flag">\n\n\n\n    <!-- edit fullName-->\n\n    <div *ngIf="flag">\n\n      <ion-list class="changeImg">\n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n\n\n            <img *ngIf="path != \'\'" src="{{path}}">\n\n            <img *ngIf="path == \'\'" src="./assets/imgs/editUserImg.png">\n\n          </ion-thumbnail>\n\n          <button ion-button outline (click)="presentActionSheet()">{{\'select\' | translate}}</button>\n\n\n\n          <!-- <button ion-button outline (click)="uploadImage()">{{ \'uploadPhoto\' | translate }} </button> -->\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <!-- <ion-item>\n\n        <ion-label floating>{{\'FullName\' | translate}}</ion-label>\n\n        <ion-input type="text" formControlName="fullname" [(ngModel)]="Fullname" required></ion-input>\n\n      </ion-item> -->\n\n    </div>\n\n  </form>\n\n  <form [formGroup]="editFormPass" *ngIf="!flag">\n\n\n\n    <!-- edit password -->\n\n    <div *ngIf="!flag">\n\n      <ion-item>\n\n        <ion-label floating>{{\'InsertOldPassword\' | translate}}</ion-label>\n\n        <ion-input type="password" formControlName="oldpass" [(ngModel)]="Oldpass" required></ion-input>\n\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'oldpass\', \'required\')">{{ \'require\' | translate }}</p>\n\n\n\n      <ion-item>\n\n        <ion-label floating>{{\'InsertNewPassword\' | translate}}</ion-label>\n\n        <ion-input type="password" formControlName="newpass" [(ngModel)]="Newpass" required></ion-input>\n\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'newpass\', \'required\')">{{ \'require\' | translate }}</p>\n\n\n\n      <ion-item>\n\n        <ion-label floating>{{\'ConfirmeNewPassword\' | translate}}</ion-label>\n\n        <ion-input type="password" formControlName="confirmnewpass" [(ngModel)]="Confirmnewpass" required></ion-input>\n\n      </ion-item>\n\n      <p class="validationHint" *ngIf="hasError(\'confirmnewpass\', \'required\')">{{ \'require\' | translate }}</p>\n\n\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n\n\n<!-- update Btns-->\n\n<ion-footer no-shadow>\n\n  <ion-grid no-padding>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button full class="updateBtn" *ngIf="flag" [disabled]="imageValue == \'\' || correctPath==\'\' || picname==\'\'"\n\n          (click)="changeProfileImage()">\n\n          {{\'Button_Save\' | translate}}\n\n        </button>\n\n        <button ion-button full class="updateBtn" *ngIf="!flag" [disabled]="!editFormPass.valid ||(editFormPass.value.newpass !== editFormPass.value.confirmnewpass) "\n\n          (click)="changePass()">\n\n          {{\'ChangePassword\' | translate}}\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button full outline class="cancelBtn" (click)="openSettingPage()">\n\n          {{\'Button_Cancle\' | translate}}\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\edit-fields\edit-fields.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authention_service_authention_service__["a" /* AuthentionServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], EditFields);
    return EditFields;
}());

//# sourceMappingURL=edit-fields.js.map

/***/ })

});
//# sourceMappingURL=18.js.map