import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

/**
 * Generated class for the SpalshPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spalsh',
  templateUrl: 'spalsh.html',
})
export class SpalshPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public translate: TranslateService) {
    // translate.setDefaultLang('arabic');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpalshPage');
  }

  openPage() {
    this.navCtrl.setRoot('HomePage')
  }

  openloginPage() {
    this.navCtrl.setRoot('LoginPage')
  }

  changelang() {
    this.translate.use('english');

  }
  
  changelang2() {
    this.translate.use('arabic');

  }


}
