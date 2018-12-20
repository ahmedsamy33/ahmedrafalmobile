webpackJsonp([14],{

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindJobPageModule", function() { return FindJobPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__find_job__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FindJobPageModule = /** @class */ (function () {
    function FindJobPageModule() {
    }
    FindJobPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__find_job__["a" /* FindJobPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__find_job__["a" /* FindJobPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({})
            ],
        })
    ], FindJobPageModule);
    return FindJobPageModule;
}());

//# sourceMappingURL=find-job.module.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindJobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userprofile_userprofile__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_session_data__ = __webpack_require__(160);
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
 * Generated class for the FindJobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FindJobPage = /** @class */ (function () {
    function FindJobPage(navCtrl, navParams, loading, Userprofile, translate, fileOpener, file, transfer, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.Userprofile = Userprofile;
        this.translate = translate;
        this.fileOpener = fileOpener;
        this.file = file;
        this.transfer = transfer;
        this.platform = platform;
        this.jobs = "jobs";
        this.items = [];
        // page number and limition
        this.pageNumLabores = 1;
        this.LimitLabores = 5;
        // page number  and limition
        this.pageNumJob = 1;
        this.LimitJob = 5;
        // array to save data
        this.arrayJobs = [];
        this.arraylaborers = [];
        // img url
        this.imgeUrl = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* settings */].imageUrl;
        this.pleaseWait = null;
        this.jobTitle = [];
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
        this.Userprofile.getPickListCCJ("Job_Title", lang).subscribe(function (data) {
            // console.log(data);
            _this.jobTitle = data;
        }, function (error) { });
    }
    //  for laborar
    FindJobPage.prototype.doInfiniteForlabores = function (infiniteScroll) {
        var _this = this;
        if (this.TotalPageNumberLaborers != undefined &&
            this.pageNumLabores < this.TotalPageNumberLaborers + 1 &&
            this.TotalPageNumberLaborers != 1) {
            this.pageNumLabores = this.pageNumLabores + 1;
            setTimeout(function () {
                if (_this.getSerchLabores != "" && _this.getSerchLabores != null) {
                    var lang = localStorage.getItem("lang");
                    if (lang == "english") {
                        lang = "English";
                    }
                    else {
                        lang = "Arabic";
                    }
                    _this.Userprofile.searchHiringlabors(_this.LimitLabores, _this.pageNumLabores, lang, _this.getSerchJob).subscribe(function (data) {
                        for (var index = 0; index < data.data.length; index++) {
                            _this.arraylaborers.push(data.data[index]);
                        }
                        // console.log(" this.getSerchLabores", this.getSerchLabores);
                    }, function (error) {
                        console.log("error ", error);
                    });
                }
                infiniteScroll.complete();
            }, 1000);
        }
        else {
            infiniteScroll.enable(false);
        }
    };
    //  for job
    FindJobPage.prototype.doInfiniteForJob = function (infiniteScroll) {
        var _this = this;
        if (this.TotalPageNumberJobs != undefined &&
            this.pageNumJob < this.TotalPageNumberJobs + 1 &&
            this.TotalPageNumberJobs != 1) {
            this.pageNumJob = this.pageNumJob + 1;
            setTimeout(function () {
                if (_this.getSerchJob != "" && _this.getSerchJob != null) {
                    var lang = localStorage.getItem("lang");
                    if (lang == "english") {
                        lang = "English";
                    }
                    else {
                        lang = "Arabic";
                    }
                    _this.Userprofile.searchHiringlabors(_this.LimitJob, _this.pageNumJob, lang, _this.getSerchJob).subscribe(function (data) {
                        for (var index = 0; index < data.data.length; index++) {
                            _this.arrayJobs.push(data.data[index]);
                        }
                        // console.log(" this.arrayJobs", this.arrayJobs);
                    }, function (error) {
                        console.log("error ", error);
                    });
                }
                infiniteScroll.complete();
            }, 1000);
        }
        else {
            infiniteScroll.enable(false);
        }
    };
    FindJobPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FindJobPage");
    };
    FindJobPage.prototype.GoToJobDetailsPage = function (item) {
        this.navCtrl.push("JobDetailsPage", { data: item });
    };
    // labors "Doc"
    FindJobPage.prototype.getEmployeeSearch = function () {
        // this.searchlabores = "";
        // console.log(this.searchlabores);
        var _this = this;
        if (this.searchlabores != "" && this.searchlabores != null) {
            this.arraylaborers = [];
            this.getSerchLabores = this.searchlabores;
            // this.searchlabores = "";
            var loading_1 = this.loading.create({
                content: this.pleaseWait
            });
            loading_1.present();
            if (this.getSerchLabores != "" && this.getSerchLabores != null) {
                var lang = localStorage.getItem("lang");
                if (lang == "english") {
                    lang = "English";
                }
                else {
                    lang = "Arabic";
                }
                this.Userprofile.searchEmploment(this.LimitLabores, this.pageNumLabores, lang, this.getSerchLabores).subscribe(function (data) {
                    for (var index = 0; index < data.data.length; index++) {
                        _this.arraylaborers.push(data.data[index]);
                    }
                    var size = Math.floor(data.size / _this.LimitJob);
                    // console.log("size : ", size);
                    if (size == 0) {
                        _this.TotalPageNumberLaborers = 1;
                    }
                    else {
                        _this.TotalPageNumberLaborers = size;
                    }
                    loading_1.dismiss();
                    // this.TotalPageNumberJobs=x
                    // console.log(" this.arraylaborers", this.arraylaborers);
                }, function (error) {
                    // console.log("error ", error);
                    loading_1.dismiss();
                });
            }
        }
    };
    // jobs
    FindJobPage.prototype.getHiringlaborsSearch = function () {
        // this.searchlabores = "";
        var _this = this;
        if (this.searchjobs != "" && this.searchjobs != null) {
            this.arrayJobs = [];
            this.getSerchJob = this.searchjobs;
            // this.searchjobs = "";
            var loading_2 = this.loading.create({
                content: this.pleaseWait
            });
            loading_2.present();
            if (this.getSerchJob != "" && this.getSerchJob != null) {
                var lang = localStorage.getItem("lang");
                if (lang == "english") {
                    lang = "English";
                }
                else {
                    lang = "Arabic";
                }
                this.Userprofile.searchHiringlabors(this.LimitJob, this.pageNumJob, lang, this.getSerchJob).subscribe(function (data) {
                    // console.log(data);
                    for (var index = 0; index < data.data.length; index++) {
                        _this.arrayJobs.push(data.data[index]);
                    }
                    var size = Math.floor(data.size / _this.LimitJob);
                    // console.log("size : ", size);
                    if (size == 0) {
                        _this.TotalPageNumberJobs = 1;
                    }
                    else {
                        _this.TotalPageNumberJobs = size;
                    }
                    loading_2.dismiss();
                    // this.TotalPageNumberJobs=x
                    // console.log(" this.arrayJobs", this.arrayJobs);
                }, function (error) {
                    loading_2.dismiss();
                    console.log("error ", error);
                });
            }
            // console.log(this.getSerchJob);
        }
    };
    // reset job
    FindJobPage.prototype.ResetJob = function () {
        // seach varia
        this.searchjobs = "";
        // get temporary var
        this.getSerchJob = "";
        // page number and limition
        // page number  and limition
        this.pageNumJob = 1;
        this.LimitJob = 5;
        // array to save data
        this.arrayJobs = [];
        // total page number
        this.TotalPageNumberJobs = undefined;
        this.TotalPageNumberLaborers = undefined;
    };
    // reset Laborares
    FindJobPage.prototype.ResetLaborares = function () {
        // seach varia
        this.searchlabores = "";
        // page number and limition
        this.pageNumLabores = 1;
        this.LimitLabores = 5;
        // array to save data
        this.arraylaborers = [];
        // total page number
        this.TotalPageNumberJobs = undefined;
        this.TotalPageNumberLaborers = undefined;
    };
    FindJobPage.prototype.downloadCV = function (item) {
        // console.log(item);
        var _this = this;
        var exection = item.cvName.substr(item.cvName.lastIndexOf(".") + 1);
        // console.log(item.cvName.substr(item.cvName.lastIndexOf(".") + 1));
        var url = "http://rafalgroups.com/Dolphin_Services/formservices/getfile?filename=" + item.cvName + "&type=Employment";
        // console.log(url);
        var path;
        if (this.platform.is("ios")) {
            path = this.file.documentsDirectory;
        }
        else if (this.platform.is("android")) {
            path = this.file.dataDirectory;
        }
        // console.log(path);
        var MimeType;
        if (exection == 'png') {
            MimeType = "image/png";
        }
        else if (exection == 'jpeg') {
            MimeType = "image/jpeg";
        }
        else if (exection == 'pdf') {
            MimeType = "application/pdf";
        }
        else if (exection == 'doc') {
            MimeType = "application/msword";
        }
        else if (exection == 'docx') {
            MimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        }
        var token = __WEBPACK_IMPORTED_MODULE_8__app_session_data__["a" /* sessionData */].userSessionData.tkn;
        // console.log(MimeType);
        var loading = this.loading.create({
            content: this.pleaseWait
        });
        loading.present();
        var transfer = this.transfer.create();
        transfer
            .download(url, path + item.cvName, true, {
            headers: { tkn: token }
        })
            .then(function (entry) {
            var url1 = entry.toURL();
            console.log("entry : ", entry);
            console.log("url : ", url1);
            loading.dismiss();
            _this.fileOpener.open(url1, MimeType);
        }).catch(function (erro) {
            loading.dismiss();
        });
    };
    FindJobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-find-job",template:/*ion-inline-start:"D:\New folder\New folder\src\pages\find-job\find-job.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ "findJob" | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- Start Search input -->\n  <ion-list class="animated bounceInDown">\n    <ion-item class="selectSection">\n      <!-- <ion-label>\n        <ion-icon name="ios-search-outline"></ion-icon>\n      </ion-label> -->\n      <!-- <ion-input type="text" *ngIf="jobs == \'jobs\'" [(ngModel)]="searchjobs" placeholder="{{\'searchByJobTitle\' | translate}}" (keyup.enter)="getHiringlaborsSearch()"></ion-input>\n\n      <ion-input type="text" *ngIf="jobs != \'jobs\'" [(ngModel)]="searchlabores" placeholder="{{\'searchByJobTitle\' | translate}} " (keyup.enter)="getEmployeeSearch()"></ion-input> -->\n\n      <ion-label>\n        <ion-icon name="ios-search-outline"></ion-icon> {{ \'searchByJobTitle\' | translate }}\n      </ion-label>\n      <ion-select interface="popover" *ngIf="jobs == \'jobs\'" [(ngModel)]="searchjobs" (ngModelChange)="getHiringlaborsSearch()">\n        <ion-option *ngFor="let job of jobTitle" value="{{job.code}}">{{job.value}}</ion-option>\n      </ion-select>\n\n      <ion-select interface="popover" *ngIf="jobs != \'jobs\'" [(ngModel)]="searchlabores" (ngModelChange)="getEmployeeSearch()">\n        <ion-option *ngFor="let job of jobTitle" value="{{job.code}}">{{job.value}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <!-- End Search input -->\n\n  <div [ngSwitch]="jobs">\n    <!-- Start jobs tab -->\n    <ion-list *ngSwitchCase="\'jobs\'">\n      <ng-container *ngIf="arrayJobs.length !=0">\n\n        <ion-card class="jobCard animated bounceInUp" *ngFor="let item of arrayJobs">\n          <ion-card-header>\n            <p>\n              <ion-icon name="ios-briefcase"></ion-icon>&nbsp;&nbsp;{{item.jobTitle}}\n            </p>\n            <p>\n              <ion-icon name="pin"></ion-icon>&nbsp;&nbsp;{{item.country}} {{item.region}}\n            </p>\n            <p>\n              <ion-icon name="calendar"></ion-icon>&nbsp;&nbsp;\n              <span>{{ "experianceYears" | translate }}</span>&nbsp; {{item.yearsOfExperience}} {{ "year" | translate\n              }}\n            </p>\n            <p>\n              <ion-icon name="cash"></ion-icon>&nbsp;&nbsp;\n              <span>{{ "salary" | translate }}</span>&nbsp; {{item.salary}} {{ "egp" | translate }}\n            </p>\n            <p>\n              <ion-icon name="time"></ion-icon>&nbsp;&nbsp;\n              <span>{{ \'DailyHours\' | translate }}</span>&nbsp;\n              <!-- 9 {{ \'am\' | translate }} - 5 {{ \'pm\' | translate }} -->\n              {{item.dailyWorkHours}} {{ \'hours\' | translate }}\n            </p>\n          </ion-card-header>\n\n          <!-- <ion-card-content>\n            <p>\n              Designing and developing static or dynamic responsive website. Using\n              CMS like Wordpress, Joomla, opencart and e-commerce when needed.\n              Using 5/CSS3 jquery, javascript.. Designing PSD when required,\n              slicing and coding. PHP when required. Managing Hosting server and\n              mail servers. Using SEO, Google analytic, when required\n            </p>\n          </ion-card-content> -->\n\n          <ion-row>\n            <ion-col class="moreBtn">\n              <button ion-button icon-start clear small (click)="GoToJobDetailsPage(item)">\n                <ion-icon name="ios-more"></ion-icon>&nbsp;&nbsp;\n                <div>{{ "more" | translate }}</div>\n              </button>\n            </ion-col>\n            <ion-col class="{{ \'dateBtn\' | translate }}">\n              <ion-note> {{item.dailyWorkHours}} {{\'ago\'|translate}} </ion-note>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n        <ion-infinite-scroll (ionInfinite)="doInfiniteForJob($event)" *ngIf="pageNumJob < TotalPageNumberJobs">\n          <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Please Wait...">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ng-container>\n      <div class="noResultImg" *ngIf="arrayJobs.length ==0">\n        <img src="./assets/imgs/noSearchResult.jpg" alt="No Search Result">\n        <p>{{ "noResult" | translate }}</p>\n      </div>\n\n    </ion-list>\n\n\n    <!-- End jobs tab -->\n\n\n    <!-- Start labores tab http://localhost:8080/Dolphin_Services/userservices/getprofileimage?imgetkn= -->\n    <ion-list *ngSwitchCase="\'labores\'">\n      <ng-container *ngIf="arraylaborers.length !=0">\n        <ion-card class="animated bounceInUp" *ngFor="let item of arraylaborers">\n          <ion-item>\n            <ion-avatar item-start>\n              <img *ngIf="item.profileImage !=null" src="{{imgeUrl}}{{item.profileImage}}" />\n              <img *ngIf="item.profileImage ==null" src="./assets/imgs/avater.png" />\n            </ion-avatar>\n            <h2>{{item.employeeName}}</h2>\n            <p>{{item.jobTitle}}</p>\n            <p>\n              <span>{{ "salary" | translate }}</span>&nbsp;&nbsp;{{item.salary}} {{ "egp" | translate }}\n            </p>\n          </ion-item>\n\n          <ion-row class="downlodeRow">\n            <ion-col col-9>\n              <p>{{item.cvName}}</p>\n            </ion-col>\n            <ion-col col-3 class="{{ \'downlodeIcon\' | translate }}">\n              <button ion-button icon-end clear small (click)="downloadCV(item)">\n                <ion-icon name="download"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n\n\n        <ion-infinite-scroll (ionInfinite)="doInfiniteForlabores($event)" *ngIf="pageNumLabores < TotalPageNumberLaborers">\n          <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data...">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ng-container>\n      <div class="noResultImg" *ngIf="arraylaborers.length ==0">\n        <img src="./assets/imgs/noSearchResult.jpg" alt="No Search Result">\n        <p>{{ "noResult" | translate }}</p>\n      </div>\n\n\n    </ion-list>\n    <!-- End labores tab -->\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-segment [(ngModel)]="jobs">\n    <!-- Start jobs tab -->\n    <ion-segment-button value="jobs" (click)="ResetLaborares()">\n      <ion-icon name="ios-briefcase"></ion-icon>&nbsp;&nbsp;\n      <span>{{ "jobs" | translate }} </span>\n    </ion-segment-button>\n\n    <!-- Start labores tab -->\n    <ion-segment-button value="labores" (click)="ResetJob()">\n      <ion-icon name="ios-people"></ion-icon>&nbsp;&nbsp;\n      <span>{{ "labores" | translate }}</span>\n    </ion-segment-button>\n  </ion-segment>\n</ion-footer>\n'/*ion-inline-end:"D:\New folder\New folder\src\pages\find-job\find-job.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_userprofile_userprofile__["a" /* UserprofileProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], FindJobPage);
    return FindJobPage;
}());

//# sourceMappingURL=find-job.js.map

/***/ })

});
//# sourceMappingURL=14.js.map