import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/user-name.validators';
import { PasswordValidator } from '../shared/PasswordValidator';

@Component({
  selector: 'app-form-buildercompo',
  templateUrl: './form-buildercompo.component.html',
  styleUrls: ['./form-buildercompo.component.css']
})
export class FormBuildercompoComponent implements OnInit {

  get name(){  // It is like getter method in typescript
    return this.registrationForm.get('userName');
  }

   get city(){  // It is like getter method in typescript
    return this.registrationForm.get('address.city');
  }
   get password(){  // It is like getter method
    return this.registrationForm.get('password');
   }
  constructor(private fb:FormBuilder) { }
    registrationForm=this.fb.group({
     // userName:['Navya',[Validators.required,Validators.minLength(3),forbiddenNameValidator]],
     userName:['Navya',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
     password:['',Validators.required],
      confirmPassword:[''],
      address:this.fb.group({
        city:['vijayawada',Validators.required],
        state:[''],
        postalCode:['']
      })
    //});
   },{validator: PasswordValidator});
  ngOnInit(): void {
  }

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

}
