import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CertifiedTranslationPage } from './certified-translation';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CertifiedTranslationPage,
  ],
  imports: [
    IonicPageModule.forChild(CertifiedTranslationPage),
    TranslateModule.forChild({})
  ],
})
export class CertifiedTranslationPageModule {}
