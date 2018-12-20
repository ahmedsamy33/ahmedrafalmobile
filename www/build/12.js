webpackJsonp([12],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiringLaborersPageModule", function() { return HiringLaborersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hiring_laborers__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HiringLaborersPageModule = /** @class */ (function () {
    function HiringLaborersPageModule() {
    }
    HiringLaborersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hiring_laborers__["a" /* HiringLaborersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hiring_laborers__["a" /* HiringLaborersPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], HiringLaborersPageModule);
    return HiringLaborersPageModule;
}());

//# sourceMappingURL=hiring-laborers.module.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HiringLaborersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_service_shared_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_userprofile_userprofile__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { AuthentionServiceProvider } from '../../providers/authention-service/authention-service';


/**
 * Generated class for the HiringLaborersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HiringLaborersPage = /** @class */ (function () {
    function HiringLaborersPage(navCtrl, navParams, builder, toastCtrl, SharedService, usergetpicklist, loading, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.builder = builder;
        this.toastCtrl = toastCtrl;
        this.SharedService = SharedService;
        this.usergetpicklist = usergetpicklist;
        this.loading = loading;
        this.translate = translate;
        this.jobTitle = [];
        this.RegionArr = [];
        this.Active = null;
        this.Job = null;
        this.Region = null;
        this.Age = null;
        this.Skills = null;
        this.NoYears = null;
        this.DailyHours = null;
        this.Salary = null;
        this.StatusOfVisa = null;
        this.RequireQualification = null;
        this.Others = null;
        this.pleaseWait = null;
        this.hiringForm = this.builder.group({
            active: [
                "",
                [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z]+$')]
            ],
            job: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            region: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            age: [
                "",
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(2)
                    // Validators.pattern("^d+$")
                ]
            ],
            skills: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            noYears: [
                "",
                [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(4)]
            ],
            dailyHours: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            salary: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
            statusOfVisa: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            requireQualification: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
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
            _this.Job = _this.jobTitle[0].code;
        }, function (error) { });
        this.usergetpicklist.getPickListRegion("EGY", lang).subscribe(function (data) {
            // console.log("ddd", data);
            _this.RegionArr = data;
            _this.Region = _this.RegionArr[0].code;
        }, function (error) { });
    }
    HiringLaborersPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad HiringLaborersPage");
    };
    HiringLaborersPage.prototype.hiringService = function () {
        var _this = this;
        var data = {
            activity: this.Active,
            region: this.Region,
            jobTitleCode: this.Job,
            age: this.Age,
            yearsOfExperience: this.NoYears,
            visaStatus: this.StatusOfVisa,
            dailyWorkHours: this.DailyHours,
            salary: this.Salary,
            requiredQualifications: this.RequireQualification,
            skills: this.Skills,
            other: this.Others
        };
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        this.SharedService.hiringService(data).subscribe(function (data) {
            _this.navCtrl.setRoot("HomePage");
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
    HiringLaborersPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            cssClass: 'ErrorToast'
        });
        toast.present();
    };
    HiringLaborersPage.prototype.hasError = function (field, error) {
        var ctrl = this.hiringForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    // cal age
    HiringLaborersPage.prototype.calAge = function () {
        if (parseInt(this.Age) > 17 && parseInt(this.Age) <= 70 && parseInt(this.Age) != 0) {
            this.ageFlag = false;
        }
        else {
            this.ageFlag = true;
        }
    };
    HiringLaborersPage.prototype.calDayHour = function () {
        if (parseInt(this.DailyHours) > 16 || parseInt(this.DailyHours) == 0) {
            this.dayFlag = true;
        }
        else {
            this.dayFlag = false;
        }
    };
    HiringLaborersPage.prototype.calNOYears = function () {
        if (parseInt(this.NoYears) <= 0) {
            this.NOYears = true;
        }
        else {
            this.NOYears = false;
        }
    };
    HiringLaborersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-hiring-laborers",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\hiring-laborers\hiring-laborers.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'labors\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- Start Hiring Laborers Service -->\n<ion-content>\n\n  <form [formGroup]="hiringForm" (ngSubmit)="hiringService()">\n    <ion-grid>\n      <ion-row>\n\n        <ion-col col-6>\n          <ion-label stacked>{{ \'activity\' | translate }}</ion-label>\n          <ion-input type="text" formControlName="active" [(ngModel)]="Active" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'active\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'active\', \'pattern\')">{{ \'BadNameFormat\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'active\', \'minlength\')">{{ \'MinLenght4\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'active\', \'maxlength\')">{{ \'MaxLenght30\' | translate }}</p>\n\n        </ion-col>\n\n        <ion-col col-6 class="selectSection">\n          <ion-label>{{ \'jobTitle\' | translate }}</ion-label>\n          <ion-select interface="popover" formControlName="job" [(ngModel)]="Job" required>\n            <ion-option *ngFor="let job of jobTitle" value="{{job.code}}">{{job.value}}</ion-option>\n            <!-- <ion-option value="2">job 2</ion-option>\n            <ion-option value="3">job 3</ion-option>\n            <ion-option value="4">job 4</ion-option>\n            <ion-option value="5">job 5</ion-option> -->\n          </ion-select>\n        </ion-col>\n\n        <ion-col col-6 class="selectSection">\n          <ion-label>{{ \'region\' | translate }}</ion-label>\n          <ion-select interface="popover" formControlName="region" [(ngModel)]="Region" required>\n            <ion-option *ngFor="let region of RegionArr" value="{{region.code}}">{{region.value}}</ion-option>\n            <!-- <ion-option value="Egypt">region 2</ion-option>\n            <ion-option value="Alex">region 3</ion-option> -->\n\n          </ion-select>\n        </ion-col>\n\n        <ion-col col-6>\n          <ion-label stacked>{{ \'age\' | translate }} </ion-label>\n          <ion-input type="number" formControlName="age" [(ngModel)]="Age" (ionChange)="calAge()" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'age\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'age\', \'maxlength\')">{{ \'MaxLenght2\' | translate }}</p>\n          <!-- <p class="validationHint" *ngIf="hasError(\'age\', \'pattern\')">{{ \'onlyPostiveVal\' | translate }}</p> -->\n          <p class="validationHint" *ngIf="!hiringForm.get(\'age\').hasError(\'required\') && !hiringForm.get(\'age\').hasError(\'maxlength\') && ageFlag">{{\n            \'ageMessage\' | translate }}\n\n          </p>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'skills\' | translate }}</ion-label>\n          <ion-textarea formControlName="skills" [(ngModel)]="Skills" required></ion-textarea>\n          <p class="validationHint" *ngIf="hasError(\'skills\', \'required\')">{{ \'require\' | translate }}</p>\n\n        </ion-col>\n\n        <ion-col col-6>\n          <ion-label stacked>{{ \'noYears\' | translate }}</ion-label>\n          <ion-input type="number" formControlName="noYears" [(ngModel)]="NoYears" required (ionChange)="calNOYears()"></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'noYears\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'noYears\', \'minlength\')">{{ \'MinLenght1\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'noYears\', \'maxlength\')">{{ \'MaxLength4\' | translate }}</p>\n          <p class="validationHint" *ngIf="!hiringForm.get(\'noYears\').hasError(\'required\') && NOYears">{{\n            \'noofyearMessage\' | translate }}</p>\n        </ion-col>\n\n        <ion-col col-6>\n          <ion-label stacked>{{ \'DailyHours\' | translate }}</ion-label>\n          <ion-input type="number" formControlName="dailyHours" [(ngModel)]="DailyHours" (ionChange)="calDayHour()"\n            required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'dailyHours\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="!hiringForm.get(\'dailyHours\').hasError(\'required\') &&dayFlag">{{\n            \'DayMessage\' | translate }}</p>\n\n        </ion-col>\n\n        <ion-col col-6>\n          <ion-label stacked>{{ \'salary\' | translate }}</ion-label>\n          <ion-input type="number" formControlName="salary" [(ngModel)]="Salary" required></ion-input>\n          <p class="validationHint" *ngIf="hasError(\'salary\', \'required\')">{{ \'require\' | translate }}</p>\n          <p class="validationHint" *ngIf="hasError(\'salary\', \'minlength\')">{{ \'MinLenght3\' | translate }}</p>\n\n        </ion-col>\n\n        <ion-col col-6 class="selectSection">\n          <ion-label>{{ \'statusOfVisa\' | translate }}</ion-label>\n          <ion-select interface="popover" formControlName="statusOfVisa" [(ngModel)]="StatusOfVisa" required>\n            <ion-option value="Available">{{ \'Available\' | translate }}</ion-option>\n            <ion-option value="Unavailable">{{ \'Unavailable\' | translate }}</ion-option>\n          </ion-select>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'requireQualification\' | translate }}</ion-label>\n          <ion-textarea formControlName="requireQualification" [(ngModel)]="RequireQualification" required></ion-textarea>\n          <p class="validationHint" *ngIf="hasError(\'requireQualification\', \'required\')">{{ \'require\' | translate }}</p>\n\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-label stacked>{{ \'others\' | translate }}&nbsp;<span class="optionSpan">{{ \'optional\' | translate }}</span></ion-label>\n          <ion-textarea formControlName="others" [(ngModel)]="Others"></ion-textarea>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <button ion-button block class="sendbtn" [disabled]="!hiringForm.valid || ageFlag ||dayFlag ||NOYears">{{\'send\' |\n      translate}}</button>\n  </form>\n\n</ion-content>\n<!-- End Hiring Laborers Service -->\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\hiring-laborers\hiring-laborers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_userprofile_userprofile__["a" /* UserprofileProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], HiringLaborersPage);
    return HiringLaborersPage;
}());

//# sourceMappingURL=hiring-laborers.js.map

/***/ })

});
//# sourceMappingURL=12.js.map