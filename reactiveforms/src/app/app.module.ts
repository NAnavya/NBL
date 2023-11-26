import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuildercompoComponent } from './form-buildercompo/form-buildercompo.component';
import { FormBuilder1Component } from './form-builder1/form-builder1.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuildercompoComponent,
    FormBuilder1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
