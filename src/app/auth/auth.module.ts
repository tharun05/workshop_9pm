import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {LoginComponent} from './login/login.component';
import {SetpasswordComponent} from './setpassword/setpassword.component';
import {RegisterComponent} from './register/register.component'
import {AuthService} from './auth.service';
import {MatCardModule} from '@angular/material/card';

import {Routes,RouterModule} from '@angular/router'
import {FlexLayoutModule} from '@angular/flex-layout'
const routes:Routes = [
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'setpassword',component:SetpasswordComponent}
]
@NgModule({
    imports:[
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        RouterModule.forRoot(routes,{useHash:false})
    
    ],
    declarations:[LoginComponent,SetpasswordComponent,RegisterComponent],
    providers:[AuthService],
    exports:[RouterModule,FlexLayoutModule,MatCardModule,MatInputModule,MatButtonModule]
})

export class AuthModule{

}