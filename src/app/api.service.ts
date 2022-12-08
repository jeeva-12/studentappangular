import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }
  fetchStudent=()=>
  {
    return this.http.get("http://localhost:8080/viewall")
  }
  addStudent=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addstu",dataToSend)
  }
  searchStudent=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/searchstu",dataToSend)
  }
  deleteStudent=(dataToSend:any)=>
  {
     return this.http.post("http://localhost:8080/deletestu",dataToSend)
  }
}
