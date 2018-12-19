import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAdsPage } from './addAds';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AddAdsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAdsPage),
    TranslateModule.forChild({})
  ],
})
export class AddAdsPageModule { }
