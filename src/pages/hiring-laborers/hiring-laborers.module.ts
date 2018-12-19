import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HiringLaborersPage } from './hiring-laborers';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HiringLaborersPage,
  ],
  imports: [
    IonicPageModule.forChild(HiringLaborersPage),
    TranslateModule.forChild({})
  ],
})
export class HiringLaborersPageModule {}
