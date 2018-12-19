import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { SharedServiceProvider } from "../../providers/shared-service/shared-service";
import { TranslateService } from "@ngx-translate/core";
import { settings } from "../../app/settings";

@IonicPage()
@Component({
  selector: "ads-page",
  templateUrl: "ads.html"
})
export class AdsPage {
  // inStepOne: boolean = true;
  public pleaseWait: string = null;

  public getAllArrayImage = [];

  public imgUrl = settings.imageUrlAds;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private SharedService: SharedServiceProvider,
    private loading: LoadingController,
    public translate: TranslateService
  ) {
    this.translate.get(["pleaseWait"]).subscribe(res => {
      this.pleaseWait = res.pleaseWait;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AdsPage");
    this.addAdvertsService();
  }

  GoToAddAds() {
    this.navCtrl.push("AddAdsPage");
  }

  addAdvertsService() {
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.SharedService.getalladvertienttoken().subscribe(
      data => {
        console.log(data);
        this.getAllArrayImage = data;
        loading.dismiss();
      },
      error => {
        console.log(error);
      }
    );
  }
}
