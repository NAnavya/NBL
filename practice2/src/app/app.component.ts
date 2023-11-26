import { Component } from '@angular/core';
import { Student } from './Model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice2';
  topics=['Angular','React','Typescript','JavaScript'];
  studentModel=new Student('Navya','n@gmail.com',23434,'','morning',true);
}
