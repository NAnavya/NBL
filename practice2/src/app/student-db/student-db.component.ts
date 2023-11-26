import { Component, OnInit } from '@angular/core';
import { Student } from '../Model/student';
import { Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { StudbService } from '../studb.service';
import { Imgdata } from '../Model/imgdata';

@Component({
  selector: 'app-student-db',
  templateUrl: './student-db.component.html',
  styleUrls: ['./student-db.component.css']
})
export class StudentDBComponent implements OnInit {
  public topicHasErrors=false;
  public response="";
  public errormsg="";
  public submitted=true;
  public id:number=0;
  public studata:Student | undefined;
  public img="";
  public imageData:Imgdata=new Imgdata(this.id,this.img);

  imageUrl: string = ''; // To display the selected image
  selectedFile: File | null = null; // To store the selected image file


  public topics=['angular','react','Javascript','Typescript']
  studentModel=new Student('Navya','n@gmail.com',23434,'','morning',true);
  imgdata=new Imgdata(2,this.imageUrl);
  constructor(private router :Router,private _studentService:StudbService) { }

  ngOnInit(): void {
  }
  validateTopic(topicvalue:any){
    if(topicvalue=="default"){
      this.topicHasErrors=true;
    }
    else
    this.topicHasErrors=false;
  }

  getdata(id:any){
        this._studentService .getstudb(id).subscribe(n=>this.studata=n);
  }
  deldata(id:any){
    this._studentService .delstudb(id);
}

getImg(imag:any){
  this.img=imag;
  console.log(imag);
}

onImageSelect(event: any) {
  const file = event.target.files[0]; // Get the selected file
  this.selectedFile = file;

  // Display a preview of the selected image
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageUrl = e.target?.result as string;
    };
    reader.readAsDataURL(file);

  }
 
}

uploadImage() {
  // if (this.selectedFile) {
    // You can now upload this.selectedFile to your server
    // Implement your HTTP POST request to send the image to the server.
    // For example, using Angular's HttpClient.

    // After successfully uploading, you can reset the image and file selection.
    // this.imageUrl = '';
    // this.selectedFile = null;
    console.log(this.imageUrl)
    this.imgdata=new Imgdata(2,this.imageUrl);
 
    this._studentService.postimgdb(this.imgdata);
  // } else {
  //   // Handle the case when no file is selected
  //   console.log('No file selected.');

  
}
  onSubmitHandler(formdata:any){
    console.log(formdata);
    console.log(formdata.value);
    console.log(this.studentModel);
    this.submitted=false;
    this._studentService.poststudb(this.studentModel).subscribe(data=>{
    this.response=data;(error: string)=>{
  this.errormsg=error;
    }
    })
    if(this.response=="sucess"){
  this.router.navigate(['/sucess']);
  }
}
}
