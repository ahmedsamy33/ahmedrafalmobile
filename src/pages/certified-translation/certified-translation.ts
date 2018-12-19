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
  selector: "page-certified-translation",
  templateUrl: "certified-translation.html"
})
export class CertifiedTranslationPage {
  private TypeOfTranslate: string = null;
  private ToLang: string = null;
  private ResponsibleOfRecieving: string = null;

  private Others: string = null;
  public pleaseWait: string = null;
  certifiedForm: FormGroup;
  public file2: string = "";

  public picname2: string = "";

  public imageBlob2: any;
  public fileExtension: string = "";

  public path2: string = "";
  public arrayLang = [];
  public arrayTypeLang = [];
  constructor(
    public navCtrl: NavController,
    private builder: FormBuilder,
    public toastCtrl: ToastController,
    private SharedService: SharedServiceProvider,
    private loading: LoadingController,
    public translate: TranslateService,
    // private camera: Camera,
    // private FileTransfer: FileTransfer,
    private file: File,
    private filePath: FilePath,
    private fileChooser: FileChooser, // public platform: Platform,
    private userProfile: UserprofileProvider
  ) {
    this.certifiedForm = this.builder.group({
      typeOfTranslate: ["", Validators.required],
      toLang: ["", Validators.required],
      responsibleOfRecieving: [
        "",
        [Validators.required, Validators.maxLength(120)]
      ],
      others: [""]
    });
    this.translate.get(["pleaseWait"]).subscribe(res => {
      this.pleaseWait = res.pleaseWait;
    });
    let langLocal = localStorage.getItem("lang");
    if (langLocal == "english") {
      langLocal = "English";
    } else {
      langLocal = "Arabic";
    }

    this.userProfile.getPickListCCJ("Language", langLocal).subscribe(
      data => {
        this.arrayLang = data;
        this.ToLang = this.arrayLang[0].code;
      },
      error => {
        console.log(error);
      }
    );
    this.userProfile.getPickListCCJ("Translation_Type", langLocal).subscribe(
      data => {
        this.arrayTypeLang = data;
        this.TypeOfTranslate = this.arrayTypeLang[0].code;
      },
      error => {
        console.log(error);
      }
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CertifiedTranslationPage");
  }

  Certified() {
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.SharedService.CertifiedService(
      this.TypeOfTranslate,
      this.ToLang,
      this.ResponsibleOfRecieving,
      this.Others,
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
          // console.log("filePath : ", filePath);

          // console.log("name : ", this.picname2);

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
    const ctrl = this.certifiedForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }
}
