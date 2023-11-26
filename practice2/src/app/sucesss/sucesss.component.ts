import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-sucesss',
  templateUrl: './sucesss.component.html',
  styleUrls: ['./sucesss.component.css']
})
export class SucesssComponent implements OnInit {

  constructor(private _studentService:StudentServiceService) { }

  ngOnInit(): void {
    
  }

}
