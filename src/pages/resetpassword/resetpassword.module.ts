import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetpasswordPage } from './resetpassword';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ResetpasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ResetpasswordPage),
    TranslateModule.forChild({})
  ],
})
export class ResetpasswordPageModule {}
