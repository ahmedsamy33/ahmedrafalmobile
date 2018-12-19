import { sessionData } from "./../../app/session-data";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { AlertController } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";
import { UserprofileProvider } from "../../providers/userprofile/userprofile";
import { AuthentionServiceProvider } from "../../providers/authention-service/authention-service";
import { settings } from "../../app/settings";

@IonicPage()
@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  public pleaseWait: string = null;

  public ImageURL = settings.imageUrl;
  public userData = {};
  public imageTokn: string;
  constructor(
    public navCtrl: NavController,
    private loading: LoadingController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public translate: TranslateService,
    public userDataProfile: UserprofileProvider,
    public autheService: AuthentionServiceProvider
  ) {
    this.translate.get(["pleaseWait"]).subscribe(res => {
      this.pleaseWait = res.pleaseWait;
    });
  }

  ionViewWillEnter() {
    let local = JSON.parse(localStorage.getItem("userSessionData"));
    this.imageTokn = local.userDetails.picture_url;
    console.log("kkkk", this.imageTokn);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad SettingsPage");
    // sessionData.getDataFromLocalstorage();
    // // console.log(this.userData.userDetails.userName);Language
    // this.userData = sessionData.userSessionData;
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();

    this.userDataProfile.getUserProfileData().subscribe(
      data => {
        this.userData = data;
        // this.ImageURL=this.ImageURL+this.userData.profileImageToken
        // console.log(data);
        loading.dismiss();
      },
      error => {
        loading.dismiss();
      }
    );
  }

  // change language

  changeLage() {
    let trvalue = {
      Language: "",
      arabic: "",
      cancel: "",
      english: "",
      ok: "",
      SelectedLanguage: ""
    };
    let lang = localStorage.getItem("lang");
    this.translate
      .get([
        "Language",
        "ok",
        "cancel",
        "arabic",
        "english",
        "SelectedLanguage"
      ])
      .subscribe(value => {
        trvalue = value;
      });
    let alert = this.alertCtrl.create();
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
      handler: data => {
        if (data == "english") {
          if (trvalue.SelectedLanguage != "English") {
            let loading = this.loading.create({
              content: this.pleaseWait
            });
            loading.present();
            this.autheService.updateLanguage("English").subscribe(
              data => {
                this.autheService.validateSession().subscribe(
                  data => {
                    this.translate.use("english");
                    // console.log(data);
                    sessionData.saveDataInLocalStorage(data);
                    loading.dismiss();
                  },
                  error => {
                    loading.dismiss();
                  }
                );
              },
              error => {}
            );
          }
        } else {
          if (trvalue.SelectedLanguage != "العربية") {
            let loading = this.loading.create({
              content: this.pleaseWait
            });
            loading.present();
            this.autheService.updateLanguage("Arabic").subscribe(
              data => {
                this.autheService.validateSession().subscribe(
                  data => {
                    this.translate.use("arabic");
                    // console.log(data);
                    sessionData.saveDataInLocalStorage(data);
                    loading.dismiss();
                  },
                  error => {
                    loading.dismiss();
                  }
                );
              },
              error => {}
            );
          }
        }
      }
    });
    alert.present();
  }

  openEditePage(flag) {
    this.navCtrl.push("EditFields", { data: flag });
  }
}
