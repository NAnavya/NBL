import { Component, OnInit } from '@angular/core';
import { Student } from '../Model/student';
import { Route, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student2',
  templateUrl: './student2.component.html',
  styleUrls: ['./student2.component.css']
})
export class Student2Component implements OnInit {
  public topicHasErrors=false;
  public response="";
  public errormsg="";
  public submitted=true;

  public topics=['angular','react','Javascript','Typescript']
  studentModel=new Student('Navya','n@gmail.com',23434,'','morning',true);
  constructor(private router :Router,private _studentService:StudentServiceService) { }

  ngOnInit(): void {
  }
  validateTopic(topicvalue:any){
    if(topicvalue=="default"){
      this.topicHasErrors=true;
    }
    else
    this.topicHasErrors=false;
  }
  onSubmitHandler(formdata:any){
    console.log(formdata);
    console.log(formdata.value);
    console.log(this.studentModel);
    this.submitted=false;
    this._studentService.postStudent(this.studentModel).subscribe(data=>{
    this.response=data;
    (error: string)=>{
  this.errormsg=error;
    }
    })
    if(this.response=="sucess"){
  this.router.navigate(['/sucess']);
  }
}
}
