import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './Model/student';
import { Observable } from 'rxjs';
import { Imgdata } from './Model/imgdata';

@Injectable({
  providedIn: 'root'
})
export class StudbService {
  static getstudb(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  poststudb(stu :Student){
    return this.http.post<any>("http://localhost:8000/student",stu)
  }
  getstudb(id:any):Observable<Student>{ 
   // console.log(this.http.get<Student>("http://localhost:8000/student/"+id));
    return this.http.get<Student>("http://localhost:8000/student/"+id) ;
  }
  delstudb(id:any){ 
    // console.log(this.http.get<Student>("http://localhost:8000/student/"+id));
      console.log(this.http.delete<any>("http://localhost:8000/student/"+id));
   }
   postimgdb(img :Imgdata){
    console.log(img);
   this.http.post<any>("http://localhost:8000/Images",img);
  }
  getimgdb(id:any):Observable<Student>{ 
   // console.log(this.http.get<Student>("http://localhost:8000/student/"+id));
    return this.http.get<Student>("http://localhost:8000/image/"+id) ;
  }

}
