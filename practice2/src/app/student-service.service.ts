import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './Model/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http:HttpClient) { }
  postStudent(student:Student)  {
    return this.http.post<any>("http://localhost:8080/addStudent", student);
  }
}
