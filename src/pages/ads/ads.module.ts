import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdsPage } from './ads';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AdsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdsPage),
    TranslateModule.forChild({})
  ],
})
export class AdsPageModule { }
