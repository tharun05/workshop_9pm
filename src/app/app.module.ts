import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AuthModule} from '../app/auth/auth.module';
import {WorkshopModule} from '../app/workshop/workshop.module';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AuthModule,
    WorkshopModule,
    HttpClientModule,
    HttpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
