import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {IonicModule} from '@ionic/angular';
import {DialogModule} from '../@core/modules/dialog';
import {UploaderModule} from './modules/uploader';
import {PickerModule} from '../@core/modules/picker';
import {ToastModule} from '../@core/modules/toast';
import {COMPONENTS, ENTRY_COMPONENTS, PIPES, DIRECTIVES} from './index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    IonicModule,
    DialogModule,
    UploaderModule,
    PickerModule,
    ToastModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DialogModule,
    UploaderModule,
    PickerModule,
    ToastModule,
    ...COMPONENTS,
    ...PIPES
  ],
  declarations: [...COMPONENTS, ...ENTRY_COMPONENTS, ...PIPES, ...DIRECTIVES],
  entryComponents: [ENTRY_COMPONENTS],
  providers: []
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ThemeModule,
      providers: []
    } as ModuleWithProviders;
  }
}
