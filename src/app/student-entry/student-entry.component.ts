import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {

  name=""
  rollno=""
  admissionno=""
  mobile=""
  college=""
  parentname=""
  parentmobile=""
  username=""
  password=""

  entry=()=>
  {
    let data:any=
    {
      "name":this.name,
  "rollno":this.rollno,
  "admissionno":this.admissionno,
  "mobile":this.mobile,
  "college":this.college,
  "parentname":this.parentname,
  "parentmobile":this.parentmobile,
  "username":this.username,
  "password":this.password
    }
    console.log(data)
  }



}
