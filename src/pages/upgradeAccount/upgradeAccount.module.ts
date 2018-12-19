import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpgradeAccountPage } from './upgradeAccount';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    UpgradeAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(UpgradeAccountPage),
    TranslateModule.forChild({})
  ],
})
export class UpgradeAccountPageModule { }
