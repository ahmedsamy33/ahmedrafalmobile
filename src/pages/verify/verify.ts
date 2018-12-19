import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController
} from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthentionServiceProvider } from "../../providers/authention-service/authention-service";
import { TranslateService } from "@ngx-translate/core";
import { sessionData } from "../../app/session-data";
import { settings } from "../../app/settings";
import { MyApp } from "../../app/app.component";
import { Device } from "@ionic-native/device";

/**
 * Generated class for the VerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-verify",
  templateUrl: "verify.html"
})
export class VerifyPage {
  private Code: string = null;
  public browerType: string;
  public osType: string;
  myForm: FormGroup;
  public pleaseWait: string = null;
  public code: string = null;
  public getSignupData = {
    userName: "",
    password: "",
    countryPhoneCode: ""
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService,
    private loading: LoadingController,
    public toastCtrl: ToastController,
    public AuthentionService: AuthentionServiceProvider,
    private builder: FormBuilder,
    public app: MyApp,
    private device: Device
  ) {
    this.myForm = this.builder.group({
      code: [
        "",
        Validators.compose([Validators.required, Validators.minLength(8)])
      ]
    });

    this.translate.get(["pleaseWait"]).subscribe(res => {
      this.pleaseWait = res.pleaseWait;
    });

    this.browerType = this.device.manufacturer + " / " + this.device.model;
    this.osType = this.device.platform + " - " + this.device.version;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad VerifyPage");
  }
  ionViewWillEnter() {
    let data = JSON.parse(localStorage.getItem("userSignupData"));
    this.getSignupData = data;
  }
  verfiy() {
    let lang = localStorage.getItem("lang");
    if (lang == "english") {
      lang = "English";
    } else {
      lang = "Arabic";
    }
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.AuthentionService.userVerifyCode(
      this.Code,
      this.getSignupData.userName,
      this.getSignupData.password,
      lang,
      this.browerType,
      this.osType,
      this.getSignupData.countryPhoneCode
    ).subscribe(
      data => {
        // sessionData.signupData.nationalId
        sessionData.saveDataInLocalStorage(data);
        this.navCtrl.setRoot("HomePage");
        // console.log("ddddd", data.userDetails.picture_url);
        if (data.userDetails.picture_url != null) {
          this.app.ImageURL = settings.imageUrl + data.userDetails.picture_url;
        } else {
          this.app.ImageURL = null;
        }
        localStorage.removeItem("userSignupData");
        loading.dismiss();
      },
      error => {
        // console.log(JSON.parse(error._body));

        // Username or Password incorrect
        if (JSON.parse(error._body).errorCode == "4009") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4014") {
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

  resendCode() {
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.AuthentionService.ResendCode(this.getSignupData.userName).subscribe(
      data => {
        this.translate.get(["codeSend"]).subscribe(res => {
          this.presentToast(res.codeSend);
        });

        loading.dismiss();
      },
      error => {
        // console.log(error._body);

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
}
