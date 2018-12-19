import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  ToastController,
  Platform
} from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SharedServiceProvider } from "../../providers/shared-service/shared-service";
import { UserprofileProvider } from "../../providers/userprofile/userprofile";
import { TranslateService } from "@ngx-translate/core";
import { File, FileEntry } from "@ionic-native/file";
import { FileTransfer } from "@ionic-native/file-transfer";
import { FilePath } from "@ionic-native/file-path";
import { Camera } from "@ionic-native/camera";

@IonicPage()
@Component({
  selector: "upgradeAccount-page",
  templateUrl: "upgradeAccount.html"
})
export class UpgradeAccountPage {
  // inStepOne: boolean = true;
  public pleaseWait: string = null;
  public CompanyArr = [];
  public RegionArr = [];
  public RegionArr2 = [];
  // picklists
  public countryArrStab = [];
  public countryArrNew = [];
  public CompanyArrInter = [];

  // variable for stablish form
  public countryEstablish: string = null;
  public companyEstablish: string = null;
  public websiteEstablish: string = null;
  // public adminNameEstablish: string = null;
  public expireDateEstablish: string = null;
  // public crNumberEstablish: string = null;
  public emailEstablish: string = null;
  stapForm: FormGroup;

  // variable for investor form
  public countryArrNewInvestor: string = null;
  // public yourNameNew: string = null;
  public InvestmentTypeNew: string = null;
  public CaptialNew: string = null;
  public CountryNewWantToVisit: string = null;
  public emailNew: string = null;
  InvestorForm: FormGroup;

  // variable for internal form
  public CompanyArrInternalShip: string = null;
  public companyNameInternal: string = null;
  public websiteInternal: string = null;
  public activityInternal: string = null;
  public countryYounWantInternal: string = null;
  // public crNumberInternal: string = null;
  public emailInternal: string = null;
  companyForm: FormGroup;

  // picture image
  public file2: string = "";
  public file3: string = "";

  public picname2: string = "";
  public picname3: string = "";

  public imageBlob2: any;
  public imageBlob3: any;

  public path2: string = "";
  public path3: string = "";

