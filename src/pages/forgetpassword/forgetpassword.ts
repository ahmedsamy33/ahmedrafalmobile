import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController
} from "ionic-angular";
import { AuthentionServiceProvider } from "../../providers/authention-service/authention-service";
import { TranslateService } from "@ngx-translate/core";
import { sessionData } from "../../app/session-data";

/**
 * Generated class for the ForgetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-forgetpassword",
  templateUrl: "forgetpassword.html"
})
export class ForgetpasswordPage {
  private phoneNumber: string = null;
  myForm: FormGroup;
  public pleaseWait: string = null;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private AuthentionService: AuthentionServiceProvider,
    private loading: LoadingController,
    public translate: TranslateService,
    public navParams: NavParams,
    private builder: FormBuilder
  ) {
    this.translate.get(["pleaseWait"]).subscribe(res => {
      this.pleaseWait = res.pleaseWait;
    });
    this.myForm = this.builder.group({
      phonenumber: ["", Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ForgetpasswordPage");
  }

  GoToResetPassword() {
    this.navCtrl.push("ResetpasswordPage");
  }
  forgetpassword() {
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.AuthentionService.forgetPassword(this.phoneNumber).subscribe(
      data => {
        // sessionData.singinSaveData(this.phoneNumber, "", "");

        localStorage.setItem("phoneNum", this.phoneNumber);
        this.navCtrl.push("ResetpasswordPage");
        loading.dismiss();
      },
      error => {
        // console.log(JSON.parse(error._body));

        // Username or Password incorrect
        if (JSON.parse(error._body).errorCode == "4000") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4001") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4002") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4003") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4004") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4005") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4006") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4007") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4009") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4010") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4011") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4012") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4013") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4014") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4015") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4016") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4018") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4023") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4037") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4041") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4043") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4044") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "1013") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "3004") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "3009") {
          this.presentToast(JSON.parse(error._body).message);
        }
        loading.dismiss();
      }
    );
  }
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      cssClass: "ErrorToast"
    });
    toast.present();
  }

  hasError(field: string, error: string) {
    const ctrl = this.myForm.get(field);
    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }
}
