import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  ToastController
} from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { SharedServiceProvider } from "../../providers/shared-service/shared-service";
import { UserprofileProvider } from "../../providers/userprofile/userprofile";

@IonicPage()
@Component({
  selector: "page-feasibility-study",
  templateUrl: "feasibility-study.html"
})
export class FeasibilityStudyPage {
  public countryArr = [];
  public CompanyArr = [];
  public RegionArr = [];

  private Country: string = null;
  private Region: string = null;
  private Address: string = null;
  private Activity: string = null;
  private CompType: string = null;
  private Capital: string = null;

  public pleaseWait: string = null;

  FeasibilityForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private builder: FormBuilder,
    private SharedService: SharedServiceProvider,
    private usergetpicklist: UserprofileProvider,
    public toastCtrl: ToastController,
    private loading: LoadingController,
    public translate: TranslateService
  ) {
    this.FeasibilityForm = this.builder.group({
      country: ["", Validators.required],
      region: ["", Validators.required],
      address: ["", [Validators.required, Validators.maxLength(120)]],
      activity: ["", [Validators.required, Validators.maxLength(30), Validators.pattern('^[a-zA-Z]+$')]],
      compType: ["", Validators.required],
      capital: ["", Validators.required]
    });

    this.translate.get(["pleaseWait"]).subscribe(res => {
      this.pleaseWait = res.pleaseWait;
    });
    let lang = localStorage.getItem("lang");
    if (lang == "english") {
      lang = "English";
    } else {
      lang = "Arabic";
    }
    this.usergetpicklist.getPickListCCJ("Country", lang).subscribe(
      data => {
        this.countryArr = data;
      },
      error => { }
    );
    this.usergetpicklist.getPickListCCJ("Company", lang).subscribe(
      data => {
        this.CompanyArr = data;
      },
      error => { }
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad FeasibilityStudyPage");
  }

  FeasibilityService() {
    let data = {
      countryCode: this.Country,
      companyTypeCode: this.CompType,
      activity: this.Activity,
      detailedAdress: this.Address,
      capitalCurrency: this.Capital,
      province: this.Region
    };
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.SharedService.fesabilitystudy(data).subscribe(
      data => {
        this.navCtrl.setRoot("HomePage");
        loading.dismiss();
      },
      error => {
        // console.log(JSON.parse(error._body));

        // Username or Password incorrect
        if (JSON.parse(error._body).errorCode == "4001") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4000") {
          this.presentToast(JSON.parse(error._body).message);
        } else if (JSON.parse(error._body).errorCode == "4005") {
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
      cssClass: 'ErrorToast'
    });
    toast.present();
  }
  // get region
  getRegionValue() {
    let lang = localStorage.getItem("lang");
    if (lang == "english") {
      lang = "English";
    } else {
      lang = "Arabic";
    }
    this.RegionArr = [];
    this.Region = "";
    if (this.Country != null) {
      let loading = this.loading.create({
        content: this.pleaseWait
      });
      loading.present();
      this.usergetpicklist.getPickListRegion(this.Country, lang).subscribe(
        data => {
          this.RegionArr = data;
          loading.dismiss();
        },
        error => {
          loading.dismiss();
        }
      );
    }
  }
  hasError(field: string, error: string) {
    const ctrl = this.FeasibilityForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }
}
