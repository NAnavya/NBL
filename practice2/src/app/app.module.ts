import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { Student1Component } from './student1/student1.component';
import { Student2Component } from './student2/student2.component';
import { SucesssComponent } from './sucesss/sucesss.component';
import { StudentDBComponent } from './student-db/student-db.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    Student1Component,
    Student2Component,
    SucesssComponent,
    StudentDBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
