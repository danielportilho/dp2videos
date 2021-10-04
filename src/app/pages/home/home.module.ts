import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeModule } from './../../pipe/safe/safe.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SafeModule
  ]
})
export class HomeModule { }
