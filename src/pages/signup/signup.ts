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
import { Device } from "@ionic-native/device";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  private passwordTypeStyle: string;
  private passwordTypeStyle2: string;

  private userName: string = null;
  private phoneNumber: string = null;
  private idNumber: number = null;
  private Password: string = null;
  private confirmPass: string = null;
  public uuid;
  myForm: FormGroup;
  public pleaseWait: string = null;
  public getcountriescodes = [];
  public countryPhoneCode: any;
  public language: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService,
    private loading: LoadingController,
    public toastCtrl: ToastController,
    public AuthentionService: AuthentionServiceProvider,
    private builder: FormBuilder,
    private device: Device
  ) {
    this.myForm = this.builder.group({
      username: [
        "",
        [Validators.required, Validators.minLength(3), Validators.maxLength(30)]
      ],

      phonenumber: ["", Validators.required],
      idnumber: ["", Validators.required],
      password: ["", Validators.required],
      confirmpass: ["", Validators.required],
      countryphoneCode: ["", Validators.required]
    });

    this.translate.get(["pleaseWait"]).subscribe(res => {
      this.pleaseWait = res.pleaseWait;
    });
    this.uuid = this.device.uuid;
    this.language = localStorage.getItem("lang");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignupPage");
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
    this.passwordTypeStyle2 = "password";
  }

  ChangePasswordStyle(PasswordStyle) {
    if (PasswordStyle === "text") {
      this.passwordTypeStyle = "text";
    } else if (PasswordStyle === "password") {
      this.passwordTypeStyle = "password";
    }
  }

  ChangePasswordStyle2(PasswordStyle) {
    if (PasswordStyle === "text") {
      this.passwordTypeStyle2 = "text";
    } else if (PasswordStyle === "password") {
      this.passwordTypeStyle2 = "password";
    }
  }

  // GoToVerify() {
  //   this.navCtrl.push('VerifyPage');
  // }

  signup() {
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.AuthentionService.userSignUp(
      this.phoneNumber,
      this.Password,
      this.userName,
      this.idNumber,
      this.uuid,
      this.countryPhoneCode
    ).subscribe(
      data => {
        sessionData.singinSaveData(
          this.phoneNumber,
          this.Password,
          this.countryPhoneCode
        );
        this.navCtrl.setRoot("VerifyPage");

        loading.dismiss();
      },
      error => {
        // console.log(JSON.parse(error._body));
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
          // sessionData.singinSaveData(this.phoneNumber, this.Password, this.countryPhoneCode);
          this.navCtrl.setRoot("VerifyPage");
          this.presentToast(JSON.parse(error._body).message);
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