  public upgradeTo: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private builder: FormBuilder,
    private SharedService: SharedServiceProvider,
    private usergetpicklist: UserprofileProvider,
    public toastCtrl: ToastController,
    private loading: LoadingController,
    public translate: TranslateService,
    private camera: Camera,
    private FileTransfer: FileTransfer,
    private file: File,
    private filePath: FilePath,
    public platform: Platform
  ) {
    this.stapForm = this.builder.group({
      countryestablish: ["", Validators.required],
      companyestablish: ["", [Validators.required, Validators.maxLength(30)]],
      websiteestablish: ["", [Validators.required, Validators.maxLength(30)]],
      // adminNameestablish: ["", Validators.required],
      expireDateestablish: ["", Validators.required],
      // crnumberestablish: ["", Validators.required],
      emailestablish: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
          ),
          Validators.maxLength(30)
        ])
      ]
    });

    this.InvestorForm = this.builder.group({
      countryArrNewInvestor: ["", Validators.required],
      // yournameNew: ["", Validators.required],
      investmentTypeNew: ["", [Validators.required, Validators.maxLength(30)]],
      captialNew: ["", [Validators.required, Validators.minLength(4)]],
      countryNewWantToVisit: ["", Validators.required],
      emailnew: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
          ),
          Validators.maxLength(30)
        ])
      ]
    });

    this.companyForm = this.builder.group({
      CompanyarrinternalShip: ["", Validators.required],
      companynameInternal: [
        "",
        [Validators.required, Validators.maxLength(30)]
      ],
      websiteinternal: ["", Validators.required],
      activityinternal: ["", [Validators.required, Validators.maxLength(30), Validators.pattern('^[a-zA-Z]+$')]],
      countryYounWantinternal: ["", Validators.required],
      // crNumberinternal: ["", Validators.required],
      emailinternal: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
          ),
          Validators.maxLength(30)
        ])
      ]
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
        this.countryArrStab = data;
        this.countryArrNew = data;
        this.CompanyArrInter = data;
        this.RegionArr = data;
      },
      error => { }
    );

    this.usergetpicklist.getPickListCCJ("Company", lang).subscribe(
      data => {
        this.CompanyArr = data;
        this.upgradeTo = this.CompanyArr[0].code;
      },
      error => { }
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UpgradeAccountPage");
  }

  // get region for new
  // getRegionValue() {
  //   let lang = localStorage.getItem("lang");
  //   if (lang == "english") {
  //     lang = "English";
  //   } else {
  //     lang = "Arabic";
  //   }
  //   this.RegionArr = [];
  //   this.CountryNewWantToVisit = "";
  //   if (this.countryArrNewInvestor != null) {
  //     let loading = this.loading.create({ content: this.pleaseWait });
  //     loading.present();
  //     this.usergetpicklist
  //       .getPickListRegion(this.countryArrNewInvestor, lang)
  //       .subscribe(
  //         data => {
  //           this.RegionArr = data;
  //           loading.dismiss();
  //         },
  //         error => {
  //           loading.dismiss();
  //         }
  //       );
  //   }
  // }

  // get region for new
  getRegionValue2() {
    let lang = localStorage.getItem("lang");
    if (lang == "english") {
      lang = "English";
    } else {
      lang = "Arabic";
    }
    this.RegionArr2 = [];
    this.countryYounWantInternal = "";
    if (this.CompanyArrInternalShip != null) {
      let loading = this.loading.create({ content: this.pleaseWait });
      loading.present();
      this.usergetpicklist
        .getPickListRegion(this.CompanyArrInternalShip, lang)
        .subscribe(
          data => {
            this.RegionArr2 = data;
            // console.log(this.RegionArr2);
            loading.dismiss();
          },
          error => {
            loading.dismiss();
          }
        );
    }
  }
  // stablish From
  Established() {
    // console.log(this.stapForm);
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    let data = {
      companyName: this.companyEstablish,
      countryCode: this.countryEstablish,
      investmentCountryCode: "",
      websiteLink: this.websiteEstablish,
      investnentType: "",
      type: this.upgradeTo,
      expireDate: this.expireDateEstablish,
      capital: "",
      mail: this.emailEstablish
    };

    this.SharedService.companyupgradeservices(data).subscribe(
      data => {
        // console.log(data.id);

        this.SharedService.UploadCompanyCR(this.imageBlob2, data.id).subscribe(
          data => {
            // console.log(data);
            loading.dismiss();
            this.navCtrl.pop();
          },
          error => {
            // console.log(error);
            loading.dismiss();
          }
        );
      },
      error => {
        // console.log(error);
        loading.dismiss();
      }
    );
  }
  // Investor form
  Investor() {
    // console.log(this.InvestorForm);
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    let data = {
      companyName: "",
      countryCode: this.InvestmentTypeNew,
      investmentCountryCode: this.CountryNewWantToVisit,
      websiteLink: "",
      investnentType: this.InvestmentTypeNew,
      type: this.upgradeTo,
      expireDate: null,
      capital: this.CaptialNew,
      mail: this.emailNew
    };

    this.SharedService.companyupgradeservices(data).subscribe(
      data => {
        // console.log(data.id);
        loading.dismiss();
        this.navCtrl.pop();
      },
      error => {
        // console.log(error);
        loading.dismiss();
      }
    );
  }

  // inter compny form
  International() {
    // console.log(this.companyForm);
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    let data = {
      companyName: this.companyNameInternal,
      countryCode: this.CompanyArrInternalShip,
      investmentCountryCode: this.countryYounWantInternal,
      websiteLink: this.websiteInternal,
      investnentType: this.activityInternal,
      type: this.upgradeTo,
      expireDate: null,
      capital: "",
      mail: this.emailInternal
    };
    this.SharedService.companyupgradeservices(data).subscribe(
      data => {
        // console.log(data.id);
        this.SharedService.UploadCompanyCR(this.imageBlob3, data.id).subscribe(
          data => {
            // console.log(data);
            loading.dismiss();
            this.navCtrl.pop();
          },
          error => {
            console.log(error);
            loading.dismiss();
          }
        );
      },
      error => {
        console.log(error);
        loading.dismiss();
      }
    );
  }

  // take image 2
  public takePicture2(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 70,

      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    // Get the data of an image
    this.camera.getPicture(options).then(
      imagePath => {
        // Special handling for Android library
        this.file2 = imagePath;
        this.uploadImage(2);

        if (
          this.platform.is("android") &&
          sourceType === this.camera.PictureSourceType.PHOTOLIBRARY
        ) {
          this.filePath.resolveNativePath(imagePath).then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf("/") + 1);
            let currentName = imagePath.substring(
              imagePath.lastIndexOf("/") + 1,
              imagePath.lastIndexOf("?")
            );
            this.picname2 = currentName;
            this.path2 = filePath;
            // this.correctPath = correctPath;
          });
        } else {
          var currentName = imagePath.substr(imagePath.lastIndexOf("/") + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf("/") + 1);

          // this.picname = currentName;
          // this.path = filePath;
          // this.correctPath = correctPath;
        }
      },
      err => {
        // this.presentToast("Error while selecting image.");
        this.file2 = "";
        // this.correctPath = '';
        this.picname2 = "";
        this.path2 = "";
      }
    );
  }

  // take image 3
  public takePicture3(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 70,

      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    // Get the data of an image
    this.camera.getPicture(options).then(
      imagePath => {
        // Special handling for Android library
        this.file3 = imagePath;
        this.uploadImage(3);

        if (
          this.platform.is("android") &&
          sourceType === this.camera.PictureSourceType.PHOTOLIBRARY
        ) {
          this.filePath.resolveNativePath(imagePath).then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf("/") + 1);
            let currentName = imagePath.substring(
              imagePath.lastIndexOf("/") + 1,
              imagePath.lastIndexOf("?")
            );
            this.picname3 = currentName;
            this.path3 = filePath;
            // this.correctPath = correctPath;
          });
        } else {
          var currentName = imagePath.substr(imagePath.lastIndexOf("/") + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf("/") + 1);

          // this.picname = currentName;
          // this.path = filePath;
          // this.correctPath = correctPath;
        }
      },
      err => {
        // this.presentToast("Error while selecting image.");
        this.file3 = "";
        // this.correctPath = '';
        this.picname3 = "";
        this.path3 = "";
      }
    );
  }

  // upload
  public uploadImage(para) {
    if (para == 2) {
      this.file
        .resolveLocalFilesystemUrl(this.file2)
        .then(entry =>
          (<FileEntry>entry).file(file => {
            // console.log("file local ", file);

            this.readfile2(file);
          })
        )
        .catch(err => this.presentToast("err " + err));
    } else if (para == 3) {
      this.file
        .resolveLocalFilesystemUrl(this.file3)
        .then(entry =>
          (<FileEntry>entry).file(file => {
            this.readfile3(file);
          })
        )
        .catch(err => this.presentToast("err " + err));
    }
  }

  // read form mobile2
  public readfile2(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const imgBlob = new Blob([reader.result], { type: file.type });
      this.imageBlob2 = imgBlob;
    };
    reader.readAsArrayBuffer(file);
  }

  // read form mobile3
  public readfile3(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const imgBlob = new Blob([reader.result], { type: file.type });
      this.imageBlob3 = imgBlob;
    };
    reader.readAsArrayBuffer(file);
  }
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      cssClass: 'ErrorToast'
    });
    toast.present();
  }

  hasError(field: string, error: string, form) {
    const ctrl = this.stapForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }
  hasError2(field: string, error: string, form) {
    const ctrl = this.InvestorForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }
  hasError3(field: string, error: string, form) {
    const ctrl = this.companyForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }
}
