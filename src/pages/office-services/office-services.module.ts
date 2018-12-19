import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficeServicesPage } from './office-services';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    OfficeServicesPage,
  ],
  imports: [
    IonicPageModule.forChild(OfficeServicesPage),
    TranslateModule.forChild({})
  ],
})
export class OfficeServicesPageModule {}
