import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SafeModule } from './../../pipe/safe/safe.module';
import { ModalModule } from './../../components/modal/modal.module';
import { ContactFormModule } from './../../components/contact-form/contact-form.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SafeModule,
    ModalModule,
    ContactFormModule
  ]
})
export class HomeModule { }
