import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { HomeModule } from './pages/home/home.module';
import { GetStartedModule } from './pages/get-started/get-started.module';

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    GetStartedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
