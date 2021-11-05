import { CheckboxModule } from './components/checkbox/checkbox.module';
import { InputModule } from './components/input/input.module';
import { ModalModule } from './components/modal/modal.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { GetStartedModule } from './pages/get-started/get-started.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    GetStartedModule,
    FormsModule,
    ModalModule,
    InputModule,
    CheckboxModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
    Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
