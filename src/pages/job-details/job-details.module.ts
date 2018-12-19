import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobDetailsPage } from './job-details';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    JobDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(JobDetailsPage),
    TranslateModule.forChild({})
  ],
})
export class JobDetailsPageModule {}
