import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditFields } from './edit-fields';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    EditFields,
  ],
  imports: [
    IonicPageModule.forChild(EditFields),
    TranslateModule.forChild({})
  ],
})
export class EditFieldsModule { }
