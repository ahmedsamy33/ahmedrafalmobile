import { Component, ViewChild } from "@angular/core";
import {
  Nav,
  Platform,
  LoadingController,
  ToastController
} from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";
import { sessionData } from "./session-data";
import { AuthentionServiceProvider } from "../providers/authention-service/authention-service";
import { settings } from "./settings";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  public pleaseWait: string = null;

  pages: any = [];

  public textDir: string;

  public userData = {
    is_log: false,

    userDetails: {
      picture_url: "",
      type: "",
      userName: ""
    }
  };
  public ImageURL: string;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private AuthentionService: AuthentionServiceProvider,
    private loading: LoadingController,
    public toastCtrl: ToastController,
    public translate: TranslateService
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {
        title: "AboutUs",
        icon: "ios-information-circle-outline",
        component: "AboutPage"
      },
      {
        title: "findJob",
        icon: "ios-search-outline",
        component: "FindJobPage"
      },
      {
        title: "upgradeTo",
        icon: "ios-trending-up",
        component: "UpgradeAccountPage"
      },
      {
        title: "advertisement",
        icon: "ios-megaphone-outline",
        component: "AdsPage"
      },
      {
        title: "Setting",
        icon: "ios-settings-outline",
        component: "SettingsPage"
      }
    ];

    if (localStorage.getItem("lang") == null) {
      localStorage.setItem("lang", "english");
      this.translate.setDefaultLang("english");
      this.translate.use("english");
      this.platform.setDir("ltr", true);
      this.platform.setLang("en", true);
      this.textDir = "left";
    } else {
      let lang = localStorage.getItem("lang");
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
      if (lang == "english") {
        this.platform.setDir("ltr", true);
        this.platform.setLang("en", true);
        this.textDir = "left";
      } else {
        this.platform.setDir("rtl", true);
        this.platform.setLang("ar", true);
        this.textDir = "right";
      }
    }

    this.translate.get(["pleaseWait"]).subscribe(res => {
      this.pleaseWait = res.pleaseWait;
    });
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == "english") {
        localStorage.setItem("lang", "english");

        this.platform.setDir("ltr", true);
        this.platform.setLang("en", true);
        this.textDir = "left";
      } else {
        localStorage.setItem("lang", "arabic");
        this.platform.setDir("rtl", true);
        this.platform.setLang("ar", true);
        this.textDir = "right";
      }
    });

    let getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));
    sessionData.getDataFromLocalstorage();
    // console.log(getUserVerfiy != null);

    if (getUserVerfiy != null) {
      this.rootPage = "VerifyPage";
      return;
    } else {
      // console.log(localStorage.getItem("lang"));
      // here valdiation session and hash by me
      if (sessionData.userSessionData.is_log) {
        let loading = this.loading.create({
          content: this.pleaseWait
        });
        loading.present();
        this.userData.is_log = sessionData.userSessionData.is_log;
        this.AuthentionService.validateSession().subscribe(
          data => {
            // console.log(data, "pppp", this.userData.userDetails);
            this.userData = data;
            this.userData.userDetails.type = data.userDetails.type;
            this.userData.userDetails.userName = data.userDetails.userName;
            if (
              this.userData.userDetails.picture_url == null ||
              this.userData.userDetails.picture_url == undefined ||
              this.userData.userDetails.picture_url == ""
            ) {
              this.ImageURL = null;
            } else {
              this.ImageURL = settings.imageUrl;
              this.ImageURL =
                this.ImageURL + this.userData.userDetails.picture_url;
            }
            sessionData.saveDataInLocalStorage(data);
            loading.dismiss();
            this.rootPage = "HomePage";
          },
          error => {
            // console.log(JSON.parse(error._body));

            // Username or Password incorrect
            // if (JSON.parse(error._body).errorCode == "4001") {
            //   this.presentToast(JSON.parse(error._body).message);
            // }
            loading.dismiss();
          }
        );
      } else {
        this.rootPage = "LoginPage";
      }
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }

  logout() {
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.AuthentionService.logOut().subscribe(
      data => {
        sessionData.clearDateFromLocalStorage();
        sessionData.resetData();
        loading.dismiss();

        let logOut;
        this.translate.get(["logut_message"]).subscribe(res => {
          logOut = res.logut_message;
          console.log(res);
        });
        this.presentToast(logOut);

        this.nav.setRoot("LoginPage");
      },
      error => {
        // console.log(JSON.parse(error._body));

        // Username or Password incorrect
        // if (JSON.parse(error._body).errorCode == "4001") {
        //   this.presentToast(JSON.parse(error._body).message);
        // }
        loading.dismiss();
      }
    );
  }
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      cssClass: "SuccessToast"
    });
    toast.present();
  }
}
