import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TradingAgenciesPage } from './trading-agencies';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TradingAgenciesPage,
  ],
  imports: [
    IonicPageModule.forChild(TradingAgenciesPage),
    TranslateModule.forChild({})
  ],
})
export class TradingAgenciesPageModule {}
