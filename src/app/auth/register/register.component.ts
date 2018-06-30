import { Component, OnInit } from '@angular/core';
import {Register} from '../../apex/entities/register.entity';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register:Register = new Register();


  workstatus = [
    {value: 'Employee', viewValue: 'Employee'},
    {value: 'Student', viewValue: 'Student'},
    {value: 'Others', viewValue: 'Others'}
  ];
  technologies = [
    {value: 'Front End', viewValue: 'Front End'},
    {value: 'Devops', viewValue: 'Devops'},
    {value: 'Full Stack', viewValue: 'Full Stack'},
    {value: 'Python', viewValue: 'Python'},
    {value: 'Gaming', viewValue: 'Gaming'},
    {value: 'Design', viewValue: 'Design'},
    {value: 'Digital Marketing', viewValue: 'Digital Marketing'},
  ];
  constructor() {

    console.log(this.register)
   }

  ngOnInit() {
  }

}
