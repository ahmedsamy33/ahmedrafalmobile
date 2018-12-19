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
// import { AuthentionServiceProvider } from '../../providers/authention-service/authention-service';
import { SharedServiceProvider } from "../../providers/shared-service/shared-service";
import { UserprofileProvider } from "../../providers/userprofile/userprofile";

/**
 * Generated class for the HiringLaborersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-hiring-laborers",
  templateUrl: "hiring-laborers.html"
})
export class HiringLaborersPage {
  public jobTitle = [];
  public RegionArr = [];

  private Active: string = null;
  private Job: string = null;
  private Region: string = null;
  private Age: string = null;
  private Skills: string = null;
  private NoYears: string = null;
  private DailyHours: string = null;
  private Salary: string = null;
  private StatusOfVisa: string = null;
  private RequireQualification: string = null;
  private Others: string = null;

  public pleaseWait: string = null;
  public ageFlag: boolean;
  public dayFlag: boolean;
  public NOYears: boolean;
  hiringForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private builder: FormBuilder,
    public toastCtrl: ToastController,
    private SharedService: SharedServiceProvider,
    private usergetpicklist: UserprofileProvider,
    private loading: LoadingController,
    public translate: TranslateService
  ) {
    this.hiringForm = this.builder.group({
      active: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('^[a-zA-Z]+$')]
      ],
      job: ["", Validators.required],
      region: ["", Validators.required],
      age: [
        "",
        [
          Validators.required,
          Validators.maxLength(2)
          // Validators.pattern("^d+$")
        ]
      ],
      skills: ["", Validators.required],
      noYears: [
        "",
        [Validators.required, Validators.minLength(1), Validators.maxLength(4)]
      ],
      dailyHours: ["", Validators.required],
      salary: ["", [Validators.required, Validators.minLength(3)]],
      statusOfVisa: ["", Validators.required],
      requireQualification: ["", Validators.required],
      others: [""]
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
    this.usergetpicklist.getPickListCCJ("Job_Title", lang).subscribe(
      data => {
        // console.log(data[0].code);
        this.jobTitle = data;
        this.Job = this.jobTitle[0].code;
      },
      error => { }
    );

    this.usergetpicklist.getPickListRegion("EGY", lang).subscribe(
      data => {
        // console.log("ddd", data);
        this.RegionArr = data;
        this.Region = this.RegionArr[0].code;
      },
      error => { }
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HiringLaborersPage");
  }

  hiringService() {
    let data = {
      activity: this.Active,
      region: this.Region,
      jobTitleCode: this.Job,
      age: this.Age,
      yearsOfExperience: this.NoYears,
      visaStatus: this.StatusOfVisa,
      dailyWorkHours: this.DailyHours,
      salary: this.Salary,
      requiredQualifications: this.RequireQualification,
      skills: this.Skills,
      other: this.Others
    };
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.SharedService.hiringService(data).subscribe(
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
    const ctrl = this.hiringForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }

  // cal age
  calAge() {
    if (parseInt(this.Age) > 17 && parseInt(this.Age) <= 70 && parseInt(this.Age) != 0) {
      this.ageFlag = false;
    } else {
      this.ageFlag = true;
    }
  }
  calDayHour() {
    if (parseInt(this.DailyHours) > 16 || parseInt(this.DailyHours) == 0) {
      this.dayFlag = true;
    } else {
      this.dayFlag = false;
    }
  }

  calNOYears() {
    if (parseInt(this.NoYears) <= 0) {
      this.NOYears = true;
    } else {
      this.NOYears = false;
    }
  }

}
