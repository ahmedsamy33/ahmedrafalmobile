import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpalshPage } from './spalsh';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    SpalshPage,
  ],
  imports: [
    IonicPageModule.forChild(SpalshPage),
    TranslateModule
  ],
  exports: [
    TranslateModule
  ]
  // providers: [TranslateStore]
})
export class SpalshPageModule { }
