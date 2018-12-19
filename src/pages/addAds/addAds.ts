import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController,
  Platform
} from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SharedServiceProvider } from "../../providers/shared-service/shared-service";
import { UserprofileProvider } from "../../providers/userprofile/userprofile";
import { TranslateService } from "@ngx-translate/core";
import { File, FileEntry } from "@ionic-native/file";
import { FileTransfer } from "@ionic-native/file-transfer";
import { FilePath } from "@ionic-native/file-path";
import { Camera } from "@ionic-native/camera";
@IonicPage()
@Component({
  selector: "addAds-page",
  templateUrl: "addAds.html"
})
export class AddAdsPage {
  // inStepOne: boolean = true;
  public pleaseWait: string = null;
  public jobTitle = [];

  private Job: string = null;
  public Discription: string = null;
  addadvertismentForm: FormGroup;

  // picture image
  public file2: string = "";

  public picname2: string = "";

  public imageBlob2: any;

  public path2: string = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private builder: FormBuilder,
    public toastCtrl: ToastController,
    private SharedService: SharedServiceProvider,
    private usergetpicklist: UserprofileProvider,
    private loading: LoadingController,
    public translate: TranslateService,
    private camera: Camera,
    private FileTransfer: FileTransfer,
    private file: File,
    private filePath: FilePath,
    public platform: Platform
  ) {
    this.addadvertismentForm = this.builder.group({
      job: ["", Validators.required],
      discription: ["", Validators.required]
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
      },
      error => { }
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddAdsPage");
  }
  // add service
  addAdvertsService() {
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.SharedService.addAdvertisment(
      this.imageBlob2,
      this.Job,
      this.Discription
    ).subscribe(
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

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      cssClass: 'ErrorToast'
    });
    toast.present();
  }
  hasError(field: string, error: string) {
    const ctrl = this.addadvertismentForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }
}
