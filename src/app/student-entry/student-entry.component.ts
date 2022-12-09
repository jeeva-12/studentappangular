import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {

  name=""
  rollno=""
  admno=""
  mobile=""
  college=""
  
  constructor(private api:ApiService){}
  entry=()=>
  {
    let data:any=
    {
      "name":this.name,
  "rollno":this.rollno,
  "admissionno":this.admno,
  "mobile":this.mobile,
  "college":this.college,
  
    }
    console.log(data)
    this.api.addStudent(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("Student added successfully")
  
          this.name=""
          this.rollno=""
          this.admno=""
          this.college=""
         
        
          
        } else {
          alert("something went wrong")
        }
      }
    )
  
  }



}
