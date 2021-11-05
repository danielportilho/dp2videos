import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactFormComponent } from './contact-form.component';
import { CheckboxModule } from './../checkbox/checkbox.module';
import { InputModule } from './../input/input.module';


@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputModule,
    CheckboxModule,
    HttpClientModule
  ],
  exports: [
    ContactFormComponent
  ]
})
export class ContactFormModule { }
