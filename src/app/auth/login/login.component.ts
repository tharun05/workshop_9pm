import { Component, OnInit } from '@angular/core';
import {FormsModule,FormGroup,FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userDetailsForm:FormGroup;
  constructor() {
    
   }

  ngOnInit() {
  }
  Login(){
    console.log('clicked')
  }
}
