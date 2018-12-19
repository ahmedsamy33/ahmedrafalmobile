import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomsClearancePage } from './customs-clearance';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CustomsClearancePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomsClearancePage),
    TranslateModule.forChild({})
  ],
})
export class CustomsClearancePageModule {}
