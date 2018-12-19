import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController
} from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SharedServiceProvider } from "../../providers/shared-service/shared-service";
import { TranslateService } from "@ngx-translate/core";
import { FileChooser } from "@ionic-native/file-chooser";
import { File, FileEntry } from "@ionic-native/file";
// import { FileTransfer } from "@ionic-native/file-transfer";
import { FilePath } from "@ionic-native/file-path";
import { UserprofileProvider } from "../../providers/userprofile/userprofile";
// import { Camera } from "@ionic-native/camera";
@IonicPage()
@Component({
  selector: "page-employment",
  templateUrl: "employment.html"
})
export class EmploymentPage {
  private Activity: string = null;
  private job: string = null;
  private Salary: string = null;
  // private Others: string = null;

  public pleaseWait: string = null;

  employmentForm: FormGroup;
  public file2: string = "";

  public picname2: string = "";

  public imageBlob2: any;

  public path2: string = "";
  public fileExtension: string = "";
  public jobTitle = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private builder: FormBuilder,
    private SharedService: SharedServiceProvider,
    private loading: LoadingController,
    public translate: TranslateService,
    private fileChooser: FileChooser,
    // private camera: Camera,
    // private FileTransfer: FileTransfer,
    private usergetpicklist: UserprofileProvider,
    private file: File,
    private filePath: FilePath // public platform: Platform
  ) {
    this.employmentForm = this.builder.group({
      activity: ["", [Validators.required, Validators.maxLength(30), Validators.pattern('^[a-zA-Z]+$')]],
      job: ["", Validators.required],
      salary: ["", [Validators.required, Validators.minLength(3)]],
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
      },
      error => { }
    );
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad EmploymentPage");
  }

  employmentService() {
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.SharedService.EmploymentService(
      this.Activity,
      this.job,
      this.Salary,
      this.fileExtension,
      this.imageBlob2
    ).subscribe(
      data => {
        this.navCtrl.pop();
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

  // public fileName: string;
  openFile() {
    this.file2 = "";
    // this.correctPath = '';
    this.picname2 = "";
    this.path2 = "";
    this.fileChooser
      .open()
      .then(uri => {
        this.file2 = uri;
        this.uploadImage(2);

        this.filePath.resolveNativePath(uri).then(filePath => {
          let correctPath = filePath.substr(0, filePath.lastIndexOf("/") + 1);
          let currentName = filePath.substring(
            filePath.lastIndexOf("/") + 1,
            filePath.length
          );
          this.picname2 = currentName;
          this.path2 = filePath;
          this.fileExtension = currentName.substr(
            currentName.lastIndexOf(".") + 1
          );
          // this.correctPath = correctPath;
        });
      })
      .catch(e => {
        // console.log(e);
        this.file2 = "";
        // this.correctPath = '';
        this.picname2 = "";
        this.path2 = "";
      });
  }

  // // take image 2
  // public takePicture2(sourceType) {
  //   // Create options for the Camera Dialog
  //   var options = {
  //     quality: 70,

  //     sourceType: sourceType,
  //     saveToPhotoAlbum: false,
  //     correctOrientation: true
  //   };

  //   // Get the data of an image
  //   this.camera.getPicture(options).then(
  //     imagePath => {
  //       // Special handling for Android library
  //       this.file2 = imagePath;
  //       this.uploadImage(2);

  //       if (
  //         this.platform.is("android") &&
  //         sourceType === this.camera.PictureSourceType.PHOTOLIBRARY
  //       ) {
  //         this.filePath.resolveNativePath(imagePath).then(filePath => {
  //           let correctPath = filePath.substr(0, filePath.lastIndexOf("/") + 1);
  //           let currentName = imagePath.substring(
  //             imagePath.lastIndexOf("/") + 1,
  //             imagePath.lastIndexOf("?")
  //           );
  //           this.picname2 = currentName;
  //           this.path2 = filePath;
  //           // this.correctPath = correctPath;
  //         });
  //       } else {
  //         var currentName = imagePath.substr(imagePath.lastIndexOf("/") + 1);
  //         var correctPath = imagePath.substr(0, imagePath.lastIndexOf("/") + 1);

  //         // this.picname = currentName;
  //         // this.path = filePath;
  //         // this.correctPath = correctPath;
  //       }
  //     },
  //     err => {
  //       // this.presentToast("Error while selecting image.");
  //       this.file2 = "";
  //       // this.correctPath = '';
  //       this.picname2 = "";
  //       this.path2 = "";
  //     }
  //   );
  // }

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
  hasError(field: string, error: string) {
    const ctrl = this.employmentForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }
}
