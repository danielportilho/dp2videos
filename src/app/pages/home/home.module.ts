import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SafeModule } from './../../pipe/safe/safe.module';
import { ModalModule } from './../../components/modal/modal.module';

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
    ModalModule
  ]
})
export class HomeModule { }
