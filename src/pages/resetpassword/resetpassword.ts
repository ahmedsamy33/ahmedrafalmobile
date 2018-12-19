import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController
} from "ionic-angular";
import { sessionData } from "../../app/session-data";
import { TranslateService } from "@ngx-translate/core";
import { AuthentionServiceProvider } from "../../providers/authention-service/authention-service";

/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-resetpassword",
  templateUrl: "resetpassword.html"
})
export class ResetpasswordPage {
  private passwordTypeStyle: string;
  private passwordTypeStyle2: string;

  private codeNumber: string = null;
  private Password: string = null;
  private resetPassword: string = null;

  public pleaseWait: string = null;
  myForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    private AuthentionService: AuthentionServiceProvider,
    private loading: LoadingController,
    public translate: TranslateService,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    private builder: FormBuilder
  ) {
    // Validators.pattern('/^.*(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/')
    this.myForm = this.builder.group({
      codenumber: ["", Validators.compose([Validators.required])],

      password: ["", [Validators.required]],
      resetpassword: ["", [Validators.required]]
    });
    this.translate.get(["pleaseWait"]).subscribe(res => {
      this.pleaseWait = res.pleaseWait;
    });
  }

  ionViewDidLoad() {
    console.log(
      "ionViewDidLoad ResetpasswordPage",
      sessionData.signupData.userName
    );
  }

  ionViewWillEnter() {
    this.passwordTypeStyle = "password";
    this.passwordTypeStyle2 = "password";
  }

  resetpassowrd() {
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();

    let getUserPhone = localStorage.getItem("phoneNum");
    console.log(getUserPhone);

    this.AuthentionService.requestForgetPassword(
      this.codeNumber,
      getUserPhone,
      this.Password
    ).subscribe(
      data => {
        // sessionData.saveDataInLocalStorage(data);
        this.navCtrl.setRoot("LoginPage");
        localStorage.removeItem("phoneNum");
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
    // console.log(sessionData.signupData.userName);
    let getUserPhone = localStorage.getItem("phoneNum");
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.AuthentionService.ResendCode(getUserPhone).subscribe(
      data => {
        this.translate.get(["codeSend"]).subscribe(res => {
          this.presentToast(res.codeSend);
        });

        loading.dismiss();
      },
      error => {
        // console.log(error._body);

        // Username or Password incorrect
        if (JSON.parse(error._body).errorCode == "4009") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4004") {
          this.presentToast(JSON.parse(error._body).message);
        }
        loading.dismiss();
      }
    );
  }
}
