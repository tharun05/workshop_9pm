import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import{FlexLayoutModule} from '@angular/flex-layout';


import {MatCardModule} from '@angular/material/card';
import {Routes,RouterModule} from '@angular/router';

import {EditComponent} from './profile/edit/edit.component';
import {ViewComponent} from './profile/view/view.component';
import {UserslistComponent} from './users/userslist/userslist.component';
import {UsersprofileComponent} from './users/usersprofile/usersprofile.component'

import {UsersService} from './users/users.service';
import {ProfileService} from './profile/profile.service';

const routes:Routes = [
    {path:'myProfile-edit', component:EditComponent},
    {path:'myProfile',component:ViewComponent},
    {path:'userProfile',component:UsersprofileComponent},
    {path:'userList',component:UserslistComponent}
]



@NgModule({
    imports:[
        CommonModule,
        FlexLayoutModule,
        RouterModule.forRoot(routes,{useHash:false}),
        MatCardModule,
        MatInputModule,
        MatButtonModule
        
    ],
    declarations:[EditComponent,ViewComponent,UserslistComponent,UsersprofileComponent],
    providers:[UsersService,ProfileService],
    exports:[RouterModule,FlexLayoutModule,MatCardModule,MatInputModule,MatButtonModule]
})

export class WorkshopModule{

}