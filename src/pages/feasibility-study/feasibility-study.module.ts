import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeasibilityStudyPage } from './feasibility-study';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FeasibilityStudyPage,
  ],
  imports: [
    IonicPageModule.forChild(FeasibilityStudyPage),
    TranslateModule.forChild({})
  ],
})
export class FeasibilityStudyPageModule {}
