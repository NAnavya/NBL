import { Component, OnInit } from '@angular/core';
import { Student } from '../Model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public topics=['angular','react','Javascript','Typescript']
    constructor() { }

  ngOnInit(): void {
  }
studentModel=new Student('Navya','n@gmail.com',23434,'','morning',true);
}
