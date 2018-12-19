import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  Platform
} from "ionic-angular";
import { UserprofileProvider } from "../../providers/userprofile/userprofile";
import { TranslateService } from "@ngx-translate/core";
import { settings } from "../../app/settings";
import { FileOpener } from '@ionic-native/file-opener';
import { FileTransfer } from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file";
import { sessionData } from "../../app/session-data";

/**
 * Generated class for the FindJobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-find-job",
  templateUrl: "find-job.html"
})
export class FindJobPage {
  jobs: string = "jobs";
  items = [];

  // seach varia
  public searchlabores: string;
  public searchjobs: string;
  // get temporary var
  public getSerchJob: string;
  public getSerchLabores: string;
  // page number and limition
  public pageNumLabores: number = 1;
  public LimitLabores: number = 5;

  // page number  and limition
  public pageNumJob: number = 1;
  public LimitJob: number = 5;
  // array to save data
  public arrayJobs = [];
  public arraylaborers = [];

  // total page number
  public TotalPageNumberJobs: number;
  public TotalPageNumberLaborers: number;

  // img url
  public imgeUrl = settings.imageUrl;

  public pleaseWait: string = null;
  public jobTitle = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loading: LoadingController,
    private Userprofile: UserprofileProvider,
    public translate: TranslateService,

    private fileOpener: FileOpener,
    private file: File,
    private transfer: FileTransfer,
    private platform: Platform
  ) {
    this.translate.get(["pleaseWait"]).subscribe(res => {
      this.pleaseWait = res.pleaseWait;
    });

    let lang = localStorage.getItem("lang");
    if (lang == "english") {
      lang = "English";
    } else {
      lang = "Arabic";
    }

    this.Userprofile.getPickListCCJ("Job_Title", lang).subscribe(
      data => {
        // console.log(data);
        this.jobTitle = data;
      },
      error => { }
    );
  }
  //  for laborar
  doInfiniteForlabores(infiniteScroll) {
    if (
      this.TotalPageNumberLaborers != undefined &&
      this.pageNumLabores < this.TotalPageNumberLaborers + 1 &&
      this.TotalPageNumberLaborers != 1
    ) {
      this.pageNumLabores = this.pageNumLabores + 1;
      setTimeout(() => {
        if (this.getSerchLabores != "" && this.getSerchLabores != null) {
          let lang = localStorage.getItem("lang");
          if (lang == "english") {
            lang = "English";
          } else {
            lang = "Arabic";
          }
          this.Userprofile.searchHiringlabors(
            this.LimitLabores,
            this.pageNumLabores,
            lang,
            this.getSerchJob
          ).subscribe(
            data => {
              for (let index = 0; index < data.data.length; index++) {
                this.arraylaborers.push(data.data[index]);
              }
              // console.log(" this.getSerchLabores", this.getSerchLabores);
            },
            error => {
              console.log("error ", error);
            }
          );
        }
        infiniteScroll.complete();
      }, 1000);
    } else {
      infiniteScroll.enable(false);
    }
  }
  //  for job
  doInfiniteForJob(infiniteScroll) {
    if (
      this.TotalPageNumberJobs != undefined &&
      this.pageNumJob < this.TotalPageNumberJobs + 1 &&
      this.TotalPageNumberJobs != 1
    ) {
      this.pageNumJob = this.pageNumJob + 1;
      setTimeout(() => {
        if (this.getSerchJob != "" && this.getSerchJob != null) {
          let lang = localStorage.getItem("lang");
          if (lang == "english") {
            lang = "English";
          } else {
            lang = "Arabic";
          }
          this.Userprofile.searchHiringlabors(
            this.LimitJob,
            this.pageNumJob,
            lang,
            this.getSerchJob
          ).subscribe(
            data => {
              for (let index = 0; index < data.data.length; index++) {
                this.arrayJobs.push(data.data[index]);
              }
              // console.log(" this.arrayJobs", this.arrayJobs);
            },
            error => {
              console.log("error ", error);
            }
          );
        }
        infiniteScroll.complete();
      }, 1000);
    } else {
      infiniteScroll.enable(false);
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad FindJobPage");
  }

  GoToJobDetailsPage(item) {
    this.navCtrl.push("JobDetailsPage", { data: item });
  }

  // labors "Doc"
  getEmployeeSearch() {
    // this.searchlabores = "";
    // console.log(this.searchlabores);

    if (this.searchlabores != "" && this.searchlabores != null) {
      this.arraylaborers = [];
      this.getSerchLabores = this.searchlabores;
      // this.searchlabores = "";
      let loading = this.loading.create({
        content: this.pleaseWait
      });
      loading.present();
      if (this.getSerchLabores != "" && this.getSerchLabores != null) {
        let lang = localStorage.getItem("lang");
        if (lang == "english") {
          lang = "English";
        } else {
          lang = "Arabic";
        }
        this.Userprofile.searchEmploment(
          this.LimitLabores,
          this.pageNumLabores,
          lang,
          this.getSerchLabores
        ).subscribe(
          data => {
            for (let index = 0; index < data.data.length; index++) {
              this.arraylaborers.push(data.data[index]);
            }
            let size = Math.floor(data.size / this.LimitJob);
            // console.log("size : ", size);
            if (size == 0) {
              this.TotalPageNumberLaborers = 1;
            } else {
              this.TotalPageNumberLaborers = size;
            }
            loading.dismiss();
            // this.TotalPageNumberJobs=x
            // console.log(" this.arraylaborers", this.arraylaborers);
          },
          error => {
            // console.log("error ", error);
            loading.dismiss();
          }
        );
      }
    }
  }

  // jobs
  getHiringlaborsSearch() {
    // this.searchlabores = "";

    if (this.searchjobs != "" && this.searchjobs != null) {
      this.arrayJobs = [];
      this.getSerchJob = this.searchjobs;
      // this.searchjobs = "";
      let loading = this.loading.create({
        content: this.pleaseWait
      });
      loading.present();
      if (this.getSerchJob != "" && this.getSerchJob != null) {
        let lang = localStorage.getItem("lang");
        if (lang == "english") {
          lang = "English";
        } else {
          lang = "Arabic";
        }
        this.Userprofile.searchHiringlabors(
          this.LimitJob,
          this.pageNumJob,
          lang,
          this.getSerchJob
        ).subscribe(
          data => {
            // console.log(data);

            for (let index = 0; index < data.data.length; index++) {
              this.arrayJobs.push(data.data[index]);
            }
            let size = Math.floor(data.size / this.LimitJob);
            // console.log("size : ", size);
            if (size == 0) {
              this.TotalPageNumberJobs = 1;
            } else {
              this.TotalPageNumberJobs = size;
            }
            loading.dismiss();

            // this.TotalPageNumberJobs=x
            // console.log(" this.arrayJobs", this.arrayJobs);
          },
          error => {
            loading.dismiss();

            console.log("error ", error);
          }
        );
      }

      // console.log(this.getSerchJob);
    }
  }

  // reset job
  ResetJob() {
    // seach varia
    this.searchjobs = "";
    // get temporary var
    this.getSerchJob = "";
    // page number and limition

    // page number  and limition
    this.pageNumJob = 1;
    this.LimitJob = 5;
    // array to save data
    this.arrayJobs = [];

    // total page number
    this.TotalPageNumberJobs = undefined;
    this.TotalPageNumberLaborers = undefined;
  }

  // reset Laborares
  ResetLaborares() {
    // seach varia
    this.searchlabores = "";
    // page number and limition
    this.pageNumLabores = 1;
    this.LimitLabores = 5;

    // array to save data
    this.arraylaborers = [];

    // total page number
    this.TotalPageNumberJobs = undefined;
    this.TotalPageNumberLaborers = undefined;
  }

  downloadCV(item) {
    // console.log(item);

    let exection = item.cvName.substr(item.cvName.lastIndexOf(".") + 1);
    // console.log(item.cvName.substr(item.cvName.lastIndexOf(".") + 1));

    let url =
      "http://rafalgroups.com/Dolphin_Services/formservices/getfile?filename=" + item.cvName + "&type=Employment";

    // console.log(url);


    let path;
    if (this.platform.is("ios")) {
      path = this.file.documentsDirectory;
    } else if (this.platform.is("android")) {
      path = this.file.dataDirectory;
    }
    // console.log(path);

    let MimeType;

    if (exection == 'png') {
      MimeType = "image/png"
    } else if (exection == 'jpeg') {
      MimeType = "image/jpeg"
    }
    else if (exection == 'pdf') {
      MimeType = "application/pdf"
    }
    else if (exection == 'doc') {
      MimeType = "application/msword"
    } else if (exection == 'docx') {
      MimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    }
    let token = sessionData.userSessionData.tkn;
    // console.log(MimeType);
    let loading = this.loading.create({
      content: this.pleaseWait
    });
    loading.present();
    const transfer = this.transfer.create();
    transfer
      .download(url, path + item.cvName, true, {
        headers: { tkn: token }
      })
      .then(entry => {
        let url1 = entry.toURL();
        console.log("entry : ", entry);
        console.log("url : ", url1);
        loading.dismiss();

        this.fileOpener.open(url1, MimeType);
      }).catch(erro => {
        loading.dismiss();

      });

  }
}
