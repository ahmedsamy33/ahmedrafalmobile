import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharterAccountingPage } from './charter-accounting';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CharterAccountingPage,
  ],
  imports: [
    IonicPageModule.forChild(CharterAccountingPage),
    TranslateModule.forChild({})
  ],
})
export class CharterAccountingPageModule {}
