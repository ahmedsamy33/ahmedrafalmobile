import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController,
  ActionSheetController,
  Platform
} from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthentionServiceProvider } from "../../providers/authention-service/authention-service";
import { TranslateService } from "@ngx-translate/core";
import { sessionData } from "../../app/session-data";
import { File, FileEntry } from "@ionic-native/file";
import {
  FileTransfer,
  FileTransferObject,
  FileUploadOptions
} from "@ionic-native/file-transfer";
import { FilePath } from "@ionic-native/file-path";
import { Camera } from "@ionic-native/camera";
@IonicPage()
@Component({
  selector: "edit-fields-page",
  templateUrl: "edit-fields.html"
})
export class EditFields {
  flag: boolean;

  editForm: FormGroup;

  editFormPass: FormGroup;

  public pleaseWait: string = null;

  public Fullname: string;
  public Oldpass: string;
  public Newpass: string;
  public Confirmnewpass: string;

  lastImage: string = "";

  correctPath: string = "";
  picname: string = "";
  path: string = "";
  imageValue: any;
  public imgBlobprofile;
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    private builder: FormBuilder,
    private AuthentionService: AuthentionServiceProvider,
    private loading: LoadingController,
    public translate: TranslateService,
    private camera: Camera,
    public platform: Platform,
    private FileTransfer: FileTransfer,
    private file: File,
    private filePath: FilePath,
    public actionSheetCtrl: ActionSheetController
  ) {
    this.flag = this.navParams.get("data");

    this.editForm = this.builder.group({
      fullname: ["", Validators.required]
    });

    this.editFormPass = this.builder.group({
      oldpass: ["", Validators.required],
      newpass: ["", Validators.required],
      confirmnewpass: ["", Validators.required]
    });
    this.translate.get(["pleaseWait"]).subscribe(res => {
      this.pleaseWait = res.pleaseWait;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");
  }
  openSettingPage() {
    this.navCtrl.pop();
  }

  changeUserData() {
    // changePassword
    // console.log("data");
  }

  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      // title: "Select Image Source",
      buttons: [
        {
          text: "Select a photo from gallery",
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }
        // {
        //   text: 'Use Camera',
        //   handler: () => {
        //     this.takePicture(this.camera.PictureSourceType.CAMERA);
        //   }
        // },
        // {
        //   text: "Cancel",
        //   role: "cancel"
        // }
      ]
    });
    actionSheet.present();
  }
  public takePicture(sourceType) {
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

        this.imageValue = imagePath;
        this.uploadImage2();
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
            this.picname = currentName;
            this.path = filePath;
            this.correctPath = correctPath;
            // console.log(this.path);
          });
        } else {
          var currentName = imagePath.substr(imagePath.lastIndexOf("/") + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf("/") + 1);

          this.picname = currentName;
          // this.path = filePath;
          this.correctPath = correctPath;
        }
      },
      err => {
        this.presentToast("Error while selecting image.");
        this.imageValue = "";
        this.correctPath = "";
        this.picname = "";
        this.path = "";
      }
    );
  }

  public uploadImage2() {
    this.file
      .resolveLocalFilesystemUrl(this.imageValue)
      .then(entry =>
        (<FileEntry>entry).file(file => {
          this.readfile(file);
          // console.log("readfile ", file);
        })
      )
      .catch(err => this.presentToast("err " + err));
  }

  // Always get the accurate path to your apps folder
  public readfile(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const imgBlob = new Blob([reader.result], { type: file.type });
      this.imgBlobprofile = imgBlob;
    };
    reader.readAsArrayBuffer(file);
  }
  // change image(){}
  changeProfileImage() {
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();

    this.AuthentionService.uploadImage(this.imgBlobprofile).subscribe(
      data => {
        let value: any = JSON.parse(localStorage.getItem("userSessionData"));
        value.userDetails.picture_url = data.imageToken;
        loading.dismiss();

        localStorage.setItem("userSessionData", JSON.stringify(value));
        this.navCtrl.pop();
        this.presentToast("succus to upload image");
      },
      err => {
        loading.dismiss();

        // this.error = err;
      }
    );
  }
  changePass() {
    // changePassword
    // console.log("pass");

    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.AuthentionService.changePassword(this.Oldpass, this.Newpass).subscribe(
      data => {
        let value: any = JSON.parse(localStorage.getItem("userSessionData"));
        value.tkn = data.tkn;

        localStorage.setItem("userSessionData", JSON.stringify(value));
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
        } else if (JSON.parse(error._body).errorCode == "4003") {
          this.presentToast(JSON.parse(error._body).message);
        }
        loading.dismiss();
      }
    );
  }
  hasError(field: string, error: string) {
    const ctrl = this.editFormPass.get(field);
    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      cssClass: 'ErrorToast'
    });
    toast.present();
  }
}
