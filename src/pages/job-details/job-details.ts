import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { UserprofileProvider } from "../../providers/userprofile/userprofile";
import { TranslateService } from "@ngx-translate/core";
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the JobDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-job-details",
  templateUrl: "job-details.html"
})
export class JobDetailsPage {
  public getInfo = {
    country: null,
    dailyWorkHours: 8,
    id: "",
    jobTitle: "",
    region: "",
    salary: "",
    yearsOfExperience: ""
  };
  public pleaseWait: string = null;

  public getUserDetails = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private Userprofile: UserprofileProvider,
    private loading: LoadingController,
    public translate: TranslateService,
    private iab: InAppBrowser
  ) {
    this.translate.get(["pleaseWait"]).subscribe(res => {
      this.pleaseWait = res.pleaseWait;
    });
    this.getInfo = this.navParams.get("data");
    // console.log(this.navParams.get("data"));

    let lang = localStorage.getItem("lang");
    if (lang == "english") {
      lang = "English";
    } else {
      lang = "Arabic";
    }
    this.getHiringData(lang);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad JobDetailsPage");
  }

  getHiringData(lang) {
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.Userprofile.getHiringLabors(this.getInfo.id, lang).subscribe(
      data => {
        this.getUserDetails = data;
        // console.log(data);
        loading.dismiss();

      },
      error => {
        loading.dismiss();

      }
    );
  }
  openUrl() {
    this.iab.create('https://www.rafalgroup.net', '_system');
  }
}
