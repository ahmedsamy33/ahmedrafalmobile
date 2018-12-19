import { MyApp } from "./../../app/app.component";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { settings } from "../../app/settings";
// import { sessionData } from '../../app/session-data';
// import { MyApp } from '../../app/app.component';

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: MyApp
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");
    // sessionData.getDataFromLocalstorage();
    // this.app.userData = sessionData.userSessionData;
    // console.log(this.userData);
  }
  ionViewDidEnter() {
    let local = JSON.parse(localStorage.getItem("userSessionData"));
    // console.log(local, "dddddhamed");

    this.app.userData.userDetails.userName = local.userDetails.userName;
    this.app.userData.is_log = local.is_log;
    let imageTokn = local.userDetails.picture_url;
    // console.log(imageTokn, "dddddddddddddd");
    if (imageTokn == null) {
      this.app.ImageURL = "";
    } else {
      this.app.ImageURL = settings.imageUrl + imageTokn;
    }
    this.app.userData.userDetails.type = local.userDetails.type;
    // console.log("kkkk", this.app.userData.userDetails.type);
  }

  openPageFromMenu(pageName) {
    this.navCtrl.push(pageName);
  }
}
