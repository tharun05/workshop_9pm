import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SetpasswordComponent } from './auth/setpassword/setpassword.component';
import { EditComponent } from './workshop/profile/edit/edit.component';
import { ViewComponent } from './workshop/profile/view/view.component';
import { UsersprofileComponent } from './workshop/users/usersprofile/usersprofile.component';
import { UserslistComponent } from './workshop/users/userslist/userslist.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SetpasswordComponent,
    EditComponent,
    ViewComponent,
    UsersprofileComponent,
    UserslistComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
