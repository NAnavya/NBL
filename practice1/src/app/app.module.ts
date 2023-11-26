import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { CourseComponent } from './course/course.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { DetailsComponent } from './details/details.component';
import { AdminChildComponent } from './admin-child/admin-child.component';
import { AdminChild2Component } from './admin-child2/admin-child2.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CourseComponent,
    routingComponents,
    PageNotfoundComponent,
    DetailsComponent,
    AdminChildComponent,
    AdminChild2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
