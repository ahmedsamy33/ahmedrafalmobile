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
import { TranslateService } from "@ngx-translate/core";
import { UserprofileProvider } from "../../providers/userprofile/userprofile";
import { Camera } from "@ionic-native/camera";
import { FilePath } from "@ionic-native/file-path";
import { File, FileEntry } from "@ionic-native/file";

@IonicPage()
@Component({
  selector: "page-establishing-companies",
  templateUrl: "establishing-companies.html"
})
export class EstablishingCompaniesPage {
  public file1: string = "";
  public file2: string = "";
  public file3: string = "";
  public file4: string = "";

  public picname1: string = "";
  public picname2: string = "";
  public picname3: string = "";
  public picname4: string = "";

  public imageBlob1: any;
  public imageBlob2: any;
  public imageBlob3: any;
  public imageBlob4: any;

  public countryArr = [];
  public RegionArr = [];

  private Country: string = null;
  private Region: string = null;
  private Activity: string = null;
  // private IdNo: string = null;
  private Capital: string = null;
  private Others: string = null;

  public pleaseWait: string = null;

  establishingForm: FormGroup;

  path1: string = "";
  path2: string = "";
  path3: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private builder: FormBuilder,
    private SharedService: SharedServiceProvider,
    private usergetpicklist: UserprofileProvider,
    private loading: LoadingController,
    public translate: TranslateService,
    private camera: Camera,
    private file: File,
    private filePath: FilePath,
    public platform: Platform
  ) {
    this.establishingForm = this.builder.group({
      country: ["", Validators.required],
      region: ["", Validators.required],
      activity: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('^[a-zA-Z]+$')]
      ],
      // idNo: ["", Validators.required],
      capital: ["", [Validators.required, Validators.minLength(4)]],
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
    this.usergetpicklist.getPickListCCJ("Country", lang).subscribe(
      data => {
        // console.log("alne", data);
        this.countryArr = data;
      },
      error => { }
    );
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad EstablishingCompaniesPage");
  }

  establishingService() {
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    this.SharedService.establishingService(
      this.Country,
      this.Activity,
      this.Region,
      this.Capital,
      this.Others,
      this.imageBlob1,
      this.imageBlob2,
      this.imageBlob3
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

  // take image 2
  public takePicture2(sourceType) {
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
          // this.path2 = filePath;
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
      // allowEdit: true,
      // destinationType: this.camera.DestinationType.DATA_URL,
      // targetWidth: 50,
      // targetHeight: 50
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
          // this.path3 = filePath;
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

  // take image 4
  // public takePicture4(sourceType) {
  //   // Create options for the Camera Dialog
  //   var options = {
  //     quality: 70,
  //     sourceType: sourceType,
  //     saveToPhotoAlbum: false,
  //     correctOrientation: true
  //     // allowEdit: true,
  //     // destinationType: this.camera.DestinationType.DATA_URL,
  //     // targetWidth: 50,
  //     // targetHeight: 50
  //   };

  //   // Get the data of an image
  //   this.camera.getPicture(options).then(
  //     imagePath => {
  //       // Special handling for Android library
  //       this.file4 = imagePath;
  //       this.uploadImage(4);

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
  //           this.picname4 = currentName;
  //           // this.path = filePath;
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
  //       this.file4 = "";
  //       // this.correctPath = '';
  //       this.picname4 = "";
  //       // this.path = '';
  //     }
  //   );
  // }

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
    // else if (para == 4) {
    //   this.file
    //     .resolveLocalFilesystemUrl(this.file4)
    //     .then(entry =>
    //       (<FileEntry>entry).file(file => {
    //         this.readfile4(file);
    //       })
    //     )
    //     .catch(err => this.presentToast("err " + err));
    // }
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

  // read form mobile4
  // public readfile4(file: any) {
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     const imgBlob = new Blob([reader.result], { type: file.type });
  //     this.imageBlob4 = imgBlob;
  //   };
  //   reader.readAsArrayBuffer(file);
  // }
  hasError(field: string, error: string) {
    const ctrl = this.establishingForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }
}
