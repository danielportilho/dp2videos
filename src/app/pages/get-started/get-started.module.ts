import { ContactFormModule } from './../../components/contact-form/contact-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GetStartedComponent } from './get-started.component';
import { ModalModule } from './../../components/modal/modal.module';
import { InputModule } from './../../components/input/input.module';
import { CheckboxModule } from './../../components/checkbox/checkbox.module';

@NgModule({
  declarations: [
    GetStartedComponent
  ],
  exports: [
    GetStartedComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    ContactFormModule
  ]
})
export class GetStartedModule { }
