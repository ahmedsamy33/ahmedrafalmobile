import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  ToastController
} from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SharedServiceProvider } from "../../providers/shared-service/shared-service";

@IonicPage()
@Component({
  selector: "page-office-services",
  templateUrl: "office-services.html"
})
export class OfficeServicesPage {
  private Address: string = null;
  private RentingOffices: string = null;
  private OfficeFurniture: string = null;
  private Devices: string = null;
  private Cameras: string = null;
  private Inks: string = null;
  private Papers: string = null;
  private WebDesign: string = null;
  private DMarketing: string = null;
  private Others: string = null;

  public pleaseWait: string = null;

  OfficeForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private SharedService: SharedServiceProvider,
    private builder: FormBuilder,
    private loading: LoadingController,
    public translate: TranslateService
  ) {
    this.OfficeForm = this.builder.group({
      address: ["", [Validators.required, Validators.maxLength(120)]],
      rentingOffices: ["", [Validators.required, Validators.maxLength(120)]],
      officeFurniture: ["", [Validators.required, Validators.maxLength(120)]],
      devices: ["", [Validators.required, Validators.maxLength(120)]],
      cameras: ["", [Validators.required, Validators.maxLength(120)]],
      inks: ["", [Validators.required, Validators.maxLength(120)]],
      papers: ["", [Validators.required, Validators.maxLength(120)]],
      webDesign: ["", [Validators.required, Validators.maxLength(120)]],
      dMarketing: ["", [Validators.required, Validators.maxLength(120)]],
      others: [""]
    });
    this.translate.get(["pleaseWait"]).subscribe(res => {
      this.pleaseWait = res.pleaseWait;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad OfficeServicesPage");
  }
  OfficeService() {
    let data = {
      address: this.Address,
      rentingOffices: this.RentingOffices,
      officeFurnuture: this.OfficeFurniture,
      devices: this.Devices,
      cameras: this.Cameras,
      inks: this.Inks,
      papers: this.Papers,
      webDesigns: this.WebDesign,
      degitalMarketting: this.DMarketing,
      other: this.Others
    };
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.SharedService.officeserv(data).subscribe(
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
  hasError(field: string, error: string) {
    const ctrl = this.OfficeForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }
}
