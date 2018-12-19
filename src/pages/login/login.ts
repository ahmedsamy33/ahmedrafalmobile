import { AuthentionServiceProvider } from "./../../providers/authention-service/authention-service";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController
} from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { sessionData } from "../../app/session-data";
import { MyApp } from "../../app/app.component";
import { settings } from "../../app/settings";
import { Device } from "@ionic-native/device";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  private Password: string = null;
  private passwordTypeStyle: string;

  private phoneNumber: string = null;
  public pleaseWait: string = null;

  public getcountriescodes = [];
  public countryPhoneCode: any;

  myForm: FormGroup;

  public browerType: string;
  public osType: string;
  public uuid: string;
  public language: string;
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    private builder: FormBuilder,
    private AuthentionService: AuthentionServiceProvider,
    private loading: LoadingController,
    public translate: TranslateService,
    public app: MyApp,
    private device: Device
  ) {
    this.myForm = this.builder.group({
      // 'username': ['', [Validators.required, Validators.minLength(11), Validators.pattern('^01[0-2]{1}[0-9]{8}$')]],
      phonenumber: ["", Validators.compose([Validators.required])],

      password: ["", Validators.required],
      countryphoneCode: ["", Validators.required]
    });
    this.translate.get(["pleaseWait"]).subscribe(res => {
      this.pleaseWait = res.pleaseWait;
    });

    this.browerType = this.device.manufacturer + " / " + this.device.model;
    this.osType = this.device.platform + " - " + this.device.version;
    this.uuid = this.device.uuid;

    this.language = localStorage.getItem("lang");
    // console.log(this.language);

    // let idnumber = JSON.parse(localStorage.getItem("nationalId"));

    // console.log("ddddd   fffff   ", idnumber);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.AuthentionService.getcountriesphpicklistcodes().subscribe(
      data => {
        // console.log(data);
        this.getcountriescodes = data;
        this.countryPhoneCode = this.getcountriescodes[0];
        loading.dismiss();
      },
      error => {
        loading.dismiss();
      }
    );
  }

  ionViewWillEnter() {
    this.passwordTypeStyle = "password";
  }

  ChangePasswordStyle(PasswordStyle) {
    if (PasswordStyle === "text") {
      this.passwordTypeStyle = "text";
    } else if (PasswordStyle === "password") {
      this.passwordTypeStyle = "password";
    }
  }

  openPage(pageName) {
    this.navCtrl.push(pageName);
  }

  login() {
    //////////////////////////////// in side /////////////////////////////////////////////////
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
    this.AuthentionService.userLogin(
      this.phoneNumber,
      this.Password,
      lang,
      this.countryPhoneCode,
      this.browerType,
      this.osType,
      this.uuid
    ).subscribe(
      data => {
        sessionData.saveDataInLocalStorage(data);
        // console.log("ddddd", data.userDetails.picture_url);
        this.app.userData.is_log = true;
        if (data.userDetails.picture_url != null) {
          this.app.ImageURL = settings.imageUrl + data.userDetails.picture_url;
        } else {
          this.app.ImageURL = null;
        }
        this.navCtrl.setRoot("HomePage");
        loading.dismiss();
      },
      error => {
        // console.log(JSON.parse(error._body));

        // Username or Password incorrect
        if (JSON.parse(error._body).errorCode == "4000") {
          sessionData.singinSaveData(
            this.phoneNumber,
            this.Password,
            this.countryPhoneCode
          );
          this.navCtrl.setRoot("VerifyPage");
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
    return ctrl.dirty && ctrl.hasError(error);
  }

  changeLang(lang) {
    let langLocal = localStorage.getItem("lang");
    if (langLocal != lang) {
      this.language = langLocal;

      if (lang == "english") {
        this.translate.use("english");
      } else {
        this.translate.use("arabic");
      }

      localStorage.setItem("lang", lang);
    }
  }
}
