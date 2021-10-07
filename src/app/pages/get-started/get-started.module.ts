import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetStartedComponent } from './get-started.component';
import { ModalModule } from './../../components/modal/modal.module';

@NgModule({
  declarations: [
    GetStartedComponent
  ],
  exports: [
    GetStartedComponent
  ],
  imports: [
    CommonModule,
    ModalModule
  ]
})
export class GetStartedModule { }
