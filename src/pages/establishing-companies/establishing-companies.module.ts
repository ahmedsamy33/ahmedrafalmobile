import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstablishingCompaniesPage } from './establishing-companies';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    EstablishingCompaniesPage,
  ],
  imports: [
    IonicPageModule.forChild(EstablishingCompaniesPage),
    TranslateModule.forChild({})
  ],
})
export class EstablishingCompaniesPageModule {}
