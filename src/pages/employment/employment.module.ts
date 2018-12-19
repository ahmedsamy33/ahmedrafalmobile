import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmploymentPage } from './employment';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    EmploymentPage,
  ],
  imports: [
    IonicPageModule.forChild(EmploymentPage),
    TranslateModule.forChild({})
  ],
})
export class EmploymentPageModule {}
