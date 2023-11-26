
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm=new FormGroup({
    userName: new FormControl('Navya'),
    password: new FormControl(''),
    confirmPassword:new FormControl(''),
    address: new FormGroup({
      city:new FormControl(''),
      state:new FormControl('')
    })
  });

  loadApiData(){
    // this.registrationForm.setValue({
    //   userName: 'NavyaKumari',
    //   password: 'navya',
    //   confirmPassword:'navya',
    //   address:{
    //     city:'Vijayawada',
    //     state:'AndhraPradesh'
    // }

    this.registrationForm.patchValue({
      userName: 'NavyaKumari',
      password: 'navya',
      confirmPassword:'navya',
      address:{
        city:'Vijayawada', 
        state:'AndhraPradesh'
    }
  });
}
title = 'reactiveforms';

}