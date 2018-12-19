import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindJobPage } from './find-job';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FindJobPage,
  ],
  imports: [
    IonicPageModule.forChild(FindJobPage),
    TranslateModule.forChild({})
  ],
})
export class FindJobPageModule {}
