import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController,
  Platform
} from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SharedServiceProvider } from "../../providers/shared-service/shared-service";
import { TranslateService } from "@ngx-translate/core";
import { FilePath } from "@ionic-native/file-path";
import { FileTransfer } from "@ionic-native/file-transfer";
import { Camera } from "@ionic-native/camera";
import { File, FileEntry } from "@ionic-native/file";
@IonicPage()
@Component({
  selector: "page-trading-agencies",
  templateUrl: "trading-agencies.html"
})
export class TradingAgenciesPage {
  public file1: string = "";

  public picname1: string = "";

  public imageBlob1: any;

  private Activity: string = null;
  private RequiredBrand: string = null;
  private Location: string = null;
  private ProductDescription: string = null;
  private Others: string = null;

  public pleaseWait: string = null;

  tradingForm: FormGroup;

  public path1: string = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private builder: FormBuilder,
    private SharedService: SharedServiceProvider,
    private loading: LoadingController,
    public translate: TranslateService,
    private camera: Camera,
    private FileTransfer: FileTransfer,
    private file: File,
    private filePath: FilePath,
    public platform: Platform
  ) {
    this.tradingForm = this.builder.group({
      activity: ["", [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z]+$')]],
      requiredBrand: ["", [Validators.required, Validators.maxLength(50)]],
      location: ["", [Validators.required, Validators.maxLength(120)]],
      productDescription: [
        "",
        [Validators.required, Validators.maxLength(120)]
      ],
      others: [""]
    });

    this.translate.get(["pleaseWait"]).subscribe(res => {
      this.pleaseWait = res.pleaseWait;
    });
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad TradingAgenciesPage");
  }

  tradingService() {
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.SharedService.TradingagencyService(
      this.Activity,
      this.RequiredBrand,
      this.ProductDescription,
      this.Location,
      this.Others,
      this.imageBlob1
    ).subscribe(
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

  // take image1
  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 70,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
      // allowEdit: true,
      // destinationType: this.camera.DestinationType.DATA_URL,
      // targetWidth: 50,
      // targetHeight: 50
    };

    // Get the data of an image
    this.camera.getPicture(options).then(
      imagePath => {
        // Special handling for Android library
        this.file1 = imagePath;
        this.uploadImage(1);
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
            this.picname1 = currentName;
            this.path1 = filePath;
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
        this.file1 = "";
        // this.correctPath = '';
        this.picname1 = "";
        this.path1 = "";
      }
    );
  }
  // upload
  public uploadImage(para) {
    if (para == 1) {
      this.file
        .resolveLocalFilesystemUrl(this.file1)
        .then(entry =>
          (<FileEntry>entry).file(file => {
            this.readfile1(file);
          })
        )
        .catch(err => this.presentToast("err " + err));
    }
  }

  // read form mobile1
  public readfile1(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const imgBlob = new Blob([reader.result], { type: file.type });
      this.imageBlob1 = imgBlob;
    };
    reader.readAsArrayBuffer(file);
  }
  hasError(field: string, error: string) {
    const ctrl = this.tradingForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }
}
