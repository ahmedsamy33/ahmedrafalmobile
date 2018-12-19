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
import { File, FileEntry } from "@ionic-native/file";
import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer";
import { FilePath } from "@ionic-native/file-path";
import { Camera } from "@ionic-native/camera";
@IonicPage()
@Component({
  selector: "page-charter-accounting",
  templateUrl: "charter-accounting.html"
})
export class CharterAccountingPage {
  private YearBudget: string = null;
  // private Others: string = null;
  public pleaseWait: string = null;
  public charterForm: FormGroup;

  public file1: string = "";
  public file2: string = "";
  public file3: string = "";

  public picname1: string = "";
  public picname2: string = "";
  public picname3: string = "";

  public imageBlob1: any;
  public imageBlob2: any;
  public imageBlob3: any;

  path1: string = "";
  path2: string = "";
  path3: string = "";

  public correctPathTest: string;
  constructor(
    public navCtrl: NavController,
    private builder: FormBuilder,
    public toastCtrl: ToastController,
    private SharedService: SharedServiceProvider,
    private loading: LoadingController,
    public translate: TranslateService,
    private camera: Camera,
    private FileTransfer: FileTransfer,
    private file: File,
    private filePath: FilePath,
    public platform: Platform
  ) {
    this.charterForm = this.builder.group({
      yearBudget: [
        "",
        [Validators.required, Validators.minLength(3)]
      ],
      others: [""]
    });
    this.translate.get(["pleaseWait"]).subscribe(res => {
      this.pleaseWait = res.pleaseWait;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CharterAccountingPage");
  }

  charterService() {
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.SharedService.charterService(
      this.imageBlob1,
      this.imageBlob2,
      this.imageBlob3,
      this.YearBudget
    ).subscribe(
      data => {
        this.navCtrl.setRoot("HomePage");
        loading.dismiss();
      },
      error => {
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
    };

    // Get the data of an image
    this.camera.getPicture(options).then(
      imagePath => {
        // Special handling for Android library
        this.file1 = imagePath;
        // this.uploadImage(1);
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
            // console.log("imagePath : ", imagePath);
            // console.log("filePath : ", filePath);

            // console.log("correctPath : ", correctPath);
            // console.log("currentName : ", currentName);

            this.correctPathTest = correctPath;
            this.test(this.correctPathTest);
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
    if (para == 1) {
      this.file
        .resolveLocalFilesystemUrl(this.file1)
        .then(entry =>
          (<FileEntry>entry).file(file => {
            this.readfile1(file);
          })
        )
        .catch(err => this.presentToast("err " + err));
    } else if (para == 2) {
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

  // read form mobile1
  public readfile1(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const imgBlob = new Blob([reader.result], { type: file.type });
      this.imageBlob1 = imgBlob;
    };
    reader.readAsArrayBuffer(file);
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

  public test(directrory) {
    this.file.resolveDirectoryUrl(directrory).then(directoryUrl => {
      this.file.getFile(directoryUrl, this.picname1, {}).then(fileEntry => {
        // this.readfile1(fileEntry);
        fileEntry.file(file => {
          // console.log("file local2 ", file);

          this.readfile1(file);
        });
        // console.log("get file2 :", fileEntry);
      });
    });
  }
  hasError(field: string, error: string) {
    const ctrl = this.charterForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }
}
