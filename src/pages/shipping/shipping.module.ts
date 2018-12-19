import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShippingPage } from './shipping';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ShippingPage,
  ],
  imports: [
    IonicPageModule.forChild(ShippingPage),
    TranslateModule.forChild({})
  ],
})
export class ShippingPageModule {}
