import { Component, OnInit } from '@angular/core';
import { Student } from '../Model/student';

@Component({
  selector: 'app-student1',
  templateUrl: './student1.component.html',
  styleUrls: ['./student1.component.css']
})
export class Student1Component implements OnInit {

  constructor() { }
  public topicHasErrors=false;

  public topics=['angular','react','Javascript','Typescript']
  studentModel=new Student('Navya','n@gmail.com',23434,'','morning',true);
  ngOnInit(): void {
  }
  validateTopic(topicvalue:any){
    if(topicvalue=="default"){
      this.topicHasErrors=true;
    }
    else
    this.topicHasErrors=false;
  }

}
