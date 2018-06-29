import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { EditComponent } from './workshop/profile/edit/edit.component';
import { ViewComponent } from './workshop/profile/view/view.component';
import { UsersprofileComponent } from './workshop/users/usersprofile/usersprofile.component';
import { UserslistComponent } from './workshop/users/userslist/userslist.component';

import {AuthModule} from '../app/auth/auth.module'
@NgModule({
  declarations: [
    AppComponent,

    EditComponent,
    ViewComponent,
    UsersprofileComponent,
    UserslistComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
