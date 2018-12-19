import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerifyPage } from './verify';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    VerifyPage,
  ],
  imports: [
    IonicPageModule.forChild(VerifyPage),
    TranslateModule.forChild({})
  ],
})
export class VerifyPageModule {}
